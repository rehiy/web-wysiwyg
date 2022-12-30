import { svgs } from '../assets/svgs';

import { WysiwygButton } from '../wysiwyg/common';


export const quote: WysiwygButton = {
    name: 'quote',
    icon: svgs.quote,
    click: (wysiwyg) => {
        const code = wysiwyg.getSelected() || '';
        wysiwyg.exec('insertHTML',
            `<div class="quote"><blockquote>${code}</blockquote></div>`
        );
    },
    attr: {
        title: '添加引用文字'
    }
};
