# lin-modal

```shell
npm install lin-modal
```

In browser:

```html
<link rel="stylesheet" type="text/css" href="modal.css">
<script src="modal.js"></script>
```

```js
var modal = new Modal();
modal.open({
  title: '标题',
  content: '是否保存更改？',
});
modal.loading();
modal.close();
```