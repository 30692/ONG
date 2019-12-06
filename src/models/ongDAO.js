const con = require('../helpers/banco');

class ongDAO {
    buscaPorongESenha(ong, cb) {
        const sql = "select * from tb_ongs where id=? and senha=?";
        con.query(sql, [ong.id, ong.senha], (err, res) => {
            if (err) throw err;
            else cb(res);
        });
    }
    autocompleta(valor, cb) {
        const sql = "select * from tb_ongs where nome like ? ";
        con.query(sql, [valor + '%'], (err, res) => {
            if (err) throw err;
            else cb(res);
        })
    }

}

module.exports = ongDAO;