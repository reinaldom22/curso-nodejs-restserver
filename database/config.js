const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_ATLAS,{
           userNewUrlParser: true,
           useUnifiedTopology: true,
           useCreateIndex: true,
           userFindAndModify: false

        });

        console.log('Conexion realizada con éxito');



    } catch (e) {
        console.log(e);
        throw new Error ('Error en la conexión de la base de datos')
    }
}


module.exports = {
    dbConnection
}