import { svgs } from '../assets/svgs';

import { WysiwygButton } from '../wysiwyg/common';


export const subscript: WysiwygButton = {
    name: 'subscript',
    icon: svgs.subscript,
    click: (wysiwyg) => {
        wysiwyg.exec('subscript').collapseSelection();
    },
    attr: {
        title: '下标'
    }
};
