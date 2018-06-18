function $(id) {
  return document.getElementById(id);
}

dragula([$('drag-elements'), $('drop-target')], {
  revertOnSpill: true
}).on('drop', function(el) {
  if ($('drop-target').children.length > 0) {
    $('post').innerHTML = $('drop-target').innerHTML;
  } else {
    $('post').innerHTML = "Post";
  }

});