const express =  require("express");
const router =  express.Router();
router.use("/desktop/auth",require("./auth"));
router.use(require("./aswqaswqqRoutes"));
router.use(require("./hhuhuRoutes"));
router.use(require("./userRoutes"));

module.exports = router;
