import { svgs } from '../assets/svgs';

import { WysiwygButton } from '../wysiwyg/common';


export const superscript: WysiwygButton = {
    name: 'superscript',
    icon: svgs.superscript,
    click: (wysiwyg) => {
        wysiwyg.exec('superscript').collapseSelection();
    },
    attr: {
        title: '上标'
    }
};
