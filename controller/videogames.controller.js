const { connection: conn } = require("../database/connection");

async function all(req, res, next) {
  next({ error: "Not implemented yet" });
}

async function get(req, res, next) {
  next({ error: "Not implemented yet" });
}

async function add(req, res, next) {
  next({ error: "Not implemented yet" });
}

async function load(req, res, next) {
  try {
    //const [rows, fields] = await conn.promise().query(`DELETE FROM videogames`);
    const [rows, fields] = await conn
      .promise()
      .query(`TRUNCATE TABLE videogames`);
  } catch (ex) {
    return next(ex);
  }

  const videojuegos = require("../mock").games;

  // await videojuegos
  //     .map(elem => ({ id: elem.id + 1, name: elem.nombre }))
  //     .forEach(async (v) => {
  //         try {
  //             const [rows, fields] = await conn.promise()
  //                 .query(`INSERT INTO videogames SET ?`, v);
  //         }
  //         catch (ex) {
  //             console.log(ex)
  //         }
  //     })

  // await videojuegos
  //     .forEach(async (elem) => {
  //         try {
  //             const v = {}
  //             if (elem.id) v.id = elem.id + 1
  //             v.name = elem.nombre
  //             const [rows, fields] = await conn.promise()
  //                 .query(`INSERT INTO videogames SET ?`, v);
  //         }
  //         catch (ex) {
  //             console.log(ex)
  //         }
  //     })

  // for (let i = 0; i < videojuegos.length; i++) {
  //     elem = videojuegos[i]
  //     try {
  //         const v = {}
  //         if (elem.id) v.id = elem.id + 1
  //         v.name = elem.nombre
  //         const [rows, fields] = await conn.promise()
  //             .query(`INSERT INTO videogames SET ?`, v);
  //     }
  //     catch (ex) {
  //         console.log(ex)
  //     }
  // }

  // console.time("map")
  // const videojuegosm = videojuegos.map(elem => {
  //     const v = {}
  //     if (elem.id) v.id = elem.id + 1
  //     v.name = elem.nombre
  //     return v
  // })
  // for (const elem of videojuegosm) {
  //     try {
  //         const [rows, fields] = await conn.promise()
  //             .query(`INSERT INTO videogames SET ?`, elem);
  //     }
  //     catch (ex) {
  //         console.log(ex)
  //     }
  // }
  // console.timeEnd("map")

  console.time("for");
  for (const elem of videojuegos) {
    try {
      const v = {};
      if (elem.id) v.id = elem.id + 1;
      v.name = elem.nombre;
      const [rows, fields] = await conn
        .promise()
        .query(`INSERT INTO videogames SET ?`, v);
    } catch (ex) {
      console.log(ex);
    }
  }
  console.timeEnd("for");

  res.json({ message: `${videojuegos.length} videogames loaded` });
}

module.exports = { all, get, add, load };
