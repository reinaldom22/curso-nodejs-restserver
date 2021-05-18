const { Schema, model} = require('mongoose');

const usuarioSchema = Schema({
    nombre:{
        type: String,
        required: [true,'El nombre es obligatorio']
    },
    correo:{
        type: String,
        required: [true,'El correo es obligatorio'],
        unique: true
    },
    password:{
        type: String,
        required: [true,'La contraseña es obligatoria']
    },
    img:{
        type: String
    },
    rol:{
        type: String,
        required: true,
        default: 'USER_ROL',
        emun : ['ADMIN_ROL', 'USER_ROL']
    },
    estado:{
        type: Boolean,
       default: true
    },
    google:{
        type: Boolean,
        default: false
    },
});

//funcion para no mostrar información confidencial al momento de realizar un registro exitoso. 
usuarioSchema.methods.toJSON = function () {
    const { __v, password, _id,  ...usuario } = this.toObject();
    usuario.uid = _id;
    return usuario;
}



module.exports = model ('Usuario', usuarioSchema);