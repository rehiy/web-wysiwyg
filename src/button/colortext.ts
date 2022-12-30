import { svgs } from '../assets/svgs';

import { WysiwygButton } from '../wysiwyg/common';
import { WysiwygPalette } from '../wysiwyg/palette';


export const colortext: WysiwygButton = {
    name: 'colortext',
    icon: svgs.colortext,
    popup: (wysiwyg, popup) => {
        const table = WysiwygPalette(color => {
            wysiwyg.exec('foreColor', color).closePopup();
        });
        popup.appendChild(table);
    },
    attr: {
        title: '文字颜色'
    }
};
