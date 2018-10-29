const netlifyIdentity = require("netlify-identity-widget");
 
netlifyIdentity.init({
  container: "#netlify-modal" // defaults to document.body,
});
 
netlifyIdentity.open(); // open the modal
netlifyIdentity.open("login"); // open the modal to the login tab
netlifyIdentity.open("signup"); // open the modal to the signup tab
 
netlifyIdentity.on("init", user => console.log(user));
netlifyIdentity.on("login", user => console.log(user));
netlifyIdentity.on("logout", () => console.log("Logged out"));
netlifyIdentity.on("error", err => console.error("Logged out"));
netlifyIdentity.on("open", () => console.log("Widget opened"));
netlifyIdentity.on("close", () => console.log("Widget closed"));
 
// Close the modal
netlifyIdentity.close();
 
// Logout the user
netlifyIdentity.logout();
 
// Access the underlying gotrue instance.
// Note that doing things directly through gotrue brings a risk of getting out of
// sync between your state and the widgets state.
netlifyIdentity.gotrue;
