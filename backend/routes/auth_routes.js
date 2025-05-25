const forgotPassword = require("../controllers/forgotPassword");
const login = require("../controllers/login");
const register = require("../controllers/register");

const router = require("express").Router();

router.post('/signup', register);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', require("../controllers/resetPassword"));

module.exports = router;