const Utils = require('../helpers/utils');

class Usuario {
    static get tabela(){
        return 'tb_usuario';
    }
    constructor(objUsuario){
        this.Nome_usuario = '';
        this.ID_usuario = '';
        this.Foto_usuario = '';
        this.Email_usuario = '';
        Object.assign(this, objUsuario);
    }

    setarSenha(senha){
        this.Senha_usuario = Utils.criptografa(senha); 
    }
}

module.exports = Usuario;