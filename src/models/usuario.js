const Utils = require('../helpers/utils');

class Usuario {
    static get tabela() {
        return 'tb_usuarios';
    }
    constructor(objUsuario) {
        this.email = '';
        this.nome = '';
        this.cidade = '';
        Object.assign(this, objUsuario);
    }

    setarSenha(senha) {
        this.senha = Utils.criptografa(senha);
    }
}

module.exports = Usuario;