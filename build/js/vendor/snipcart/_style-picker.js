$('#select-color').change(function() {
    $('.snipcart-add-item').hide();
    var s = $('.snipcart-add-item[data-item-id="' + $(this).val() + '"]');
    s.show();
});
