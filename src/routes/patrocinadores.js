const express = require('express');
const BancoUtils = require('../helpers/bancoUtils');
const Patrocinador = require('../models/patrocinador');
const routers = express.Router();
// const jwt = require('jsonwebtoken');
// const PatrocinadorDAO = require('../models/patrocinadorDAO');
// const Utils = require('../helpers/utils');
// const segredo = "Solidariedade";

// routers.get('/', (req, res) => {
//     if (req.cookies.token) {
//         res.redirect('/')
//     } else {
//         res.send('nop')
//     }
// })

// routers.post('/auth', (req, res) => {
//     const patrocinador = new Patrocinador(req.body);
//     Patrocinador.setarSenha(req.body.senha);
//     new PatrocinadorDAO().buscaPorpatrocinadorESenha(patrocinador, (resposta) => {

//         if (resposta.length > 0) {
//             const token = jwt.sign({
//                 senha: Utils.criptografa('' + resposta[0].senha),
//                 nome: resposta[0].nome,
//                 email: resposta[0].email,
//                 CNPJ: resposta[0].CNPJ,
//                 cidade: resposta[0].cidade
//             }, segredo, {
//                 expiresIn: '1h'
//             });
//             res.cookie('token', token).redirect('/index');
//         } else {
//             res.status(301).redirect('/login');
//         }
//     });

// })

routers.get('/', (req, res) => {
    BancoUtils.select(Patrocinador.tabela, (r) => {
        res.json(r);
    })

});

routers.post('/', (req, res) => {
    const patro = new Patrocinador(req.body);
    patro.senha = patro.senha || "anjinho";
    patro.setarSenha(patro.senha);
    BancoUtils.insert(patro, Patrocinador.tabela, (r) => {
        res.json(r);
    });
})

routers.put('/', (req, res) => {
    const patroNovo = new Patrocinador(req.body);
    BancoUtils.put(patroNovo, Patrocinador.tabela, {
        key: 'id',
        value: patroNovo.id
    }, (r) => {
        res.json(r);
    });
})

routers.delete('/:id', (req, res) => {
    BancoUtils.delete(Patrocinador.tabela, {
        key: 'id',
        value: req.params.id
    }, (r) => {
        res.json(r);
    });
})


module.exports = routers;