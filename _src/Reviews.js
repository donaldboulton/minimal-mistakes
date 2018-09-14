(function ($) {
  const $reviews = $('.js-reviews');

  $('#review-form').submit(function () {
      const form = this;

      $(form).addClass('disabled');
      $('#review-form-submit').html(
          '<svg class="icon spin"><use xlink:href="//assets/images/icons.svg#icon-loading"></use></svg> Loading...',
      );

      $.ajax({
          type: $(this).attr('method'),
          url: $(this).attr('action'),
          data: $(this).serialize(),
          contentType: 'application/x-www-form-urlencoded',
          success(data) {
              $('#review-form-submit').html('{{ "Submitted" }}');
              $('.page__reviews-form .js-notice').removeClass('notice--danger');
              $('.page__reviews-form .js-notice').addClass('notice--success');
              showAlert('{{ site.data.ui-text[site.locale].review_success_msg | default: "Thanks for your Review! It should show up after CloudFlare Cache purge. about a minute." }}');
          },
          error(err) {
              console.log(err);
              $('#review-form-submit').html('{{ "Submit Review" }}');
              $('.page__reviews-form .js-notice').removeClass('notice--success');
              $('.page__reviews-form .js-notice').addClass('notice--danger');
              showAlert('{{ site.data.ui-text[site.locale].review_error_msg | default: "Sorry, there was an error with your submission. Please make sure all required fields have been completed and try again." }}');
              $(form).removeClass('disabled');
          },
      });

      return false;
  });
  document.getElementById('review-form').reset();
  function showAlert(message) {
      $('.page__reviews-form .js-notice').removeClass('hidden');
      $('.page__reviews-form .js-notice-text').html(message);
  }
}(jQuery));
