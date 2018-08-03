/* eslint consistent-return:0 */

const push = require('./push.js');

const $button = document.querySelector('.js-button');
let activated = false;

$button.addEventListener('click', () => {
    if (!activated) {
        $button.disabled = true;
        push.subscribe();
        $button.innerHTML = 'Disable Push Notifications';
    } else {
        $button.disabled = true;
        push.unsubscribe();
        $button.innerHTML = 'Enable Push Notifications';
    }
    activated = !activated;
});

push.on(push.SUBSCRIBED, () => {
    activated = true;
});
push.on(push.UNSUBSCRIBED, () => {
    activated = false;
});

push.on('*', () => {
    $button.disabled = false;
});

push.init();
