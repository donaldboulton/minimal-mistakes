$(".gallery").each(function() {
  var $pic = $(this),
    getItems = function getItems() {
      var items = [];
      $pic.find("a").each(function() {
        var $href = $(this).attr("href"),
          $size = $(this)
            .data("size")
            .split("x"),
          $width = $size[0],
          $height = $size[1];

        var item = {
          src: $href,
          w: $width,
          h: $height
        };

        items.push(item);
      });
      return items;
    };

  var items = getItems();
});
