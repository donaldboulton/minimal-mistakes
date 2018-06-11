(function ($) {
  var $comments = $('.js-comments');

  $('#comment-form').submit(function () {
    var form = this;

    $(form).addClass('disabled');
    $("#comment-form-submit").html(
      '<svg class="icon spin"><use xlink:href="/assets/icons/icons.svg#icon-loading"></use></svg> Loading...'
    );

    $.ajax({
      type: $(this).attr('method'),
      url: $(this).attr('action'),
      data: $(this).serialize(),
      contentType: 'application/x-www-form-urlencoded',
      success: function (data) {
        $('#comment-form-submit').html('{{ site.data.ui-text[site.locale].comment_btn_submitted | default: "Submitted" }}');
        $('.page__comments-form .js-notice').removeClass('notice--danger');
        $('.page__comments-form .js-notice').addClass('notice--success');
        showAlert('{{ site.data.ui-text[site.locale].comment_success_msg | default: "Thanks for your comment! It will show on the site once it has been approved." }}');
      },
      error: function (err) {
        console.log(err);
        $('#comment-form-submit').html('{{ site.data.ui-text[site.locale].comment_btn_submit  | default: "Submit Comment" }}');
        $('.page__comments-form .js-notice').removeClass('notice--success');
        $('.page__comments-form .js-notice').addClass('notice--danger');
        showAlert('{{ site.data.ui-text[site.locale].comment_error_msg | default: "Sorry, there was an error with your submission. Please make sure all required fields have been completed and try again." }}');
        $(form).removeClass('disabled');
      }
    });

    $(function () {
      var timesSubmitted = 0;
      var maxSubmits = 1;
      var intervalMilliseconds = 10000; // for testing   
      var interval;   
       $('input[type=submit]').click(function (event) {
           if (!interval) {
               interval = setTimeout(function () {
                   interval = undefined;
                   timesSubmitted = 0;
                   $('div').append('TIMER RESET. Submit again.<br />');
               }, intervalMilliseconds);
           }
           timesSubmitted ++;
           if (timesSubmitted > maxSubmits) {
               $('div').append('Submission Limit!<br />');
           } else {
               $('div').append('valid<br />');
           }
           event.preventDefault();        
           });        
       });
       var frm = document.getElementsByName('comment-form')[0];
       frm.reset();
       return false;
  });

  function showAlert(message) {
    $('.page__comments-form .js-notice').removeClass('hidden');
    $('.page__comments-form .js-notice-text').html(message);
  }
})(jQuery);
  var addComment = {
  moveForm: function(commId, parentId, respondId, postId) {
  var div,
    element,
    style,
    cssHidden,
    t = this,
    comm = t.I(commId),
    respond = t.I(respondId),
    cancel = t.I("cancel-comment-reply-link"),
    parent = t.I("comment-replying-to"),
    post = t.I("comment-post-slug"),
    commentForm = respond.getElementsByTagName("form")[0];

  if (!comm || !respond || !cancel || !parent || !commentForm) {
    return;
  }

  t.respondId = respondId;
  postId = postId || false;

  if (!t.I("sm-temp-form-div")) {
    div = document.createElement("div");
    div.id = "sm-temp-form-div";
    div.style.display = "none";
    respond.parentNode.insertBefore(div, respond);
  }

  comm.parentNode.insertBefore(respond, comm.nextSibling);
  if (post && postId) {
    post.value = postId;
  }
  parent.value = parentId;
  cancel.style.display = "";

  cancel.onclick = function() {
    var t = addComment,
      temp = t.I("sm-temp-form-div"),
      respond = t.I(t.respondId);

    if (!temp || !respond) {
      return;
    }

    t.I("comment-replying-to").value = null;
    temp.parentNode.insertBefore(respond, temp);
    temp.parentNode.removeChild(temp);
    this.style.display = "none";
    this.onclick = null;
    return false;
  };

  try {
    for (var i = 0; i < commentForm.elements.length; i++) {
      element = commentForm.elements[i];
      cssHidden = false;

      if ("getComputedStyle" in window) {
        style = window.getComputedStyle(element);

      } else if (document.documentElement.currentStyle) {
        style = element.currentStyle;
      }
      if (
        (element.offsetWidth <= 0 && element.offsetHeight <= 0) ||
        style.visibility === "hidden"
      ) {
        cssHidden = true;
      }

      if ("hidden" === element.type || element.disabled || cssHidden) {
        continue;
      }

      element.focus();

      break;
    }
  } catch (er) {}

  return false;
},

I: function(id) {
  return document.getElementById(id);
}
};
