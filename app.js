const Server = require('./models/server');

require('dotenv').config();
// const express = require('express')
// const app = express()
 
// app.get('/',  (req, res) =>  {
//   res.send('Hello World')
// })
 
// app.listen(process.env.PORT, () =>{
//     console.log('Servidor corriendo en puerto', process.env.PORT);
// });


const server = new Server();

server.listen();

