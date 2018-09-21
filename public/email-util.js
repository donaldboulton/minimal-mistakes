const emailConfig = require('./email-config')();
const mailgun = require('mailgun-js')(emailConfig);

exports.sendEmail = (recipient, message, attachment) =>
  new Promise((resolve, reject) => {
    const data = {
      from: 'Donald Boulton <info@donboulton.com>',
      to: recipient,
      subject: message.subject,
      text: message.text,
      inline: attachment,
      html: message.html,
    };

    mailgun.messages().send(data, (error) => {
      if (error) {
        return reject(error);
      }
      return resolve();
    });
  });
