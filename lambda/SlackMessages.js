import querystring from "querystring";
import fetch from "node-fetch";

exports.handler = async (event, context) => {

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const params = querystring.parse(event.body);
  const name = params.name || "World";

  return fetch(process.env.SLACK_WEBHOOK_URL, {
    headers: {
      "content-type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({ text: `${name} says hello!` })
  })
    .then(() => ({
      statusCode: 200,
      body: `Hello, ${name}! Your greeting has been sent to Slack`
    }))
    .catch(error => ({
      statusCode: 422,
      body: `Oops! Something went wrong. ${error}`
    }));
};