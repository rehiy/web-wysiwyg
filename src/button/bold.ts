import { svgs } from '../assets/svgs';

import { WysiwygButton } from '../wysiwyg/common';


export const bold: WysiwygButton = {
    name: 'bold',
    icon: svgs.bold,
    click: (wysiwyg) => {
        wysiwyg.exec('bold').collapseSelection();
    },
    attr: {
        title: '粗体'
    }
};
