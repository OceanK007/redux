# Commands:
1. npm init
2. npm install --save-dev webpack webpack-cli
3. 

# To start:
1. npm start        // It will use webpack dev server to create dist folder in memory 

# To share the build
1. npm run build    // It will create dist folder locally and you can share the files from there.

# JSON Server
1. npm install -g json-server
2. create db.json
    {
    "posts": [
        { "id": 1, "title": "json-server", "author": "typicode" }
    ],
    "comments": [
        { "id": 1, "body": "some comment", "postId": 1 }
    ],
    "profile": { "name": "typicode" }
    }
3. json-server --watch db.json

# URL
https://webpack.js.org/guides/getting-started/#basic-setup