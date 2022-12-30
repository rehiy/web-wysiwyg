import { svgs } from '../assets/svgs';

import { WysiwygButton } from '../wysiwyg/common';


export const orderedlist: WysiwygButton = {
    name: 'orderedlist',
    icon: svgs.orderedlist,
    click: (wysiwyg) => {
        wysiwyg.exec('insertOrderedList').collapseSelection();
    },
    attr: {
        title: '有序列表'
    }
};
