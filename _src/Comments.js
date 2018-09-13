(function ($) {
  const $comments = $('.js-comments');

  $('#comment-form').submit(function () {
    const form = this;

    $(form).addClass('disabled');
    $('#comment-form-submit').html(
      '<svg class="icon spin"><use xlink:href="/dest/assets/icons/icons.svg#icon-loading"></use></svg> Loading...',
    );

    $.ajax({
      type: $(this).attr('method'),
      url: $(this).attr('action'),
      data: $(this).serialize(),
      contentType: 'application/x-www-form-urlencoded',
      success (data) {
        $('#comment-form-submit').html('{{ site.data.ui-text[site.locale].comment_btn_submitted | default: "Submitted" }}');
        $('.page__comments-form .js-notice').removeClass('notice--danger');
        $('.page__comments-form .js-notice').addClass('notice--success');
        showAlert('{{ site.data.ui-text[site.locale].comment_success_msg | default: "Thanks for your comment! It will show on the site once it has been approved." }}');
      },
      error (err) {
        console.log(err);
        $('#comment-form-submit').html('{{ site.data.ui-text[site.locale].comment_btn_submit  | default: "Submit Comment" }}');
        $('.page__comments-form .js-notice').removeClass('notice--success');
        $('.page__comments-form .js-notice').addClass('notice--danger');
        showAlert('{{ site.data.ui-text[site.locale].comment_error_msg | default: "Sorry, there was an error with your submission. Please make sure all required fields have been completed and try again." }}');
        $(form).removeClass('disabled');
      },
    });

    return false;
  });
  document.getElementById('comment-form').reset();
  function showAlert(message) {
    $('.page__comments-form .js-notice').removeClass('hidden');
    $('.page__comments-form .js-notice-text').html(message);
  }
}(jQuery));
const addComment = {
  moveForm(commId, parentId, respondId, postId) {
  let div,
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
    let t = addComment,
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
    for (let i = 0; i < commentForm.elements.length; i++) {
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

  I(id) {
  return document.getElementById(id);
},
};
