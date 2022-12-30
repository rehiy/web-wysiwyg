import { svgs } from '../assets/svgs';
import { smilies } from '../assets/smiley';

import { WysiwygButton } from '../wysiwyg/common';


export const smiley: WysiwygButton = {
    name: 'smiley',
    icon: svgs.smiley,
    popup: (wysiwyg, popup) => {
        popup.classList.add('wysiwyg-popup-smiley');
        Object.keys(smilies).forEach((name) => {
            const img = document.createElement('img');
            img.src = smilies[name];
            img.addEventListener('click', e => {
                e.preventDefault(), e.stopPropagation();
                wysiwyg.exec('insertHTML',
                    `<img src="${smilies[name]}" alt="${name}" />`
                );
                wysiwyg.closePopup();
            });
            popup.appendChild(img);
        });
    },
    attr: {
        title: '斜体'
    }
};
