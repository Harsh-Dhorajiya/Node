const express =  require("express");
const router =  express.Router();
router.use("/client/auth",require("./auth"));
router.use(require("./TESTINGRoutes"));
router.use(require("./aswqaswqqRoutes"));
router.use(require("./hhuhuRoutes"));
router.use(require("./userRoutes"));

module.exports = router;
