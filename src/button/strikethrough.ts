import { svgs } from '../assets/svgs';

import { WysiwygButton } from '../wysiwyg/common';


export const strikethrough: WysiwygButton = {
    name: 'strikethrough',
    icon: svgs.strikethrough,
    click: (wysiwyg) => {
        wysiwyg.exec('strikeThrough').collapseSelection();
    },
    attr: {
        title: '删除线'
    }
};
