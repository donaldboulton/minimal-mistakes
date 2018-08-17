$(document).ready(function(){
    var cogHTML = '<svg class="icon spin"><use xlink:href="/assets/icons/icons.svg#icon-loading"></use></svg> Loading...';

    const forms = {
      login: '#loginForm',
      settings: '#settingsForm',
      updateUserInfo: '#updateForm',
      addContact: '#contactForm',
      register: '#registerForm',
      forgotPassword: '#forgotPasswordForm',
    };

    //create firebase references
    var Auth = firebase.auth();
    var Storage = firebase.storage();
    var dbRef = firebase.database();
    var contactsRef = dbRef.ref('contacts');
    var profileImagesRef = Storage.ref().child('profile-images');
    var usersRef = dbRef.ref('users');
    var user = null;
    var userData = null;

    //Register
    $(forms.register).on('submit', function (e) {
      e.preventDefault();
      $('#registerModal').modal('hide');
      $('#messageModalLabel').html(span(cogHTML, ['center', 'info']));
      $('#messageModal').modal('show');
      var data = {
        email: $('#registerEmail').val(), //get the email from Form
        firstName: $('#registerFirstName').val(), // get firstName
        lastName: $('#registerLastName').val(), // get lastName
      };

      var password = $('#registerPassword').val(); //get the pass from Form
      var cPassword = $('#registerConfirmPassword').val(); //get the confirmPass from Form
      var photo = $('#registerPhoto').get(0).files[0];
      var profileData = {
        displayName: data.firstName + ' ' + data.lastName,
        photoURL: null
      };
      if( data.email != '' && password != ''  && cPassword === password ){
        Auth.createUserWithEmailAndPassword(data.email, password)
          .then(function() { user = Auth.currentUser })
          .then(function() { return sendEmailVerification(data) })
          .then(function() { return photo ? saveImage(photo, user.uid, profileImagesRef) : null })
          .then(function(url) { profileData.photoURL = url; })
          .then(function(){ return user.updateProfile(profileData) })
          .then(function(){ saveUserInfo(data) })
          .then(function(){
            userData = data;
            console.log("User Information Saved:", user.uid);
            $('#messageModalLabel').html(span('Success!', ['center', 'success']));

            $('#messageModal').modal('hide');
          })
          .then(updateUserStatus)
          .catch(function(error){
            console.log("Error creating user:", error);
            $('#messageModalLabel').html(span('ERROR: '+error.code, ['danger']));
          });
      }
    });

    //Login
    $(forms.login).on('submit', function (e) {
      e.preventDefault();
      $('#loginModal').modal('hide');
      $('#messageModalLabel').html(span(cogHTML, ['center', 'info']));
      $('#messageModal').modal('show');

      var email = $('#loginEmail').val();
      var password = $('#loginPassword').val();
      if( email != '' && password != '' ){
        Auth.signInWithEmailAndPassword(email, password)
          .then(function(authData) {
            user = authData;
            $('#messageModalLabel').html(span('Success!', ['center', 'success']));
            $('#messageModal').modal('hide');
          })
          .catch(function(error) {
            console.log("Login Failed!", error);
            $('#messageModalLabel').html(span('ERROR: '+error.code, ['danger']));
          });
      }
    });

    // Forgot Password
    $(forms.forgotPassword).on('submit', function (e) {
      e.preventDefault();
      $('#forgotPasswordModal').modal('hide');
      $('#messageModalLabel').html(span(cogHTML, ['center', 'info']));
      $('#messageModal').modal('show');

      var data = extractFormData(forms.forgotPassword);
      if( email !== ''){
        firebase.auth().sendPasswordResetEmail(data.email)
          .then(function() {
            $('#messageModalLabel').html(span('Reset Link sent to email!', ['center', 'success']));
          })
          .catch(function(error) {
            console.error("Failed!", error);
            $('#messageModalLabel').html(span('ERROR: '+error.code, ['danger']));
          });
      }
    });

    $('#logout').on('click', function(e) {
      e.preventDefault();
      Auth.signOut();
    });

    //Update user info
    $(forms.updateUserInfo).on('submit', function (e) {
      e.preventDefault();
      var values = extractFormData(forms.updateUserInfo);
      user = Auth.currentUser;
      var profileData = {
        displayName: values.firstName + ' ' + values.lastName,
        photoURL: null
      };
      var promise = values.photo
        ? saveImage(values.photo, user.uid, profileImagesRef)
          .then(function(url) { profileData.photoURL = url; })
          .then(function(){ return user.updateProfile(profileData) })
        : Promise.resolve(null);
      promise
        .then(function() { return saveUserInfo(values); })
        .then(updateUserStatus)
        .then(function(){
          console.log("User Information Saved:", user.uid);
          $('#updateInfoModal').modal('hide');
        })
    });

    // Send the email verification link
    $('#send-verification').on('click', sendEmailVerification);
    $('#changePasswordTrigger').on('click', function() {
      var c = document.querySelector('#forgotPasswordModal').querySelectorAll('.auth-false');
      c.forEach(el => el.classList.add('d-none'));
    });
    $('#forgotPasswordTrigger').on('click', function() {
      var c = document.querySelector('#forgotPasswordModal').querySelectorAll('.auth-false');
      c.forEach(el => el.classList.rmeove('d-none'));
    });


    $('.linkSocial').on('click', function(e) {
      var provider = e.target.getAttribute('data-provider');
      var p = provider+'AuthProvider';
      provider = firebase.auth[p];
      if(provider && e.target.hasAttribute('disabled')) {
        Auth.currentUser.linkWithPopup(new provider).then(console.log);
      }
    });

    // Prevent User from adding contact if email is not verified
    $('#addContactModalTrigger').on('click', function(e) {
      if(!user.emailVerified) {
        e.stopPropagation();
        e.target.classList.add('btn-danger');
        setTimeout(function() {
          e.target.classList.remove('btn-danger');
        }, 500);
      }
    });

    //save contact
    $(forms.addContact).on('submit', function( event ) {
      event.preventDefault();
      if( user != null ){
        var formData = extractFormData(forms.addContact);
        if( formData.name !== '' || formData.email !== '' ){
          contactsRef.child(user.uid).push({
            name: formData.name,
            email: formData.email,
            location: {
              city: formData.city,
              state: formData.state,
              zip: formData.zip,
            }
          });
          document.contactForm.reset();
        } else {
          alert('Please fill at-least name or email!');
        }
      }
    });

    Auth.onAuthStateChanged(updateUserStatus);

    function saveUserInfo(data) {
      user = Auth.currentUser;
      return usersRef.child(user.uid).set(data);
    }
    function sendEmailVerification(data) {
      email = data.email || user.email;
      return user.emailVerified || user.sendEmailVerification({
        url: window.location.href + '?email=' + user.email,
      });
    }
    function updateUserStatus(userInfo) {
      userInfo = userInfo || Auth.currentUser;
      if (userInfo) {
        user = userInfo;
        $('body').removeClass('auth-false').addClass('auth-true');
        if(user.emailVerified) {
          document.querySelector('#email-verification').classList.add('d-none');
        } else {
          document.querySelector('#email-verification').classList.remove('d-none');
        }
        var providers = user.providerData.map(function(provider){ return provider.providerId;});
        var _providers = providers.join(',');
        [].slice.call(document.querySelectorAll('.linkSocial')).forEach(function(el) {
          if(_providers.split(new RegExp(el.getAttribute('data-provider'), 'ig')).length > 1) {
            el.setAttribute('disabled', true);
          }
        });
        usersRef.child(user.uid).once('value').then(function (snapshot) {
          var info = snapshot.val();
          var data = Object.assign({}, info, {
            photoURL: user.photoURL,
            displayName: user.displayName,
          });
          userData = data;
          setUserInfoArea(data);
        });
        contactsRef.child(user.uid).on('child_added', onChildAdd);
      } else {
        // No user is signed in.
        $('body').removeClass('auth-true').addClass('auth-false');
        user && contactsRef.child(user.uid).off('child_added', onChildAdd);
        $('#contacts').html('');
        user = null;
      }
    }
  });