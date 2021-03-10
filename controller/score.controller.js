const { connection: conn } = require('../database/connection');

async function puntua(req, res, next) {
  const user_id = req.params.id_user
  const videogame_id = req.params.id_videogame
  const score = req.params.score

  const obj = {
      user: user_id,
      videogame: videogame_id,
      punctuation: score,
  }

  try {
    const [rows, fields] = await conn.promise().query(`INSERT INTO punctuation SET ? ON DUPLICATE KEY UPDATE punctuation=?`, [obj, obj.punctuation]);
    return res.json(rows)
  }
  catch (ex) {
      return next(ex)
  }

}

module.exports = { puntua, }
