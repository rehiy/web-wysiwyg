# web wysiwyg editor

A simple WEB wysiwyg editor, without js library dependency, easy to integrate with `Angular`, `React` and `Vue`


Demo: https://apps.rehiy.com/web-wysiwyg/

## Package usage

### install package and copy static files

```shell
npm i web-wysiwyg
cp -a node_modules/web-wysiwyg/assets/* src/assets/
```

### create editor template

```html
<div class="wysiwyg wysiwyg-content">
    <div contenteditable="true" data-placeholder="请输入内容..."></div>
</div>
```

### init editor instance

```js
import { NativeEditor } from 'web-wysiwyg';
new NativeEditor({ selector: '.wysiwyg' });
```

## Developer Description

### Build a package

```shell
npm run build
```

### Develop mode

```shell
npm start
```
