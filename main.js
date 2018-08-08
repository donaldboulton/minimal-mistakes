const postBtn = document.getElementById('add-post');
const list = document.getElementById('list');

function saveToDB(title) {
    firebase.database().ref('posts').push(title);
}

postBtn.addEventListener('click', () => {
    const input = document.getElementById('input-title');
    const inputWrap = document.querySelector('.mdl-textfield');
    const listItem = document.createElement('li');

    listItem.innerHTML = input.value;
    list.append(listItem);

    saveToDB(input.value);
    input.value = '';
    inputWrap.classList.remove('is-dirty');
});

loadPosts();


export default function() {

  const database = firebase.database();
  const connectedRef = database.ref(".info/connected");

  connectedRef.on("value", function(snap) {
      if (snap.val() === true) {
          console.log("connected");
          // database.goOnline()
      } else {
          console.log("not connected");
          // database.goOffline()


      }
  });
  readDB();

  function readDB() {
      console.log('read');
      database.ref('posts').once('value').then(snapshots => {

          snapshots.forEach(childSnapshot => {
              const data = childSnapshot.val();
              const listItem = document.createElement('li');

              listItem.innerHTML = data;
              list.append(listItem);
          });

      });
  }

}

export default function(payload) {
    const snackbarContainer = document.querySelector('#snackbar');

    console.log('snack payload', payload);
    let data = {
        message: payload.notification.title,
        timeout: 5000,
        actionHandler(event) {
            location.reload();
        },
        actionText: 'Reload'
    };
    snackbarContainer.MaterialSnackbar.showSnackbar(data);

}

