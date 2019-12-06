const Utils = require('../helpers/utils');

class Usuario {
    static get tabela() {
        return 'tb_ongs';
    }
    constructor(objOng) {
        this.CNPJ = '';
        this.email = '';
        this.senha = '';
        this.nome = '';
        this.dados_bancarios = '';
        this.setor = '';
        this.cidade = '';
        Object.assign(this, objOng);
    }

    setarSenha(senha) {
        this.senha = Utils.criptografa(senha);
    }
}

module.exports = Usuario;