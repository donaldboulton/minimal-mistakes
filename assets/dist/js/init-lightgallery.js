$('#responsive-images').lightGallery(); 
var $gallery{% if include.id_number %}{{ include.id_number }}{% endif %} = $("#image-gallery{% if include.id_number %}-{{ include.id_number }}{% endif %}").lightGallery({
    thumbnail: false,
    selector: '.image'
  });

// init isotope
var $grid{% if include.id_number %}{{ include.id_number }}{% endif %} = $('#responsive-images{% if include.id_number %}-{{ include.id_number }}{% endif %}').isotope({
  percentPosition: true,
  columnWidth: '#gallery-sizer{% if include.id_number %}-{{ include.id_number }}{% endif %}',
  itemSelector: '.image-wrapper',
  layoutMode: "masonry"
});

// layout Isotope after each image loads
$grid{% if include.id_number %}{{ include.id_number }}{% endif %}.imagesLoaded().progress( function() {
  $grid{% if include.id_number %}{{ include.id_number }}{% endif %}.masonry();
});
