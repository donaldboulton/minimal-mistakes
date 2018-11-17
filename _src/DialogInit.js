dialog.on('show', function (dialogEl, triggerEl) {
  dialogEl.removeAttribute("style");
});
const el = document.querySelector('#my-accessible-dialog')
const dialog = new A11yDialog(el, '#menu')
