(function() {
  const NOTIFICATION_DELAY = 2500;

  let messageIndex = 0;
  const fakeMessages = [
    'Heyo',
    'Hows it goin?',
    'What you been up to?',
    'These aren\'t real messages.',
  ];
  const userIcon = '/assets/images/donald-boulton_100.jpg';
  const userName = 'donaldboulton';

  const promiseTimeout = function(cb, timeout) {
    return new Promise((resolve) => {
      setTimeout(() => {
        cb();
        resolve();
      }, timeout);
    });
  };
  const allOptionsNotification = function(registration) {
  const title = 'donboulton.com Notify';
  const options = {
      body: 'Comment Updates Notifications.\n' +
        'There has been a new comment on donboulton.com.',
      icon: '/assets/images/fav-icons/favicon-512x512.png',
      badge: '/assets/images/fav-icons/favicon-192x192.png',
      image: '/assets/images/cloud_and_firebase-320.png',
      sound: '/assets/audio/notification-sound.mp3',
      tag: 'notification',
      vibrate: [500,110,500,110,450,110,200,110,170,40,450,110,200,110,170,40,500],
      actions: [
        {
          action: 'download-book-action',
          title: 'Download Book',
          icon: '/assets/icons/download.svg'
        }
      ]
    };
    registration.showNotification(title, options);
  };
  const mergeNotification = function(registration) {
    const userMessage = fakeMessages[messageIndex];
    /**** START getNotifications ****/
    const promiseChain = registration.getNotifications()
    .then(notifications => {
      let currentNotification;

      for(let i = 0; i < notifications.length; i++) {
        if (notifications[i].data &&
          notifications[i].data.userName === userName) {
          currentNotification = notifications[i];
        }
      }

      return currentNotification;
    })
    /**** END getNotifications ****/
    /**** START manipulateNotification ****/
    .then((currentNotification) => {
      let notificationTitle;
      const options = {
        icon: userIcon,
      }

      if (currentNotification) {
        // We have an open notification, let's do something with it.
        const messageCount = currentNotification.data.newMessageCount + 1;

        options.body = `You have ${messageCount} new messages from ${userName}.`;
        options.data = {
          userName: userName,
          newMessageCount: messageCount
        };
        notificationTitle = `New Messages from ${userName}`;

        // Remember to close the old notification.
        currentNotification.close();
      } else {
        options.body = `"${userMessage}"`;
        options.data = {
          userName: userName,
          newMessageCount: 1
        };
        notificationTitle = `New Message from ${userName}`;
      }

      return registration.showNotification(
        notificationTitle,
        options
      );
    });
    /**** END manipulateNotification ****/

    return promiseChain;
  };

  const mustShowNotification = function(registration) {
    return promiseTimeout(() => {
      const serviceWorker = registration.install || registration.waiting ||
        registration.active;
      serviceWorker.postMessage('must-show-notification-demo');
    }, 4000);
  };

  const sendMessageToPage = function(registration) {
    return promiseTimeout(() => {
      const serviceWorker = registration.install || registration.waiting ||
        registration.active;
      serviceWorker.postMessage('send-message-to-page-demo');
    }, 4000);
  };

  const setUpSWMessageListener = function() {
    /**** START swMessageListener ****/
    navigator.serviceWorker.addEventListener('message', function(event) {
      console.log('Received a message from service worker: ', event.data);
    });
    /**** END swMessageListener ****/
  };

  const setUpNotificationButtons = function() {
    setUpSWMessageListener();

    const configs = [
      {
        className: 'js-notification-title-body',
        cb: titleAndBodyNotification,
        enabled: () => {
          return ('title' in Notification.prototype) &&
            ('body' in Notification.prototype);
        }
      },
      {
        className: 'js-notification-long-title-body',
        cb: longTitleAndBodyNotification,
        enabled: () => {
          return ('title' in Notification.prototype) &&
            ('body' in Notification.prototype);
        }
      },
      {
        className: 'js-notification-icon',
        cb: iconNotification,
        enabled: () => {
          return ('icon' in Notification.prototype);
        }
      },
      {
        className: 'js-notification-badge',
        cb: badgeNotification,
        enabled: () => {
          return ('badge' in Notification.prototype);
        }
      },
      {
        className: 'js-notification-image',
        cb: imageNotification,
        enabled: () => {
          return ('image' in Notification.prototype);
        }
      },
      {
        className: 'js-notification-vibrate',
        cb: vibrateNotification,
        enabled: () => {
          return ('vibrate' in Notification.prototype);
        }
      },
      {
        className: 'js-notification-sound',
        cb: soundNotification,
        enabled: () => {
          return ('sound' in Notification.prototype);
        }
      },
      {
        className: 'js-notification-dir-ltr',
        cb: dirLTRNotification,
        enabled: () => {
          return ('dir' in Notification.prototype);
        }
      },
      {
        className: 'js-notification-actions',
        cb: actionsNotification,
        enabled: () => {
          return ('actions' in Notification.prototype);
        }
      },
      {
        className: 'js-notification-dir-rtl',
        cb: dirRTLNotification,
        enabled: () => {
          return ('dir' in Notification.prototype);
        }
      },
      {
        className: 'js-notification-timestamp',
        cb: timestampNotification,
        enabled: () => {
          return ('timestamp' in Notification.prototype);
        }
      },
      {
        className: 'js-notification-overview',
        cb: allOptionsNotification,
        enabled: () => {
          return true;
        },
      },
      {
        className: 'js-notification-tag',
        cb: notificationTag,
        enabled: () => {
          return ('tag' in Notification.prototype);
        }
      },
      {
        className: 'js-notification-renotify',
        cb: renotifyNotification,
        enabled: () => {
          return ('renotify' in Notification.prototype);
        }
      },
      {
        className: 'js-notification-silent',
        cb: silentNotification,
        enabled: () => {
          return ('silent' in Notification.prototype);
        }
      },
      {
        className: 'js-notification-require-interaction',
        cb: requiresInteractionNotification,
        enabled: () => {
          return ('requireInteraction' in Notification.prototype);
        }
      },
      {
        className: 'js-merge-notification',
        cb: (reg) => {
          mergeNotification(reg)
          .then(() => {
            messageIndex++;

            if (messageIndex >= fakeMessages.length) {
              messageIndex = 0;
            }
          })
        },
        enabled: () => {
          return true;
        }
      },
      {
        className: 'js-must-show-notification',
        cb: mustShowNotification,
        enabled: () => {
          return true;
        }
      },
      {
        className: 'js-send-message-to-page',
        cb: sendMessageToPage,
        enabled: () => {
          return true;
        }
      }
    ];

    return registerServiceWorker()
    .then(function(registration) {
      configs.forEach(function(config) {
        const button = document.querySelector(`.${config.className}`);
        if (!button) {
          console.error('No button found with classname: ', config.className);
          return;
        }
        button.addEventListener('click', function() {
          const promiseResult = config.cb(registration);
          if (promiseResult) {
            button.disabled = true;
            promiseResult.then(() => {
              button.disabled = false;
            })
          }
        });
        button.disabled = !config.enabled();
      });
    });
  };

  window.addEventListener('load', function() {
    if (!('serviceWorker' in navigator)) {
      // Service Worker isn't supported on this browser, disable or hide UI.
      return;
    }

    if (!('PushManager' in window)) {
      // Push isn't supported on this browser, disable or hide UI.
      return;
    }

    let promiseChain = new Promise((resolve, reject) => {
      const permissionPromise = Notification.requestPermission((result) => {
        resolve(result);
      });
      if (permissionPromise) {
        permissionPromise.then(resolve);
      }
    })
    .then((result) => {
      if (result === 'granted') {
        setUpNotificationButtons();
      } else {
        displayNoPermissionError();
      }
    });
  });
})();