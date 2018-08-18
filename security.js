{
  "rules": {
    "profiles": {
      "$uid": {
        // grants write access to the owner of this user account whose uid must exactly match the key ($uid)
        ".write": "auth !== null && auth.uid === $uid",

        // grants read access to any user who is logged in with an email and password
        ".read": "auth !== null && auth.provider === 'password'"
      }
    },
    "conatcts":{
      "$uid": {
        // grants write access to the owner of this user account whose uid must exactly match the key ($uid)
        ".write": "auth !== null && auth.uid === $uid",

        // grants read access to any user who is logged in with an email and password
        ".read": "auth !== null && auth.provider === 'password'"
      }
    }
  }
}