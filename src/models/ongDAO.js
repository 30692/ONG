const con = require('../helpers/banco');

class ongDAO {
    buscaPorongESenha(ong, cb) {
        const sql = "select * from tb_usuarios where id=? and senha=?";
        con.query(sql, [ong.id, ong.senha], (err, res) => {
            if (err) throw err;
            else cb(res);
        });
    }
}

module.exports = ongDAO;