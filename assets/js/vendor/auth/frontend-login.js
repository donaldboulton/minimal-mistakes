import GoTrue from 'gotrue-js';

// Find out if we're on localhost
const isLocal = document.location.host.split(':').shift() === 'localhost';

// Instantiate the library, passing in the live API URL
// and whether it should save cookies
const auth = new GoTrue({
  APIUrl: 'https://donboulton.com/.netlify/identity',
  setCookie: !isLocal
});

// Get the current user object, or null if no-ones logged in
const user = auth.currentUser()

// Log it for next time around
console.log(user)

const loginForm = document.querySelector('.identity-form-login');
loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  auth.login(this.email.value, this.password.value, true).then(
    user => window.location.href = '/',
    error => console.error("Failed to log in: %o", error)
  );
});

const logoutButton = document.querySelector('.identity-logout');
logoutButton.addEventListener('click', function() {
  const user = auth.currentUser()
  if (!user) return;
  user.logout().then(
    response => window.location.href = '/',
    error => console.error("Failed to logout user: %o", error)
  );
});

if (window.location.hash && window.location.hash.indexOf('#invite_token=') === 0) {
  const token = window.location.hash.replace('#invite_token=', '');
  const confirmForm = document.querySelector('.identity-form-confirm');
  confirmForm.classList.remove(hideClass);
  confirmForm.addEventListener('submit', function(event) {
    event.preventDefault();
    auth.acceptInvite(token, this.password.value, true).then(
      user => window.location.href = '/',
      error => console.error("Failed to log in: %o", error)
    );
  });
}

if (window.location.hash && window.location.hash.indexOf('#confirmation_token=') === 0) {
  const token = window.location.hash.replace('#confirmation_token=', '');
  auth.confirm(token, true).then(
    user => window.location.href = '/',
    error => console.error("Failed to log in: %o", error)
  );
}