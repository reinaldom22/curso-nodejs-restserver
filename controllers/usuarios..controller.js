const { response, request } = require('express');

const usuariosGet = (req = request, res = response) =>  {

    const {nombre, apikey} = req.query;
    res.json({
        msg: 'get Api - Controller',
        nombre, 
        apikey
    });
  }

  const usuariosPost = (req, res = response) => {
    const {nombre, edad} = req.body;
    res.json({
        msg: 'post Api - Controller',
        nombre,
        edad
    });
  }

  const usuariosPut = (req, res = response) => {

    const id = req.params.id;
     
    res.json({
        msg: 'put Api - Controller',
        id
        
    });
  }

  const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch Api - Controller',
        
    });
  }

  const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete Api - Controller'
    });
  }

  module.exports = {
      usuariosGet,
      usuariosPost,
      usuariosPut,
      usuariosPatch,
      usuariosDelete
  }