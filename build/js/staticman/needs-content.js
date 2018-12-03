function flagIfEmpty(input){
  if(input.value.length < 1) {
    input.classList.add("needs-content");
  }
}

(function(){
  var forms = document.querySelectorAll('form');
  if(forms.length == 0){ return;}

  for (let f = 0; f < forms.length; f++) {
    forms[f].addEventListener('submit', function(event) {
      event.preventDefault();
      let form = event.target;

      var flags = form.querySelectorAll('.needs-content');
      for (let f = 0; f < flags.length; f++) {
        flags[f].classList.remove('needs-content');
      }

      let inputs = form.querySelectorAll('input');
      for (let i = 0; i < inputs.length; i++) {
        flagIfEmpty(inputs[i]);
      }
      let text = form.querySelectorAll('textarea');
      for (let t = 0; t < text.length; t++) {
        flagIfEmpty(text[t]);
      }

      flags = form.querySelectorAll('.needs-content');
      if(flags.length > 1) {
        return false;
      } else {
        form.submit();
      }

    }, false);
  }
})();
