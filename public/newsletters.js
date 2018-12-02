var form = document.getElementById('newsletter');
form.addEventListener("submit", function(e) {
    // stop form from submitting
    e.preventDefault()
    var email = document.getElementById('inputEmail').value
    submitEmail(email);
})
function submitEmail(email) {
  fetch('/.netlify/lambda-build/form-handler', {
      method: 'post',
      body: JSON.stringify({
        email: email
      })
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log('data from function', data)
      var messageDiv = document.getElementById('message')
      messageDiv.innerText = 'Email added via Netlify functions & AJAX!';
    });
}
