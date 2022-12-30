import { svgs } from '../assets/svgs';

import { WysiwygButton } from '../wysiwyg/common';


export const alignright: WysiwygButton = {
    name: 'alignleft',
    icon: svgs.alignright,
    click: (wysiwyg) => {
        wysiwyg.exec('justifyRight').collapseSelection();
    },
    attr: {
        title: '居右'
    }
};
