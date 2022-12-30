# web wysiwyg editor

A simple WEB wysiwyg editor

### Usage

```html
<div class="wysiwyg wysiwyg-content">
    <div contenteditable="true" data-placeholder="请输入内容..."></div>
</div>
```

```js
import { NativeEditor } from 'web-wysiwyg';
new NativeEditor({ selector: '.wysiwyg' });
```

### Build a package

```shell
npm run build
```

### Develop mode

```shell
npm start
```
