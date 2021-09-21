# lin-modal

```shell
npm install lin-modal
```

```html
<link rel="stylesheet" type="text/css" href="modal.css">
<script src="modal.js"></script>
```

```js
import Modal from 'lin-modal';
import '../node_modules/lin-modal/dist/modal.css';

const modal = new Modal();
modal.open({
  title: '标题',
  content: '是否保存更改？',
  other: '其他',
  loadingText: '正在处理中...',
  footer: [
    {
      text: '确定',
      className: 'button primary-btn',
      callback: modal.close();
    },
    {
      text: '取消',
      className: 'button',
      callback: modal.close();
    }
  ],
});

modal.loading();
```