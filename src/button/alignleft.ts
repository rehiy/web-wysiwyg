import { svgs } from '../assets/svgs';

import { WysiwygButton } from '../wysiwyg/common';


export const alignleft: WysiwygButton = {
    name: 'alignleft',
    icon: svgs.alignleft,
    click: (wysiwyg) => {
        wysiwyg.exec('justifyLeft').collapseSelection();
    },
    attr: {
        title: '居左'
    }
};
