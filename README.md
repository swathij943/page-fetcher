Implement a node app called fetcher.js.

It should take two command line arguments:

1.a URL

2.a local file path
It should download the resource at the URL to the local path on your machine. Upon completion, it should print out a message like Downloaded and saved 1235 bytes to ./index.html.

> node fetcher.js http://www.example.edu/ ./index.html
Downloaded and saved 3261 bytes to ./index.html


Asynchronous Operations
There are two operations in this problem which will take an unknown amount of time:

1.You need to make an http request and wait for the response.

2.After the http request is complete, you need to take the data you receive and write it to a file in your local filesystem.