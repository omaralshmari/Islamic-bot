{
  "//1": "describes your app and its dependencies",
  "//2": "https://docs.npmjs.com/files/package.json",
  "//3": "updating this file will download and update your packages",
  "name": "hello-express",
  "version": "0.0.1",
  "description": "A simple Node app built on Express, instantly up and running.",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "canvas": "^1.6.11",
    "discord.js": "^11.3.2",
    "export": "^0.1.337",
    "express": "^4.16.3",
    "fs": "^0.0.2",
    "json": "^9.0.6",
    "object": "^0.2.0",
    "require": "^2.4.20"
  },
  "engines": {
    "node": "8.x"
  },
  "repository": {
    "url": "https://glitch.com/edit/#!/hello-express"
  },
  "license": "MIT",
  "keywords": [
    "node",
    "glitch",
    "express"
  ]
}
client.login(process.env.BOT_TOKEN); 
