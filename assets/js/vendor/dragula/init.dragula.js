function $(id) {
  return document.getElementById(id);
}

dragula([$('drag-elements'), $('drop-target')], {
  revertOnSpill: true
});

function external_new_window() {
  for(var c = document.getElementsByTagName("a"), a = 0;a < c.length;a++) {
  var b = c[a];
  b.getAttribute("href") && b.hostname !== location.hostname && (b.target = "_blank")
  }
}
external_new_window();