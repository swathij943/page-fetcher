//import request & fs modules, then retrieves URL & filepath from the command line arguments using 'process.argv'
//makes an HTTP request using 'request' fn, passing URL & a callback fn
//In cb fn - checks any errors or invalid response status code, if there is an error it shows the error msg
//If no error and the response is valid, it writes rxd 'body' using file path 'fs.writeFile'
//In 2nd cb fn - checks for any errors while writing the file. If there is an error it will show & no error it checks the file size by getting the length of the 'body' and prints a sucess msg 

const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('Invalid response status code:', response.statusCode);
  } else {
    fs.writeFile(filePath, body, (error) => {
      if (error) {
        console.error('Error writing file:', error);
      } else {
        const fileSize = body.length;
        console.log(`Downloaded & saved ${fileSize} bytes to ${filePath}`);
      }
    });
  }
});