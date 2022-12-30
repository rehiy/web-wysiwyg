import { svgs } from '../assets/svgs';

import { WysiwygButton } from '../wysiwyg/common';


export const image: WysiwygButton = {
    name: 'image',
    icon: svgs.image,
    popup: (wysiwyg, popup) => {
        const images = document.querySelectorAll('img[id^=image_]');
        // 未上传图片
        if (images.length === 0) {
            popup.innerHTML = '未上传图片，无法使用插图功能';
            popup.style.padding = '0.5rem 1rem';
            return;
        }
        // 绘制图片列表
        popup.classList.add('wysiwyg-popup-image');
        images.forEach((item: HTMLImageElement) => {
            const div = document.createElement('div');
            div.innerHTML = `<img src="${item.src}">`;
            div.addEventListener('click', e => {
                e.preventDefault(), e.stopPropagation();
                const aid = item.id.replace('image', 'attachimg');
                const src = item.src.replace(/[?&][rc]=\d+x\d+/, '');
                wysiwyg.exec('insertHTML', `<img src="${src}" aid="${aid}">`);
                wysiwyg.closePopup();
            });
            popup.appendChild(div);
        });
        // 填充剩余项目
        if (images.length % 3 > 0) {
            for (let i = 3 - images.length % 3; i > 0; i--) {
                popup.appendChild(document.createElement('div'));
            }
        }
    },
    attr: {
        title: '添加图片'
    }
};
