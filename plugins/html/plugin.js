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
  var $_ccxbz0c0jfd5qpfu = {
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
  var $_2yqsnjc2jfd5qpfw = {
    setContent: setContent,
    getContent: getContent
  };

  var open = function (editor) {
    var minWidth = $_ccxbz0c0jfd5qpfu.getMinWidth(editor);
    var minHeight = $_ccxbz0c0jfd5qpfu.getMinHeight(editor);
    var win = editor.windowManager.open({
      title: 'HTML Source',
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
        $_2yqsnjc2jfd5qpfw.setContent(editor, e.data.html);
      }
    });
    win.find('#html').value($_2yqsnjc2jfd5qpfw.getContent(editor));
  };
  var $_b3nstrbzjfd5qpft = { open: open };

  var register = function (editor) {
    editor.addCommand('mceHtmlEditor', function () {
      $_b3nstrbzjfd5qpft.open(editor);
    });
  };
  var $_18zxcjbyjfd5qpfr = { register: register };

  var register$1 = function (editor) {
    editor.addButton('html', {
      text: 'HTML',
      tooltip: 'HTML Source',
      onclick: function () {
        $_b3nstrbzjfd5qpft.open(editor);
      }
    });
    editor.addMenuItem('html', {
      icon: 'html',
      text: 'HTML Source',
      onclick: function () {
        $_b3nstrbzjfd5qpft.open(editor);
      }
    });
  };
  var $_bvq5zec3jfd5qpfy = { register: register$1 };

  global.add('html', function (editor) {
    $_18zxcjbyjfd5qpfr.register(editor);
    $_bvq5zec3jfd5qpfy.register(editor);
    return {};
  });
  function Plugin () {
  }

  return Plugin;

}());
})();
