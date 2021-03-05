const { connection: conn } = require('../database/connection');

async function all(req, res, next) {
    console.log("all users")
    const [rows, fields] = await conn.promise().query(`SELECT id, login, name FROM users`);
    if (rows.length === 0) return next({ status: 404, error: `users not found` });
    //return res.json(rows.map(({ id, name }) => ({ id, name })));
    return res.json(rows);
}

async function get(req, res, next) {
    const id = req.params.id
    console.log("get user", id)
    try {
        const [rows, fields] = await conn.promise().query(`SELECT id, login, name FROM users WHERE id = ?`, [id]);
        if (rows.length === 0) return next({ error: `user (${id}) not found` });
        return res.json(rows[0]);
    }
    catch (ex) {
        return next(ex);
    }
}

async function add(req, res, next) {
    return next({ error: "not implemented yet" })
}





module.exports = { all, get, add, }