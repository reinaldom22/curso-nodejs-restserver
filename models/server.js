const express = require ('express')
var cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {

    constructor () {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Conectar a DB
        this.conectarDB();

        // Middlewares = funciones que añaden funcionalidad al webserve
        this.middlewares();

        //Rutas de la app
        this.routes();
    }

    async conectarDB() {
        await dbConnection();
    }

    middlewares() {
        //Cors
        this.app.use(cors())

        // Parseo y Lectura del body
        this.app.use(express.json()); //cualqueir información que venga aqui se serializa a json

        //Directorio Public
        this.app.use(express.static('public'));
    }
    routes() {
        this.app.use(this.usuariosPath, require('../routes/user'));
    }

    listen() {
        this.app.listen(this.port, () =>{
            console.log('Servidor corriendo en puerto', this.port);
        });
    }


}

module.exports= Server;