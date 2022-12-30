import { WysiwygCore, WysiwygOptions, WysiwygChangeType } from './common';

import { WysiwygToolbar } from './toolbar';
import { WysiwygPopup } from './popup';


export class Wysiwyg implements WysiwygCore {

    public rootContainer: HTMLElement;
    public editContainer: HTMLElement;

    private toolbar: WysiwygToolbar;
    private popup: WysiwygPopup;

    private savedSelection: Range;

    private value: string;
    private valueChange: WysiwygOptions['onChange'];

    constructor(options: WysiwygOptions) {
        this.valueChange = options.onChange || (() => { });
        this.rootContainer = document.querySelector(options.selector);
        this.editContainer = this.rootContainer.querySelector('[contenteditable]');
        this.toolbar = new WysiwygToolbar(this, options.buttons);
        this.popup = new WysiwygPopup(this);
        this.initContainer();
    }

    private initContainer() {
        let keyupTimeout = null;
        let focusTimeout = null;
        // register the function to run when keyup
        this.editContainer.addEventListener('keyup', () => {
            if (keyupTimeout) {
                clearTimeout(keyupTimeout);
            }
            keyupTimeout = setTimeout(() => {
                this.valueChangeCaller('keyup');
                keyupTimeout = null;
            }, 500);
        });
        // register the function to run when getting focus
        this.editContainer.addEventListener('focus', () => {
            if (focusTimeout) {
                clearTimeout(focusTimeout);
            }
            focusTimeout = null;
            this.toolbar.onfocus();
            this.rootContainer.classList.add('focus');
        });
        // register the function to run when focus is lost
        this.editContainer.addEventListener('blur', () => {
            if (focusTimeout || document.activeElement === this.editContainer) {
                return;
            }
            focusTimeout = setTimeout(() => {
                this.rootContainer.classList.remove('focus');
                this.toolbar.onblur();
                focusTimeout = null;
            }, 50);
        });
    }

    private execCommand(cmd: string, param?: string, forceSelection?: boolean) {
        // give selection to contenteditable element
        this.restoreSelection();
        // tried to avoid forcing focus()
        this.editContainer.focus();
        // exec supported command
        if (this.selectionInside(this.editContainer, forceSelection)) {
            try {
                if (document.queryCommandSupported(cmd)) {
                    // https://developer.mozilla.org/zh-CN/docs/Web/API/Document/execCommand
                    return document.execCommand(cmd, false, param);
                }
            } catch (e) {
                console.warn(e);
            }
        }
        return false;
    }

    private selectionInside(container: HTMLElement, force?: boolean) {
        const sel = window.getSelection();
        // selection inside editor
        if (this.isOrContainsNode(container, sel.anchorNode)) {
            return true;
        }
        if (this.isOrContainsNode(container, sel.focusNode)) {
            return true;
        }
        // force selection to editor
        if (force === true) {
            const range = document.createRange();
            range.selectNodeContents(container);
            range.collapse(false);
            sel.removeAllRanges();
            sel.addRange(range);
            return true;
        }
        // selection at least partly outside editor
        return false;
    }

    private isOrContainsNode(ancestor: Node, descendant: Node) {
        while (descendant) {
            if (descendant === ancestor) {
                return true;
            }
            descendant = descendant.parentNode;
        }
        return false;
    }

    private valueChangeCaller(type: WysiwygChangeType) {
        if (this.value !== this.editContainer.innerHTML) {
            this.value = this.editContainer.innerHTML;
            this.valueChange(type);
        }
    }

    // properties

    public exec(command: string, param?: string) {
        const force = /insertHTML|insertImage/.test(command);
        this.execCommand(command, param, force);
        this.valueChangeCaller('exec');
        return this;
    }

    public getContent() {
        return this.editContainer.innerHTML;
    }

    public setContent(html: string) {
        this.editContainer.innerHTML = html || '';
        this.valueChangeCaller('set');
        this.collapseSelection();
        return this;
    }

    public getSelected() {
        this.restoreSelection();
        if (!this.selectionInside(this.editContainer)) {
            return null;
        }
        if (window.getSelection().isCollapsed) {
            return null;
        }
        const sel = window.getSelection();
        if (sel.rangeCount > 0) {
            const div = document.createElement('div');
            for (let i = 0; i < sel.rangeCount; ++i) {
                div.appendChild(sel.getRangeAt(i).cloneContents());
            }
            return div.innerHTML;
        }
        return null;
    }

    // selection

    public saveSelection() {
        const sel = window.getSelection();
        if (sel.rangeCount > 0) {
            this.savedSelection = sel.getRangeAt(0);
        }
        return this;
    }

    public restoreSelection() {
        if (this.savedSelection) {
            const sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(this.savedSelection);
        }
        return this;
    }

    public collapseSelection() {
        const sel = window.getSelection();
        sel.isCollapsed || sel.collapseToEnd();
        this.savedSelection = null; // destroyed
        return this;
    }

    // popup

    public openPopup(button: HTMLButtonElement, factory: (p: HTMLElement) => void) {
        this.saveSelection();
        this.popup.create(button, factory);
        return this;
    }

    public closePopup() {
        this.collapseSelection();
        this.popup.remove();
        return this;
    }

}
