const express = require('express');
const BancoUtils = require('../helpers/bancoUtils');
const Usuario = require('../models/usuario');
const routers = express.Router();
// const UsuarioDAO = require('../models/usuarioDAO');
// const Utils = require('../helpers/utils');
// const segredo = "AluninhoFeliz";
// const jwt = require('jsonwebtoken');


// routers.post('/auth', (req, res) => {
//     const usuario = new Usuario(req.body);
//     usuario.setarSenha(req.body.senha);
//     new UsuarioDAO().buscaPorUsuarioESenha(usuario, (resposta) => {
//         if (resposta.length > 0) {
//             const token = jwt.sign({
//                 id: Utils.criptografa('' + resposta[0].id),
//                 nome: resposta[0].nome,
//                 nivel: resposta[0].admin
//             }, segredo, {
//                 expiresIn: '1h'
//             });
//             res.cookie('token', token).redirect('/index');
//             //res.json(token);
//         } else {
//             res.status(301).redirect('/login');
//         }
//     });

// })

routers.get('/', (req, res) => {
    BancoUtils.select(Usuario.tabela, (usuarios) => {
        res.json(usuarios);
    })

});

routers.post('/', (req, res) => {
    const usuario = new Usuario(req.body);
    usuario.senha = usuario.senha || "anjinho";
    usuario.setarSenha(usuario.senha);
    BancoUtils.insert(usuario, Usuario.tabela, (r) => {
        res.json(r);
    });
})

routers.put('/', (req, res) => {
    const usuarioNovo = new Usuario(req.body);
    BancoUtils.put(usuarioNovo, Usuario.tabela, {
        key: 'id',
        value: usuarioNovo.id
    }, (r) => {
        res.json(r);
    });
})

routers.delete('/:id', (req, res) => {
    BancoUtils.delete(Usuario.tabela, {
        key: 'id',
        value: req.params.id
    }, (r) => {
        res.json(r);
    });
})


module.exports = routers;