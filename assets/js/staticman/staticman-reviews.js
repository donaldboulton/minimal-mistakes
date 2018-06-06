(function ($) {
  var $reviews = $('.js-reviews');

  $('#review-form').submit(function () {
    var form = this;

    $(form).addClass('disabled');
    $("#review-form-submit").html(
      '<svg class="icon spin"><use xlink:href="/assets/icons/icons.svg#icon-loading"></use></svg> Loading...'
    );

    $.ajax({
      type: $(this).attr('method'),
      url: $(this).attr('action'),
      data: $(this).serialize(),
      contentType: 'application/x-www-form-urlencoded',
      success: function (data) {
        $('#review-form-submit').html('{{ "Submitted" }}');
        $('.page__reviews-form .js-notice').removeClass('notice--danger');
        $('.page__reviews-form .js-notice').addClass('notice--success');
        showAlert('{{ "Thanks for your review! It will show on the site once it has been approved." }}');
      },
      error: function (err) {
        console.log(err);
        $('#review-form-submit').html('{{ "Submit Review" }}');
        $('.page__reviews-form .js-notice').removeClass('notice--success');
        $('.page__reviews-form .js-notice').addClass('notice--danger');
        showAlert('{{ "Sorry, there was an error with your submission. Please make sure all required fields have been completed and try again." }}');
        $(form).removeClass('disabled');
      }
    });
    var frm = document.getElementsByName('review-form')[0];
    frm.reset();
    return false;
  });
  function showAlert(message) {
    $('.page__reviews-form .js-notice').removeClass('hidden');
    $('.page__reviews-form .js-notice-text').html(message);
  }

})(jQuery);
