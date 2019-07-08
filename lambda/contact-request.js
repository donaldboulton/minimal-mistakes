import querystring from 'querystring'
import fetch from 'node-fetch'

exports.handler = async (event, context) => {

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  const params = querystring.parse(event.body)
  const name = params.name || 'event.name'

  return fetch(process.env.SLACK_WEBHOOK_URL, {
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ text: `Message sent by ${event.name} (${event.email}):\n ${event.message}` }),
  })
    .then(() => ({
      statusCode: 200,
      body: `Hello, ${name}! Your Contact Message has been sent to Slack`,
    }))
    .catch(error => ({
      statusCode: 422,
      body: `Oops! Something went wrong. ${error}`,
    }))
};