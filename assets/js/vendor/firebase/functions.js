var mimes = {
  "image/gif": {
    "source": "iana",
    "compressible": false,
    "extensions": ["gif"]
  },
  "image/jpeg": {
    "source": "iana",
    "compressible": false,
    "extensions": ["jpeg","jpg","jpe"]
  },
  "image/png": {
    "source": "iana",
    "compressible": false,
    "extensions": ["png"]
  },
  "image/svg+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["svg","svgz"]
  },
  "image/webp": {
    "source": "apache",
    "extensions": ["webp"]
  },
};

var saveImage = function(file, filename, ref, callbacks) {
  if(!ref) ref = firebase.storage().ref();
  if(!callbacks) callbacks = {};
  if(mimes[file.type].extensions[0]) {
    callbacks.success = callbacks.success || console.log;
    callbacks.progress = callbacks.progress || console.log;
    callbacks.error = callbacks.error || console.error;

    // Create the file metadata
    var metadata = {
      contentType: file.type
    };

    // Upload file and metadata to the object
    var uploadTask = ref.child(filename + '.' + mimes[file.type].extensions[0]).put(file, metadata);
    uploadTask.on('state_changed', callbacks.progress, callbacks.error, callbacks.success);
    
    return uploadTask.then(function(snapshot) { return snapshot.ref.getDownloadURL(); });
  }
}


function onChildAdd (snap) {
  $('#contacts').append(contactHtmlFromObject(snap.key, snap.val()));
}
 
//prepare contact object's HTML
function contactHtmlFromObject(key, contact){
  return document.querySelector('#'+key) ? ''
  : '<div class="card contact" style="width: 18rem;" id="'+key+'">'
    + '<div class="card-body">'
      + '<h5 class="card-title">'+contact.name+'</h5>'
      + '<h6 class="card-subtitle mb-2 text-muted">'+contact.email+'</h6>'
      + '<p class="card-text" title="' + contact.location.zip+'">'
        + contact.location.city 
        + (contact.location.state === '' ? '' : ', ')
        + contact.location.state
      + '</p>'
    + '</div>'
  + '</div>';
}

function span(textStr, textClasses) {
  var classNames = textClasses.map(c => 'text-'+c).join(' ');
  return '<span class="'+classNames+'">'+ textStr + '</span>';
}

function setUserInfoArea(data) {
  if(data.photoURL) {
    $('.user-info img').show();
    $('.user-info img').attr('src', data.photoURL);
    $('.user-info').addClass('with-image').show();
    $('.user-info .user-name').hide();
  } else if(data.displayName) {
    $('.user-info img').hide();
    $('.user-info').append('<span class="btn btn-link user-name">'+data.displayName+'</span>');
  } else if(data.firstName) {
    $('.user-info img').hide();
    $('.user-info').append('<span class="btn btn-link user-name">'+data.firstName+'</span>');
  }
}

var extractFormData = function (form) {
  const formData = new FormData(document.querySelector(form));
  values = {};
  for(var pair of formData.entries()) {
    if( values[pair[0]] ) {
      if(!(values[pair[0]] instanceof Array)) {
        values[pair[0]] = new Array(values[pair[0]]);
      }
      values[pair[0]].push(pair[1]);
    } else {
      values[pair[0]] = pair[1];
    }
  }
  return values;
}

var progress = function(snapshot){
  // Observe state change events such as progress, pause, and resume
  var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  console.log('Upload is ' + progress + '% done');
  switch (snapshot.state) {
    case firebase.storage.TaskState.PAUSED: // or 'paused'
      console.log('Upload is paused');
      break;
    case firebase.storage.TaskState.RUNNING: // or 'running'
      console.log('Upload is running');
      break;
  }
}

var error = function(error){
  console.error(error);
}
