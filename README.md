# event_driven_application
using events to trigger logging based activity-lab16


### Author: Alistair Blake

### Links and Resources
* github: (https://github.com/Alwynblake/async-await)

###### `readFile() -> object`
Reads the JSON file, converts it to a string, then parses into an object. 

###### `writeFile() -> string`
Writes a string or buffer into a JSON file.

###### `readFilePromises() -> buffer`
Reads the JSON file, returns a buffer.

###### `writeFilePromises() -> 
Writes a buffer into a JSON file.

### Description of Process:
#### Callback
* When node runs index.js, it imports the class FileEdit and sets it to currentEdit.
* currentEdit will then run the method readFile, which will run fs.readFile. This then provides the contents of the JSON file to the callback, after converting it to a string and parsing it. 
* While still in the callback, the contents are changed using faker to provide new first and last names, and made into a buffer. 
* In the same callback, another method, writeFile, is called. This takes the new changed contents and writes it back into the JSON file by running fs.writeFile. fs.writeFile also provides the data to its callback.
* In the writeFile method's callback, readFile is called again, it runs fs.readFile, provides the changed data from the same JSON file, and in its callback it console.logs this data.