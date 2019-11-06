'use strict';

const fs= require("fs");
const util = require("util");
const eventEmitter = require("./eventEmitter");
require("./file-events");

const readFile = async file => {
  const fsRead = util.promisify(fs.readFile);
  try {
    const data = await fsRead(file);
    eventEmitter.emit("file-read");
    return data;
  } catch (error) {
    eventEmitter.emit("file-read-error", error);
  }
};

const upperCase = data => {
  let text = data.toString().toUpperCase();
  eventEmitter.emit("file-uppercase", text);
  return text
};

const saveFile = async (File, text) => {
  const fswrite = util.promisify(fs.writeFile);
  await fswrite(file, Buffer.from(text));
  eventEmitter.emit("file-saved");
};

const alterFile = async File => {
  // read the file:
  const data = await readFile(file);

  // convert data to upper case
  const text = upperCase(data);

  // write it back to the file system
  // let file = process.argv.slice(2).shift();
  saveFile(File, text);

};

let file = process.argv.slice(2).shift();
