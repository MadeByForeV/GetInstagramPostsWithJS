# Can you use this app to get your instagram account's posts

## Yes you can do it, but how ?

first you should learn your token at the https://developers.facebook.com with creating an app and adding inside (which account do you get posts) instagram testers to your app.

then you should send a request to https://graph.instagram.com/me?fields=id,username,media&access_token=your_access_token

after that you will learn your account's user id.

finally you use this app with setting variables to your informations in index.js, like token and userId
