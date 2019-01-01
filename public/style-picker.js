$('#my-size').change(function() {
    $('#my-button').data('item-custom1-value', $(this).val());
});
$('#select-color').change(function() {
    $('.snipcart-add-item').hide();    
    var s = $('.snipcart-add-item[data-item-id="' + $(this).val() + '"]');
    s.show();
});
$('#my-quantity').change(function() {
    $('#my-button').data('item-quantity', $(this).val());
});