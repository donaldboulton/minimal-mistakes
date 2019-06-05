const https = require('https')

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
})

exports.handler = (event, context, callback) => {
  const payload = JSON.stringify({
    text: `Message sent by ${event.name} (${event.email}):\n ${event.message}`,
  })

  const options = {
    hostname: 'hooks.slack.com',
    port: 443,
    path: process.env.SLACK_WEBHOOK_URL,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const req = https.request(options,
    (res) => res.on('data', () => callback(null, 'OK')))
  req.on('error', (error) => callback(JSON.stringify(error)))
  req.write(payload)
  req.end()
}
