const express = require('express');
const BancoUtils = require('../helpers/bancoUtils');
const Ong = require('../models/ong');
const routers = express.Router();
const ongDAO = require('../models/ongDAO');
const Utils = require('../helpers/utils');
const segredo = "AluninhoFeliz";
const jwt = require('jsonwebtoken');


routers.post('/auth', (req, res) => {
    const ong = new ong(req.body);
    ong.setarSenha(req.body.senha);
    new ongDAO().buscaPorongESenha(ong, (resposta) => {
        if (resposta.length > 0) {
            const token = jwt.sign({
                id: Utils.criptografa('' + resposta[0].id),
                nome: resposta[0].nome,
                nivel: resposta[0].admin
            }, segredo, {
                expiresIn: '1h'
            });
            res.cookie('token', token).redirect('/index');
            res.json(token);
        } else {
            res.status(301).redirect('/login');
        }
    });

})

routers.get('/autocompleta', (req, res) => {
    new ongDAO().autocompleta(req.query.valor, (resposta) => {
        res.json(resposta)
    })

})

routers.get('/', (req, res) => {
    BancoUtils.select(Ong.tabela, (ongs) => {
        res.json(ongs);
    })

});

routers.post('/', (req, res) => {
    const ong = new Ong(req.body);
    ong.senha = ong.senha || "anjinho";
    ong.setarSenha(ong.senha);
    BancoUtils.insert(ong, Ong.tabela, (r) => {
        res.json(r);
    });
})

routers.put('/', (req, res) => {
    const ongNovo = new Ong(req.body);
    BancoUtils.put(ongNovo, Ong.tabela, {
        key: 'id',
        value: ongNovo.id
    }, (r) => {
        res.json(r);
    });
})

routers.delete('/:id', (req, res) => {
    BancoUtils.delete(Ong.tabela, {
        key: 'id',
        value: req.params.id
    }, (r) => {
        res.json(r);
    });
})


module.exports = routers;