const { connection: conn } = require("../database/connection");

async function all(req, res, next) {
  console.log("all users");
  const [rows, fields] = await conn
    .promise()
    .query(`SELECT id, login, name FROM users`);
  if (rows.length === 0) return next({ status: 404, error: `users not found` });
  //return res.json(rows.map(({ id, name }) => ({ id, name })));
  return res.json(rows);
}

async function get(req, res, next) {
  const id = req.params.id;
  console.log("get user", id);
  try {
    const [
      rows,
      fields,
    ] = await conn
      .promise()
      .query(`SELECT id, login, name FROM users WHERE id = ?`, [id]);
    if (rows.length === 0) return next({ error: `user (${id}) not found` });
    return res.json(rows[0]);
  } catch (ex) {
    return next(ex);
  }
}

async function add(req, res, next) {
  const obj = {
    login: req.params.login,
    name: req.params.name,
    password: "xxx",
  };

  try {
    const [resultado] = await conn
      .promise()
      .query("INSERT INTO users SET ?", obj);

    obj.id = resultado.insertId;
    delete obj.password;

    return res.json(obj);
  } catch (ex) {
    return next(ex);
  }
}

async function deleteUser(req, res, next) {
  var idUser = req.params.id;

  try {
    const [resultado2] = await conn
      .promise()
      .query("DELETE FROM scores WHERE user = ?", idUser);

    const [resultado] = await conn
      .promise()
      .query("DELETE FROM users WHERE id = ?", idUser);

    return res.json(resultado);
  } catch (ex) {
    return next(ex);
  }
}

module.exports = { all, get, add, deleteUser };
