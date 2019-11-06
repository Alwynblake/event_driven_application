'use strict';

const fs = require('fs');
const event = require('event');
const EventEmitter = new Events();

// module.exports = EventEmitter;
// create two file system methods: read/ write
// if there is an error, pass it off to the callback function

/**
 * @param {string} filePath - the relative path to the file
 * @param {function} cb - error first callback function to handle errors
 */
exports.read = (filePath, cb) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      cb(err);
    } else {
      // try catch block
      try {
        cb(null, JSON.parse(data.toString()));
      } catch (e) {
        cb(e);
      }
    }
  });
};