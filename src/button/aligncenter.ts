import { svgs } from '../assets/svgs';

import { WysiwygButton } from '../wysiwyg/common';


export const aligncenter: WysiwygButton = {
    name: 'aligncenter',
    icon: svgs.aligncenter,
    click: (wysiwyg) => {
        wysiwyg.exec('justifyCenter').collapseSelection();
    },
    attr: {
        title: '居中'
    }
};
