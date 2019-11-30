const Utils = require('../helpers/utils');

class Patrocinador {
    static get tabela(){
        return 'tb_patrocinadores';
    }
    constructor(objPatrocinador){
        this.nome = '';
        this.id = '';
        this.email = '';
        this.CNPJ = '';
        Object.assign(this, objUsuario);
    }

    setarSenha(senha){
        this.Senha = Utils.criptografa(senha); 
    }
}

module.exports = Patrocinador;