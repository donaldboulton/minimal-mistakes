import { config, database } from 'firebase-functions';
import { initializeApp, database as _database, messaging } from 'firebase-admin';

initializeApp(config().firebase);

export const sendCommentNotification = database.ref('/comments/{commentID}').onWrite(event => {
    const commentID    = event.params.commentID;
    const commentTitle = event.data.val();

    if (!commentTitle) return console.log('Comment', commentID, 'deleted');

    const getDeviceTokensPromise = _database().ref('device_ids').once('value').then(snapshots => {

        if (!snapshots) {
            return console.log('No device IDs to send notifications to.');
        }

        const payload = {
            notification: {
                title: `New Comment: ${commentTitle}`,
                body: 'Click to read new comment.',
                icon: 'https://donboulton.com/assets/images/push-icon.png'
            }
        };

        snapshots.forEach(childSnapshot => {
            const token = childSnapshot.val();

            messaging().sendToDevice(token, payload).then(response => {

                response.results.forEach(result => {
                    const error = result.error;

                    if (error) {
                        console.error('Failed delivery to', token, error);

                        if (error.code === 'messaging/invalid-registration-token' ||
                            error.code === 'messaging/registration-token-not-registered') {
                            childSnapshot.ref.remove();
                            console.info('Was removed:', token);
                        }
                    } else {
                        console.info('Notification sent to', token);
                    }
                });
            });
        });
    });
});
