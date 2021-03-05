const router = require("express").Router();

const c = require("../controller/videogames.controller");

router.get("/get/:id", c.get);
router.get("/all", c.all);
router.get("/add/:name", c.add);
router.get("/load", c.load);

module.exports = router;
