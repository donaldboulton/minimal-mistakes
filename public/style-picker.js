$('#my-size').change(function() {
    $('#my-button').data('item-custom1-value', $(this).val());
});
$('#my-color').change(function() {
    $('#my-button').data('item-custom2-value', $(this).val());
});
$('#my-quantity').change(function() {
    $('#my-button').data('item-quantity', $(this).val());
});