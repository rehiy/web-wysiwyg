import { svgs } from '../assets/svgs';

import { WysiwygButton } from '../wysiwyg/common';


export const clearformat: WysiwygButton = {
    name: 'clearformat',
    icon: svgs.clearformat,
    click: (wysiwyg) => {
        wysiwyg.exec('removeFormat').exec('unlink');
        wysiwyg.collapseSelection();
    },
    attr: {
        title: '清除格式'
    }
};
