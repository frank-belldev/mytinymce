(function () {
var hr = (function () {
  'use strict';

  var global = tinymce.util.Tools.resolve('tinymce.PluginManager');

  var register = function (editor) {
    editor.addCommand('InsertHorizontalRule', function () {
      editor.execCommand('mceInsertContent', false, '<hr />');
    });
  };
  var $_cwo0gqbujfcjb1wl = { register: register };

  var register$1 = function (editor) {
    editor.addButton('hr', {
      icon: 'hr',
      tooltip: 'Horizontal line',
      cmd: 'InsertHorizontalRule'
    });
    editor.addMenuItem('hr', {
      icon: 'hr',
      text: 'Horizontal line',
      cmd: 'InsertHorizontalRule',
      context: 'insert'
    });
  };
  var $_b6b4x2bvjfcjb1wn = { register: register$1 };

  global.add('hr', function (editor) {
    $_cwo0gqbujfcjb1wl.register(editor);
    $_b6b4x2bvjfcjb1wn.register(editor);
  });
  function Plugin () {
  }

  return Plugin;

}());
})();
