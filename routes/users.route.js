const router = require("express").Router();

const cc = require("../controller/users.callback.controller");
const cp = require("../controller/users.promise.controller");
const c = require("../controller/users.controller");

router.get("/callback/all", cc.all);
router.get("/promise/all", cp.all);
router.get("/async/await/all", c.all);

router.get("/all", c.all);
router.get("/get/:id", c.get);
router.get("/add/:login/:name", c.add);
router.get("/delete/:id", c.deleteUser);

module.exports = router;
