'use strict';

var request = require("request");

require('dotenv').config();

function purgeComment(id) {
  let url = `https://api.netlify.com/api/v1/submissions/${id}?access_token=${process.env.API_AUTH}`;
  request.delete(url, function(err, response, body){
    if(err){
      return console.log(err);
    } else {
      return console.log("Comment deleted from queue.");
    }
  });
}

export function handler(event, context, callback) {

  let body = event.body.split("payload=")[1];
  let payload = JSON.parse(unescape(body));
  console.log(payload);

  let method = payload.actions[0].name;
  console.log(method);
  let id = payload.actions[0].value;

  if(method == "delete") {
    purgeComment(id);
    callback(null, {
      statusCode: 200,
      body: "Comment deleted"
    });
  } 
  else if (method == "approve"){

    let url = `https://api.netlify.com/api/v1/submissions/${id}?access_token=${process.env.API_AUTH}`;

    console.log("Getting from", url);


    request(url, function(err, response, body){
      if(!err && response.statusCode === 200){
        let data = JSON.parse(body).data;

        let payload = {
          'form-name' : "approved-comments",
          'path': data.path,
          'received': new Date().toString(),
          'email': data.email,
          'name': data.name,
          'comment': data.comment
        };
        var approvedURL = process.env.URL;

        console.log("Posting to", approvedURL);
        console.log(payload);

        request.post({'url':approvedURL, 'formData': payload }, function(err, httpResponse, body) {
          let msg;
          if (err) {
            msg = 'Post to approved comments failed:' + err;
            console.log(msg);
          } else {
            msg = 'Post to approved comments list successful.';
            console.log(msg);
            purgeComment(id);
          }
          msg = "Comment registered. Site deploying to include it.";
          callback(null, {
            statusCode: 200,
            body: msg
          });
          return console.log(msg);
        });
      }
    });

  }
}
