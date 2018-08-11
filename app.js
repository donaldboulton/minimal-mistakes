const getDeviceTokensPromise = admin.database()
  .ref('device_ids')
  .once('value')
  .then(snapshots => {

      if (!snapshots) return console.log('No devices to send to.');

      // work with snapshots
}

const payload = {
  notification: {
    title: `New Comment: ${commentTitle}`,
    body: 'Click to read comment.',
    icon: 'https://donboulton.com/assets/images/push-icon.png'
  }
};

snapshots.forEach(childSnapshot => {
  const token = childSnapshot.val();

  admin.messaging().sendToDevice(token, payload).then(response => {
    // handle response
  });
}

response.results.forEach(result => {
  const error = result;

  if (error) {
    console.error('Failed delivery to', token, error);

  if (error.code === 'messaging/invalid-registration-token' ||
      error.code === 'messaging/registration-token-not-registered') {

      childSnapshot.ref.remove();
      console.info('Was removed:', token);

  } else {
    console.info('Notification sent to', token);
  }
}

$(function() {
  var ref = new Firebase("https://airy-office-413.firebaseio.com/"),
    postRef = ref.child(slugify(window.location.pathname));

    postRef.on("child_added", function(snapshot) {
      var newComment = snapshot.val();
      $(".comments").prepend('<div class="comment">' +
        '<h4>' + escapeHtml(newComment.name) + '</h4>' +
        '<div class="profile-image"><img src="http://www.gravatar.com/avatar/' + escapeHtml(newComment.md5Email) + '?s=100&d=retro"/></div> ' +
        '<span class="date">' + moment(newComment.postedAt).fromNow() + '</span><p>' + escapeHtml(newComment.message)  + '</p></div>');
    });

    $("#comment-form").submit(function() {
      postRef.push().set({
        name: $("#comment-form-name").val(),
        title: $("#coment-form-title").val(),
        message: $("#coment-form-message").val(),
        md5Email: md5($("#comment-form-email").val()),
        url: $("#coment-form-url").val(),
        postedAt: Firebase.ServerValue.TIMESTAMP
    });

    $("input[type=text], textarea").val("");
    return false;
    });
});

function slugify(text) {
  return text.toString().toLowerCase().trim()
    .replace(/&/g, '-and-')
    .replace(/[\s\W-]+/g, '-')
    .replace(/[^a-zA-Z0-9-_]+/g,'');
}

function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}