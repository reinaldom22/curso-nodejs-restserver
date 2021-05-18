const { Router } = require('express');
const { check } = require('express-validator');


// const { validarCampos } = require('../middlewares/validar-campos')
// const { validarJWT } = require('../middlewares/validar-jwt')
// const { esAdminRole, tieneRol } = require('../middlewares/validar-roles')

const {
   validarCampos, 
   validarJWT,
   esAdminRole, 
   tieneRol} = require('../middlewares')

const {  usuariosGet,
         usuariosPost,
         usuariosPut,
         usuariosPatch,
         usuariosDelete} = require('../controllers/usuarios_controller');
const { esRoleValido, emailExiste, existeUsuarioPorId } = require('../helpers/db-validatos');

const router = Router();

   router.get('/',  usuariosGet);

   //PUT
   router.put('/:id', [
      check('id', 'No es un ID valido').isMongoId(),
      check('id').custom(existeUsuarioPorId),
      check('rol').custom(esRoleValido),
      validarCampos
   ], usuariosPut);
   
   //POST
   router.post('/',[
      check('nombre','El nombre es obligatorio').not().isEmpty(),
      check('password','El password es obligatorio y debe contener mas de 6 letras').not().isEmpty().isLength({min:6}),
      check('correo','El correo no es válido').isEmail(),
      check('correo').custom(emailExiste),
      // check('rol', 'No es un rol válido').isIn(['ADMIN_ROL', 'USER_ROL']),
      check('rol').custom(esRoleValido),
      validarCampos

   ] , usuariosPost);

 
   
   router.patch('/',  usuariosPatch);
   
   router.delete('/:id',[
      validarJWT,
      // esAdminRole,
      tieneRol('ADMIN_ROL' , 'USER_ROL' , 'VENTAS_ROL'),
      check('id', 'No es un ID valido').isMongoId(),
      check('id').custom(existeUsuarioPorId),
      validarCampos]
      ,usuariosDelete);

     




module.exports = router;