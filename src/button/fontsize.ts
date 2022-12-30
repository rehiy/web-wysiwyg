import { svgs } from '../assets/svgs';
import { fontsizeListR } from '../assets/font';

import { WysiwygButton } from '../wysiwyg/common';


export const fontsize: WysiwygButton = {
    name: 'fontsize',
    icon: svgs.fontsize,
    popup: (wysiwyg, popup) => {
        popup.style.padding = '0.5rem';
        popup.style.textAlign = 'center';
        Object.keys(fontsizeListR).forEach(name => {
            const val = String(fontsizeListR[name]);
            const div = document.createElement('div');
            div.className = 'pointer';
            div.style.fontSize = name;
            div.innerHTML = val;
            div.addEventListener('click', e => {
                e.preventDefault(), e.stopPropagation();
                wysiwyg.exec('fontSize', val).closePopup();
            });
            popup.appendChild(div);
        });
    },
    attr: {
        title: '字号'
    }
};
