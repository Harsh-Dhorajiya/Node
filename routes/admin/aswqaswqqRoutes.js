const express = require('express');
const router = express.Router();
const aswqaswqqController = require("../../controller/admin/aswqaswqqController");
router.route("/admin/aswqaswqq/addBulk").post(aswqaswqqController.bulkInsertAswqaswqq);
router.route("/admin/aswqaswqq/updateBulk").put(aswqaswqqController.bulkUpdateAswqaswqq);
router.route("/admin/aswqaswqq/delete/:id").delete(aswqaswqqController.deleteAswqaswqq);

module.exports = router;
