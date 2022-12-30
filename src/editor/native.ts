import { WysiwygOptions } from '../wysiwyg/common';
import { Wysiwyg } from '../wysiwyg/wysiwyg';

import * as defaultButtons from './button';


export class NativeEditor extends Wysiwyg {

    constructor(options: EditorOptions) {
        const buttons = { ...defaultButtons };

        // add a new button or update an existing button
        options.buttons && options.buttons.forEach(btn => {
            if (buttons[btn.name]) {
                Object.assign(buttons[btn.name], btn);
            } else {
                buttons[btn.name] = btn;
            }
        });

        // set the available buttons for the instance
        if (options.buttonList) {
            options.buttons = options.buttonList.map(btn => buttons[btn]);
        } else {
            options.buttons = Object.values(buttons);
        }

        super(options);
    }

}

export interface EditorOptions extends WysiwygOptions {
    buttonList?: string[];
}
