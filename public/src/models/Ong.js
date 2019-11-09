const Utils = require('../helpers/utils');

class Usuario {
    static get tabela(){
        return 'tb_Ong';
    }
    constructor(objOng){
        this.CNPJ_Ong = '';
        this.ID_Ong = '';
        this.DadosBancarios_Ong = '';
        this.Email_usuario = '';
        this.Nome_Ong = '';
        Object.assign(this, objUsuario);
    }

    setarSenha(senha){
        this.Senha_Ong = Utils.criptografa(senha); 
    }
}

module.exports = Ong;