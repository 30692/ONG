const express = require('express');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const BancoUtils = require('../helpers/bancoUtils');
const Usuario = require('../models/usuario');
const UsuarioDAO = require('../models/usuarioDAO');
const Utils = require('../helpers/utils');
const segredo = "Solidariedade";
const routers = express.Router();
const upload = multer({
    storage: multer.diskStorage({
       destination: (req, file, cb) => {
          cb(null, path.join(__dirname, '../../public/assets/imagens'))
     },
     filename: (req, file, cb) => {
         console.log(req.cookies.token);
        const usuario = jwt.verify(req.cookies.token, segredo);        
        console.log(usuario);
        let customFileName = usuario.rm;
            fileExtension = file.originalname.split('.')[1] 
            cb(null, customFileName + '.' + fileExtension)
         }
      })
})

routers.get('/', (req, res)=> {
    if(req.cookies.token){
        res.redirect('/')
    } else {
        res.send('nop')
    }
})

routers.get('/autocompleta',(req,res) => {
    const valor = req.query.valor;
    new UsuarioDAO().autocompleta(valor, (respostaDoBanco) => {
       res.json(respostaDoBanco);
   })
});

routers.post('/auth', (req,res) => {
   const usuario = new Usuario(req.body);
   usuario.setarSenha(req.body.senha);
   new UsuarioDAO().buscaPorUsuarioESenha(usuario, (resposta) => {
    
    if(resposta.length > 0){
        const token = jwt.sign({ senha: Utils.criptografa('' + resposta[0].senha), nome: resposta[0].nome, nivel: resposta[0].admin }, segredo, {expiresIn: '1h'});
        res.cookie('token', token).redirect('/index');
           } else {       
        res.status(301).redirect('/login');
    }
  });
   
})

routers.get('/', (req,res) => {
    BancoUtils.select(Usuario.tabela, (usuarios) => {
        res.json(usuarios);
    })
   
});

routers.post('/', (req,res) => {
    const usuario = new Usuario(req.body);
    usuario.senha = usuario.senha || "yourhelp";
    usuario.setarSenha(usuario.senha);
    BancoUtils.insert(usuario, Usuario.tabela, (r) => {
        res.json(r);
    });
})

routers.put('/', (req,res) => {
    const usuarioNovo = new Usuario(req.body);
    BancoUtils.put(usuarioNovo, Usuario.tabela, {key: 'id', value: usuarioNovo.id}, (r) => {
        res.json(r);
    });
})

routers.delete('/:id', (req,res) => {
    BancoUtils.delete(Usuario.tabela, {key: 'id', value: req.params.id}, (r) => {
        res.json(r);
    });
})

routers.post('/foto', upload.single('foto'), (req,res) => {
    res.redirect('/');
})

module.exports = routers;

