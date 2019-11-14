const express = require('express');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const BancoUtils = require('../helpers/bancoUtils');
const Ong = require('../models/ong');
const ongDAO = require('../models/ongDAO');
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
        const ong = jwt.verify(req.cookies.token, segredo);        
        console.log(ong);
        let customFileName = ong.id;
            fileExtension = file.originalname.split('.')[1] 
            cb(null, customFileName + '.' + fileExtension)
         }
      })
})


routers.post('/auth', (req,res) => {
   const ong = new Ong(req.body);
   ong.setarSenha(req.body.senha);
   new ongDAO().buscaPorOngESenha(ong, (resposta) => {
    
    if(resposta.length > 0){
        const token = jwt.sign({ senha: Utils.criptografa('' + resposta[0].senha), nome: resposta[0].nome, nivel: resposta[0].admin }, segredo, {expiresIn: '1h'});
        res.cookie('token', token).redirect('/index');
           } else {       
        res.status(301).redirect('/login');
    }
  });
   
})

routers.get('/', (req,res) => {
    BancoUtils.select(ong.tabela, (ong) => {
        res.json(ong);
    })
   
});

routers.post('/', (req,res) => {
    const ong = new Ong(req.body);
    ong.senha = ong.senha || "AnjosDePatas";
    ong.setarSenha(ong.senha);
    BancoUtils.insert(ong, Ong.tabela, (r) => {
        res.json(r);
    });
})

routers.put('/', (req,res) => {
    const ongNovo = new Ong(req.body);
    BancoUtils.put(ongNovo, Ong.tabela, {key: 'id', value: ongNovo.id}, (r) => {
        res.json(r);
    });
})

routers.delete('/:id', (req,res) => {
    BancoUtils.delete(Ong.tabela, {key: 'id', value: req.params.id}, (r) => {
        res.json(r);
    });
})

routers.post('/foto', upload.single('foto'), (req,res) => {
    res.redirect('/');
})

module.exports = routers;

