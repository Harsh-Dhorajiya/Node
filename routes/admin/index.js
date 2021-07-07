const express =  require("express");
const router =  express.Router();
router.use("/admin/auth",require("./auth"));
router.use(require("./TESTINGRoutes"));
router.use(require("./aswqaswqqRoutes"));
router.use(require("./hhuhuRoutes"));
router.use(require("./userRoutes"));

module.exports = router;
