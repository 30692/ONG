const express = require('express');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const BancoUtils = require('../helpers/bancoUtils');
const Patrocinador = require('../models/patrocinador');
const patrocinadorDAO = require('../models/patrocinadorDAO');
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
        const patrocinador = jwt.verify(req.cookies.token, segredo);        
        console.log(patrocinador);
        let customFileName = patrocinador.id;
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

routers.post('/auth', (req,res) => {
   const patrocinador = new Patrocinador(req.body);
   Patrocinador.setarSenha(req.body.senha);
   new PatrocinadorDAO().buscaPorPatrocinadorESenha(patrocinador, (resposta) => {
    
    if(resposta.length > 0){
        const token = jwt.sign({ senha: Utils.criptografa('' + resposta[0].senha), nome: resposta[0].nome, nivel: resposta[0].admin }, segredo, {expiresIn: '1h'});
        res.cookie('token', token).redirect('/index');
           } else {       
        res.status(301).redirect('/login');
    }
  });
   
})

routers.get('/', (req,res) => {
    BancoUtils.select(Patrocinador.tabela, (patrocinadores) => {
        res.json(patrocinadores);
    })
   
});

routers.post('/', (req,res) => {
    const patrocinador = new Patrocinador(req.body);
    patrocinador.senha = patrocinador.senha || "AnjosDePatas";
    patrocinador.setarSenha(patrocinador.senha);
    BancoUtils.insert(patrocinador, Patrocinador.tabela, (r) => {
        res.json(r);
    });
})

routers.put('/', (req,res) => {
    const patrocinadorNovo = new Patrocinador(req.body);
    BancoUtils.put(patrocinadorNovo, patrocinador.tabela, {key: 'id', value: patrocinadorNovo.id}, (r) => {
        res.json(r);
    });
})

routers.delete('/:id', (req,res) => {
    BancoUtils.delete(Patrocinador.tabela, {key: 'id', value: req.params.id}, (r) => {
        res.json(r);
    });
})

routers.post('/foto', upload.single('foto'), (req,res) => {
    res.redirect('/');
})

module.exports = routers;

