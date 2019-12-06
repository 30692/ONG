const Utils = require('../helpers/utils');

class Patrocinador {
    static get tabela() {
        return 'tb_patrocinadores';
    }
    constructor(objPatrocinador) {
        this.nome = '';
        this.email = '';
        this.CNPJ = '';
        this.senha = ''
        this.cidade = '';
        Object.assign(this, objPatrocinador);
    }

    setarSenha(senha) {
        this.senha = Utils.criptografa(senha);
    }
}

module.exports = Patrocinador;