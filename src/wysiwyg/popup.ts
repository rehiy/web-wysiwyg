import { WysiwygCore } from './common';


export class WysiwygPopup {

    private wysiwyg: WysiwygCore;

    private element: HTMLElement;

    constructor(wysiwyg: WysiwygCore) {
        this.wysiwyg = wysiwyg;
    }

    private overdue = (e: MouseEvent) => {
        let target = e.target as HTMLElement;
        if (target.nodeType === Node.TEXT_NODE) {
            target = target.parentElement;
        }
        if (!target.closest('.wysiwyg-popup')) {
            this.remove();
        }
    }

    public create(button: HTMLButtonElement, factory: (p: HTMLElement) => void) {
        this.element && this.remove();

        const popup = this.element = document.createElement('div');
        popup.style.maxWidth = this.wysiwyg.editContainer.offsetWidth + 'px';
        popup.classList.add('wysiwyg-popup');
        popup.classList.add('animate-down');
        factory(popup);

        this.wysiwyg.rootContainer.appendChild(popup);

        // Popup position - point to bottom-center of the button
        popup.style.top = button.offsetTop + button.offsetHeight + 'px';
        const left = button.offsetLeft + button.offsetWidth / 2 - popup.offsetWidth / 2;
        if (left + popup.offsetWidth < this.wysiwyg.editContainer.offsetWidth) {
            popup.style.left = Math.max(0, left) + 'px';
        } else {
            popup.style.right = '0px';
        }

        // Global click closes popup
        window.addEventListener('mousedown', this.overdue, true);
    }

    public remove() {
        if (this.element) {
            window.removeEventListener('mousedown', this.overdue, true);
            this.element.parentNode.removeChild(this.element);
            this.element = null;
        }
    }

}
