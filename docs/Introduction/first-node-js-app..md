---
id: first-node-js-app
title: Create First Node.js App 
sidebar_label: First App
slug: /first-node-js-app
---

Lets create a Simple HTTP Endpoint which says hello world in response when we hit it with Browser 

## Write a Simple Application
Create a new File named ```hello-world-app.js``` and copy below code into it 

```js
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

```

You can find the file **[here](code-snippets/Fundamentals/hello-world-app.js)** which you can easily copy in your local machine 

We will be understanding all concepts one by one in Further Sections 
## Run the application 
Open your terminal and go to the folder where this js file is located and type below command 

```shell
node hello-world-app.js
```

## Test the application 
Open your browser and enter in url `http://localhost:3000/`
Your browser will display 
```shell
Hello, World!
```

## Understanding the code 
`require` loads module `http` into our code . modules are re-usable packages . Which will be covered into further sections.
Constant variables are declared using cons with values. `127.0.0.1` refers to local machine 

`createServer` methods creates an instance of Simple HTTP Server and `listen` methods starts the server
which runs on Specified hosts and port 

Dont worry if you have not understood above section . We will be covering all of it in detail 
