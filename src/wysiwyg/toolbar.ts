import { WysiwygButton, WysiwygCore } from './common';


export class WysiwygToolbar {

    private wysiwyg: WysiwygCore;

    private buttons: WysiwygButton[];

    constructor(wysiwyg: WysiwygCore, buttons: WysiwygButton[]) {
        this.wysiwyg = wysiwyg;
        this.buttons = buttons;
        this.initContainer();
    }

    // element

    private initContainer() {
        const toolbar = document.createElement('div');
        toolbar.classList.add('wysiwyg-toolbar');

        this.buttons.forEach(item => {
            toolbar.appendChild(this.createButton(item));
        });

        this.wysiwyg.rootContainer.insertBefore(toolbar, this.wysiwyg.editContainer);
    }

    private createButton(item: WysiwygButton) {
        const button = document.createElement('button');
        button.classList.add('btn-' + item.name);

        if (item.icon) {
            button.innerHTML = item.icon;
        }

        if (item.attr) {
            for (const key in item.attr) {
                if (item.attr.hasOwnProperty(key)) {
                    button.setAttribute(key, item.attr[key]);
                }
            }
        }

        if (item.click) {
            button.addEventListener('click', e => {
                e.preventDefault(), e.stopPropagation();
                item.click(this.wysiwyg, button);
            });
        }

        if (item.popup) {
            button.addEventListener('click', e => {
                e.preventDefault(), e.stopPropagation();
                this.wysiwyg.openPopup(button, (popup) => {
                    if (item.template) {
                        popup.innerHTML = item.template;
                    }
                    item.popup(this.wysiwyg, popup, button);
                });
            });
        }

        return button;
    }

    // events

    public onfocus() {

    }

    public onblur() {

    }

}
