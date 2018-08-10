const postBtn = document.getElementById('comment-form-submit');
const list = document.getElementById('list');

function saveToDB(title) {
    firebase.database().ref('posts').push(title);
}

postBtn.addEventListener('click', () => {
    const input = document.getElementById('comment-form-title');
    const inputWrap = document.querySelector('.mdl-textfield');
    const listItem = document.createElement('li');

    listItem.innerHTML = input.value;
    list.append(listItem);

    saveToDB(input.value);
    input.value = '';
    inputWrap.classList.remove('is-dirty');
});
