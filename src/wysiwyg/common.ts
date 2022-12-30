export interface WysiwygCore {
    rootContainer: HTMLElement;
    editContainer: HTMLElement;
    exec: (command: string, param?: string) => WysiwygCore;
    getContent: () => string;
    setContent: (html: string) => WysiwygCore;
    getSelected: () => string;
    saveSelection: () => WysiwygCore;
    restoreSelection: () => WysiwygCore;
    collapseSelection: () => WysiwygCore;
    openPopup: (button: HTMLButtonElement, factory: (p: HTMLElement) => void) => WysiwygCore;
    closePopup: () => WysiwygCore;
}

export interface WysiwygButton {
    name: string;
    icon?: string;
    click?: (wysiwyg: WysiwygCore, button: HTMLButtonElement) => void;
    popup?: (wysiwyg: WysiwygCore, popup: HTMLElement, button: HTMLButtonElement) => void;
    template?: string;
    attr?: {
        title: string;
        [x: string]: string
    }
}

export interface WysiwygOptions {
    selector: string;
    buttons?: WysiwygButton[];
    onChange?: (t: WysiwygChangeType) => void;
}

export type WysiwygChangeType = 'set' | 'exec' | 'keyup';
