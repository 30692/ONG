const Utils = require('../helpers/utils');

class Usuario {
    static get tabela(){
        return 'tb_ongs';
    }
    constructor(obj){
        this.CNPJ = '';
        this.id = '';
        this.DadosBancarios = '';
        this.email = '';
        this.nome = '';
        this.setor = '';
        Object.assign(this, objUsuario);
    }

    setarSenha(senha){
        this.Senha = Utils.criptografa(senha); 
    }
}

module.exports = Usuario;