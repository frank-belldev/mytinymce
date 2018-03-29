(function () {
var code = (function () {
  'use strict';

  var global = tinymce.util.Tools.resolve('tinymce.PluginManager');

  var global$1 = tinymce.util.Tools.resolve('tinymce.dom.DOMUtils');

  var getMinWidth = function (editor) {
    return editor.getParam('code_dialog_width', 600);
  };
  var getMinHeight = function (editor) {
    return editor.getParam('code_dialog_height', Math.min(global$1.DOM.getViewPort().h - 200, 500));
  };
  var $_1k8gdj9cjfcjb1i0 = {
    getMinWidth: getMinWidth,
    getMinHeight: getMinHeight
  };

  var setContent = function (editor, html) {
    editor.focus();
    editor.undoManager.transact(function () {
      editor.setContent(html);
    });
    editor.selection.setCursorLocation();
    editor.nodeChanged();
  };
  var getContent = function (editor) {
    return editor.getContent({ source_view: true });
  };
  var $_3mryjd9ejfcjb1i2 = {
    setContent: setContent,
    getContent: getContent
  };

  var open = function (editor) {
    var minWidth = $_1k8gdj9cjfcjb1i0.getMinWidth(editor);
    var minHeight = $_1k8gdj9cjfcjb1i0.getMinHeight(editor);
    var win = editor.windowManager.open({
      title: 'Source code',
      body: {
        type: 'textbox',
        name: 'code',
        multiline: true,
        minWidth: minWidth,
        minHeight: minHeight,
        spellcheck: false,
        style: 'direction: ltr; text-align: left'
      },
      onSubmit: function (e) {
        $_3mryjd9ejfcjb1i2.setContent(editor, e.data.code);
      }
    });
    win.find('#code').value($_3mryjd9ejfcjb1i2.getContent(editor));
  };
  var $_ebc1ia9bjfcjb1hx = { open: open };

  var register = function (editor) {
    editor.addCommand('mceCodeEditor', function () {
      $_ebc1ia9bjfcjb1hx.open(editor);
    });
  };
  var $_8zbxt39ajfcjb1hv = { register: register };

  var register$1 = function (editor) {
    editor.addButton('code', {
      icon: 'code',
      tooltip: 'Source code',
      onclick: function () {
        $_ebc1ia9bjfcjb1hx.open(editor);
      }
    });
    editor.addMenuItem('code', {
      icon: 'code',
      text: 'Source code',
      onclick: function () {
        $_ebc1ia9bjfcjb1hx.open(editor);
      }
    });
  };
  var $_g33p1b9fjfcjb1i3 = { register: register$1 };

  global.add('code', function (editor) {
    $_8zbxt39ajfcjb1hv.register(editor);
    $_g33p1b9fjfcjb1i3.register(editor);
    return {};
  });
  function Plugin () {
  }

  return Plugin;

}());
})();
