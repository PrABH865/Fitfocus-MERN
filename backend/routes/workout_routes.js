const workoutGenerator = require("../controllers/workoutGenerator");

const router = require("express").Router();

router.post("/workout", workoutGenerator);

module.exports = router;