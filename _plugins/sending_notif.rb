require 'fcm'

api_key = "<API_KEY>"

registration_tokens = [<REGISTRATION_TOKEN_FROM_BROWSER>]

fcm = FCM.new(api_key)

# options = {data: {score: "123"}}
options = {
  notification: {
    title: "Portugal vs. Denmark",
    body: "5 to 1",
    icon: "firebase-logo.png",
    click_action: "http://localhost:8081"
  }
}

response = fcm.send(registration_tokens, options)