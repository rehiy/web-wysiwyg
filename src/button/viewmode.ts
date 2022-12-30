import { svgs } from '../assets/svgs';

import { WysiwygButton } from '../wysiwyg/common';


export const viewmode: WysiwygButton = {
    name: 'viewmode',
    icon: svgs.viewmode,
    click: (wysiwyg, button) => {
        button.value = button.value !== 'code' ? 'code' : 'wysiwyg';
        const buttons = button.parentElement.querySelectorAll('button');
        const editdiv = wysiwyg.editContainer;
        // source code view mode
        if (button.value === 'code') {
            buttons.forEach(btn => {
                if (btn.title !== viewmode.attr.title) {
                    btn.setAttribute('disabled', 'true');
                }
            });
            editdiv.setAttribute('contenteditable', 'plaintext-only');
            editdiv.textContent = wysiwyg.getContent();
        }
        // WYSIWYG view mode
        if (button.value === 'wysiwyg') {
            buttons.forEach(btn => {
                if (btn.title !== viewmode.attr.title) {
                    btn.removeAttribute('disabled');
                }
            });
            editdiv.setAttribute('contenteditable', 'true');
            wysiwyg.setContent(editdiv.textContent);
        }
    },
    attr: {
        title: '源码/可视化'
    }
};
