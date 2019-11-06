'use strict';

cnst events = require('events');
const eventEmitter = new events();

module.exports xxxxxxx

const fs = require('fs');
const util = require('util');

const reader = (file, cb) => {
  fs.readFile(file, (err,data) => {
    if (err) {
      cb(err);
    } else {
      cb(null, data.toString());
    }
  });
};

const readFilePromise = util.promisify(fs.readFile);
const readerPromise = (file) => {
  return readFilePromise(file)
      .then(data => data.toString())
      .catch(error => error);
};

module.exports = reader;
module.exports = EventEmitter;