$('#my-size').change(function() {
    $('#my-button').data('item-custom1-value', $(this).val());
});
$('#my-color').change(function() {
    $('#my-button').data('item-custom2-value', $(this).val());
});
$(function() {
    var btn = $('#my-button');
    $('#my-quantity').change(function() {
        btn.attr('data-item-quantity', this.value);
    })
});