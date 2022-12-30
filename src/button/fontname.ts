import { svgs } from '../assets/svgs';
import { fontnameList } from '../assets/font';

import { WysiwygButton } from '../wysiwyg/common';


export const fontname: WysiwygButton = {
    name: 'fontname',
    icon: svgs.fontname,
    popup: (wysiwyg, popup) => {
        popup.style.padding = '0.5rem';
        popup.style.lineHeight = '1.5rem';
        popup.style.textAlign = 'center';
        fontnameList.forEach(name => {
            const div = document.createElement('div');
            div.innerHTML = name;
            div.className = 'pointer';
            div.style.fontFamily = name;
            div.addEventListener('click', e => {
                e.preventDefault(), e.stopPropagation();
                wysiwyg.exec('fontName', name).closePopup();
            });
            popup.appendChild(div);
        });
    },
    attr: {
        title: '字体'
    }
};
