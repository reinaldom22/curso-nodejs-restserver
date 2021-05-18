const { response } = require('express');

const esAdminRole = ( req, res = response, next) => {

    if ( !req.usuario ) {
        return res.status(500).json({
            msg: 'Se quiere verificar el rol sin validar el token'
        })
    }
    
    const { rol, nombre} = req.usuario;

    if (rol !== 'ADMIN_ROL'){
        return res.status(401).json({
            msg:`${nombre} No es un administrador - No puede ejecutar esta accion`
        })
    }

    next();
}

const tieneRol = ( ...roles ) => {

    return (req, res = response, next) => {

        if ( !req.usuario ) {
            return res.status(500).json({
                msg: 'Se quiere verificar el rol sin validar el token'
            })
        }

        if( !roles.includes(req.usuario.rol)) {
            return res.status(401).json({

                msg: `El servicio requiere uno de estos roles ${roles}`
            })
        }
        
        next();
    }
}


module.exports = {
    esAdminRole,
    tieneRol
}