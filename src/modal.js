import './modal.css';

export default function Modal() {
  
  this.option = {
    title: null,
    content: '',
    other: null,
    loadingText: '正在处理中...',
    footer: [
      {
        text: '确定',
        className: 'button primary-btn',
        callback: close
      },
      {
        text: '取消',
        className: 'button',
        callback: close
      }
    ],
    close: close
  };

  function close() {
    var node = document.getElementById('modal-container');
    if (node.parentNode) {
      node.parentNode.removeChild(node);
    }
  }

  this.open = function (option) {
    option = Object.assign({}, this.option, option);
    var html = '<div class="modal-container" id="modal-container">';
    html += '<div class="modal-mask">';
    html += '<div class="modal">';
    if (option.title) {
      html += '<div class="modal-close-btn" id="modal-close-btn">X</div>';
      html += '<div class="modal-header">' + option.title + '</div>';
    } else {
      html += '<div class="modal-close-btn"  id="modal-close-btn" style="width: 36px; height: 36px; line-height: 36px;">X</div>';
    }
    html += '<div class="modal-content">' + option.content + '</div>';
    if (option.other) {
      html += '<div class="modal-other">' + option.other + '</div>';
    }
    html += '<div class="modal-footer" id="modal-footer"></div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';

    var div = document.createElement("div");
    div.innerHTML = html;
    document.body.appendChild(div);

    if (option.footer.length > 0) {
      for (var i = 0; i < option.footer.length; i++) {
        var btn = option.footer[i];
        var button = document.createElement("BUTTON");
        button.innerHTML = btn.text;
        button.className = btn.className;
        button.onclick = btn.callback;
        var footer = document.getElementById('modal-footer');
        footer.appendChild(button);
      }
    }

    var closeBtn = document.getElementById('modal-close-btn');
    closeBtn.onclick = option.close;
  }

  this.loading = function (option) {
    // 先移除modal
    this.close();
    // 再创建loading-modal
    option = Object.assign({}, this.option, option);
    var html = '<div class="modal-container" id="modal-container">';
    html += '<div class="modal-mask">';
    html += '<div class="modal">';
    html += '<div class="modal-loading">' + option.loadingText + '</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    var div = document.createElement("div");
    div.innerHTML = html;
    document.body.appendChild(div);
  }

  this.close = close;
}
