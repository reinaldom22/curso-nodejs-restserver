const Role = require('../models/role')
const Usuario = require('../models/usuario');

const esRoleValido = async (rol = '') => {
    const existeRol = await Role.findOne({rol});
    if (!existeRol){
       throw new Error(`El rol ${rol} no está registrado en la DB`);
    }
 }

 const emailExiste = async (correo ='') =>{
    const existeEmail = await Usuario.findOne({correo});
    if( existeEmail){
      throw new Error (`el correo ${correo} ya esta registrado`);
    }
 }

 const existeUsuarioPorId = async (id) =>{
   const existeID = await Usuario.findById(id);
   if( !existeID){
     throw new Error (`el ID ${id} no existe`);
   }
}

 module.exports = {
     esRoleValido,
     emailExiste,
     existeUsuarioPorId
 }