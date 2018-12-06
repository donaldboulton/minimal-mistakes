function collapseAll (event) {
  var target = event.target;
  var container = target.closest('.connected-toggles');
  var toggles = container.querySelectorAll('[data-a11y-toggle]');

  Array.prototype.slice.call(toggles)
    .filter(function (toggle) {
      return toggle !== target;
    })
    .forEach(collapse);
}
