import { parse } from 'querystring'

exports.handler = (event, context, callback) => {
  let body = {}
  console.log(event)
  try {
    body = JSON.parse(event.body)
  } catch (e) {
    body = parse(event.body)
  }

  // Bail if email is missing
  if (!body.email) {
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify({
        error: 'missing email'
      })
    })
  }

  // Do my email subscription logic
  

  if (event.headers['content-type'] === 'application/x-www-form-urlencoded') {
    // Do redirect for non JS enabled browsers
    return callback(null, {
      statusCode: 302,
      headers: {
        Location: '/thanks.html',
        'Cache-Control': 'no-cache',
      },
      body: JSON.stringify({})
    })
  }

  // Return data to AJAX request
  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      emailAdded: true
    })
  })
}
