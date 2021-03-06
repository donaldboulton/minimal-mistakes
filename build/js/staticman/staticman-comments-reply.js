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
