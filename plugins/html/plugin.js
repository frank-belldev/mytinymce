(function () {
var html = (function () {
  'use strict';

  var global = tinymce.util.Tools.resolve('tinymce.PluginManager');

  var global$1 = tinymce.util.Tools.resolve('tinymce.dom.DOMUtils');

  var getMinWidth = function (editor) {
    return editor.getParam('html_dialog_width', 600);
  };
  var getMinHeight = function (editor) {
    return editor.getParam('html_dialog_height', Math.min(global$1.DOM.getViewPort().h - 200, 500));
  };
  var $_8rp97ac0jfcjb1x2 = {
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
  var $_30jiqec2jfcjb1x4 = {
    setContent: setContent,
    getContent: getContent
  };

  var open = function (editor) {
    var minWidth = $_8rp97ac0jfcjb1x2.getMinWidth(editor);
    var minHeight = $_8rp97ac0jfcjb1x2.getMinHeight(editor);
    var win = editor.windowManager.open({
      title: 'Source html',
      body: {
        type: 'textbox',
        name: 'html',
        multiline: true,
        minWidth: minWidth,
        minHeight: minHeight,
        spellcheck: false,
        style: 'direction: ltr; text-align: left'
      },
      onSubmit: function (e) {
        $_30jiqec2jfcjb1x4.setContent(editor, e.data.html);
      }
    });
    win.find('#html').value($_30jiqec2jfcjb1x4.getContent(editor));
  };
  var $_ae12okbzjfcjb1x0 = { open: open };

  var register = function (editor) {
    editor.addCommand('mceHtmlEditor', function () {
      $_ae12okbzjfcjb1x0.open(editor);
    });
  };
  var $_6tykosbyjfcjb1wy = { register: register };

  var register$1 = function (editor) {
    editor.addButton('html', {
      text: 'html',
      tooltip: 'Source html',
      onclick: function () {
        $_ae12okbzjfcjb1x0.open(editor);
      }
    });
    editor.addMenuItem('html', {
      icon: 'html',
      text: 'Source html',
      onclick: function () {
        $_ae12okbzjfcjb1x0.open(editor);
      }
    });
  };
  var $_3zuek7c3jfcjb1x6 = { register: register$1 };

  global.add('html', function (editor) {
    $_6tykosbyjfcjb1wy.register(editor);
    $_3zuek7c3jfcjb1x6.register(editor);
    return {};
  });
  function Plugin () {
  }

  return Plugin;

}());
})();
