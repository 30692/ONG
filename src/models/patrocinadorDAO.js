const con = require('../helpers/banco');

class patrocinadorDAO {
   buscaPorpatrocinadorESenha(patrocinador, cb){
       const sql = "select * from tb_usuarios where id=? and senha=?";
       con.query(sql, [patrocinador.id, patrocinador.senha], (err,res) => {
            if(err) throw err;
            else cb(res);


       });
   }
}

module.exports = patrocinadorDAO;