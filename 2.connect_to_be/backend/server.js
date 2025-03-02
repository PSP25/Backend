
//first method to configure express
//const express = require('express');//configures as synchronous and as common js way of file import


//******
//second method to configure express is the module js way of file import which is asynchronous
//****88888888*****for that you need to change the package.json file to type: module ***8888888888
//this then assembles the file as a module not as common js
//a  ******************

import express from 'express';//configures as asynchronous and as module js way of file import

const app=express();

// app.get('/',(req,res)=>{
//      res.send('server is running..');
// })

app.get('/api/jokes',(req,res)=>{//client request
     const jokes=[
          {
               id:1,
               joke:"joke 1"
          },{
               id:2,
               joke:"joke 2"
          },{
               id:3,
               joke:"joke 3"
          },{
               id:4,
               joke:"joke 4"
          },{
               id:5,
               joke:"joke 5"
          }
     ]
     res.send(jokes);//response from server to client
});

//work of backend ends here we have created a server and we have created a route to get jokes
//now we need to create a frontend to receive these jokes from the backend
//and display it in the screen as we want it to be displayed

const port=process.env.PORT||3000;
//to get port from .env file if available or set 3000 as default port
app.listen(port,()=>{
     console.log(`server is running on port ${port}`);
})