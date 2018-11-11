(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var dialogEl = document.getElementById('my-accessible-dialog');
    var mainEl = document.getElementById('dialog-root');
    var dialog = new window.A11yDialog(dialogEl, mainEl);
    dialog.on('show', function (dialogEl, triggerEl) {
      console.log(dialogEl);
      console.log(triggerEl);
    });
    // To manually control the dialog:
    // dialog.show()
    // dialog.hide()
    // dialog.destroy()
  });
}());
