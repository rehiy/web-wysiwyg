import { svgs } from '../assets/svgs';

import { WysiwygButton } from '../wysiwyg/common';


export const unorderedlist: WysiwygButton = {
    name: 'unorderedlist',
    icon: svgs.unorderedlist,
    click: (wysiwyg) => {
        wysiwyg.exec('insertUnorderedList').collapseSelection();
    },
    attr: {
        title: '无序列表'
    }
};
