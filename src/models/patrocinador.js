const Utils = require('../helpers/utils');

class Patrocinador {
    static get tabela(){
        return 'tb_patrocinador';
    }
    constructor(objPatrocinador){
        this.Nome_Patrocinador = '';
        this.ID_Patrocinador = '';
        this.Email_Patrocinador = '';
        this.CNPJ_Patrocinador = '';
        Object.assign(this, objUsuario);
    }

    setarSenha(senha){
        this.Senha_Patrocinador = Utils.criptografa(senha); 
    }
}

module.exports = Patrocinador;