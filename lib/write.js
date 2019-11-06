'use strict';

const fs = require('fs');
const event = require('event');
const EventEmitter = new Events();

module.exports = EventEmitter;
// create two file system methods: read/ write
// if there is an error, pass it off to the callback function

/**
 * @params {string} file - the location the write method will write to.
 * @params {Object} text - a text info
 * @params  {function}cb - our callback function to write data
 */

exports.write = (file, text, cb) => {
  const bufferText = JSON.stringify(text) || text;
  const buffer = Buffer.from(bufferText);
  fs.writeFile(file, buffer, cb);
};