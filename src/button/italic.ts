import { svgs } from '../assets/svgs';

import { WysiwygButton } from '../wysiwyg/common';


export const italic: WysiwygButton = {
    name: 'italic',
    icon: svgs.italic,
    click: (wysiwyg) => {
        wysiwyg.exec('italic').collapseSelection();
    },
    attr: {
        title: '斜体'
    }
};
