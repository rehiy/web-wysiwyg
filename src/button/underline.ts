import { svgs } from '../assets/svgs';

import { WysiwygButton } from '../wysiwyg/common';


export const underline: WysiwygButton = {
    name: 'underline',
    icon: svgs.underline,
    click: (wysiwyg) => {
        wysiwyg.exec('underline').collapseSelection();
    },
    attr: {
        title: '下划线'
    }
};
