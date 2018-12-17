import { parse } from 'querystring';

exports.handler = (event, context, callback) => {
  let body = {}
  console.log(event)
  try {
    body = JSON.parse(event.body)
  } catch (e) {
    body = parse(event.body)
  }

  if (!body.email) {
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify({
        error: 'missing email'
      })
    })
  }  

  if (event.headers['content-type'] === 'application/x-www-form-urlencoded') {

    return callback(null, {
      statusCode: 302,
      headers: {
        Location: '/thanks.html',
        'Cache-Control': 'no-cache',
      },
      body: JSON.stringify({})
    })
  }

  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      emailAdded: true
    })
  })
}
