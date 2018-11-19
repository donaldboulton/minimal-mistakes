var dialog = document.getElementById('my-accessible-dialog');

// Get the button that opens the dialog
var btn = document.getElementById("myBtn");

// When the user clicks the button, open the dialog 
btn.onclick = function() {
    dialog.style.display = "block";
};

// When the user clicks on <span> (x), close the dialog
btn.onclick = function() {
    dialog.style.display = "none";
};

const el = document.querySelector('#my-accessible-dialog');
const dialog = new A11yDialog(el, '#menu');
