'use strict';
const eventEmitter = require("./eventEmitter");
eventEmitter.on("file-read", () => {
  console.log("file-read")
});

eventEmitter.on("file-uppercased", text => {
  console.log("file uppercased", text);
});

eventEmitter.on("file-saved",  () => {
  console.log("file Saved!");
});


eventEmitter.on("file read error", (error) => {
  console.log("file read error");
});