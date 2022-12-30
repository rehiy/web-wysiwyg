import { svgs } from '../assets/svgs';

import { WysiwygButton } from '../wysiwyg/common';


export const link: WysiwygButton = {
    name: 'link',
    icon: svgs.link,
    popup: (wysiwyg, popup) => {
        popup.classList.add('wysiwyg-popup-link');
        const ipt = popup.querySelector('input');
        const btn = popup.querySelector('button');
        btn.addEventListener('click', e => {
            e.preventDefault(), e.stopPropagation();
            const url = ipt.value;
            if (!/^https?:\/\/\w+\.\w+/.test(url)) {
                ipt.placeholder = '请输入有效链接';
                ipt.value = '';
                return;
            }
            wysiwyg.exec('createLink', url);
            wysiwyg.closePopup();
        });
    },
    template: `
        <input type="url" placeholder="http://www.example.com">
        <button>确定</button>
    `,
    attr: {
        title: '超链接'
    }
};
