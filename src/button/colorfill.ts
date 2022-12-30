import { svgs } from '../assets/svgs';

import { WysiwygButton } from '../wysiwyg/common';
import { WysiwygPalette } from '../wysiwyg/palette';


export const colorfill: WysiwygButton = {
    name: 'colorfill',
    icon: svgs.colorfill,
    popup: (wysiwyg, popup) => {
        const table = WysiwygPalette(color => {
            wysiwyg.exec('hiliteColor', color).closePopup();
        });
        popup.appendChild(table);
    },
    attr: {
        title: '背景颜色'
    }
};
