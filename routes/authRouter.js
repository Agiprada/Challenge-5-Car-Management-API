const router = require("express").Router();

const Authenticate = require("../middlewares/authenticate");
const Auth = require("../controllers/authController");
const Role = require("../middlewares/checkRole");

router.post("/register", Auth.register);
router.post("/login", Auth.login);

router.post("/login/superadmin", Auth.login);

router.post("/create/admin", Authenticate, Auth.createAdmin);
//router.get("/me", Authenticate, Auth.Authenticate);

module.exports = router;
