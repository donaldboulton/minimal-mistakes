import querystring from "querystring";
import fetch from "node-fetch";

exports.handler = async (event, context) => {

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const params = querystring.parse(event.body);
  const email = params.name || "NewLetters";

  return fetch(process.env.SLACK_WEBHOOK_URL, {
    headers: {
      "content-type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({ text: `${email} signs up!` })
  })
    .then(() => ({
      statusCode: 200,
      body: `Hello, ${email}! You email address is added for Newsletters!`
    }))
    .catch(error => ({
      statusCode: 422,
      body: `Oops! Something went wrong. ${error}`
    }));
};