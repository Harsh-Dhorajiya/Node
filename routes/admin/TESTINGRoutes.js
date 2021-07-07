const express = require('express');
const router = express.Router();
const TESTINGController = require("../../controller/admin/TESTINGController");
const auth = require("../../middleware/auth");
router.route("/admin/TESTING/create").post(auth(...[ 'createByUserInAdminPlatform', 'createByAdminInAdminPlatform' ]),TESTINGController.addTESTING);
router.route("/admin/TESTING/list").post(auth(...[ 'getAllByUserInAdminPlatform', 'getAllByAdminInAdminPlatform' ]),TESTINGController.findAllTESTING);
router.route("/admin/TESTING/:id").get(auth(...[ 'getByUserInAdminPlatform', 'getByAdminInAdminPlatform' ]),TESTINGController.getTESTING);
router.route("/admin/TESTING/count").post(auth(...[ 'getCountByUserInAdminPlatform', 'getCountByAdminInAdminPlatform' ]),TESTINGController.getTESTINGCount);
router.route("/admin/TESTING/aggregate").post(auth(...[ 'aggregateByUserInAdminPlatform', 'aggregateByAdminInAdminPlatform' ]),TESTINGController.getTESTINGByAggregate);
router.route("/admin/TESTING/update/:id").put(auth(...[ 'updateByUserInAdminPlatform', 'updateByAdminInAdminPlatform' ]),TESTINGController.updateTESTING);    
router.route("/admin/TESTING/partial-update/:id").put(auth(...[
  'partialUpdateByUserInAdminPlatform',
  'partialUpdateByAdminInAdminPlatform'
]),TESTINGController.partialUpdateTESTING);
router.route("/admin/TESTING/softDelete/:id").put(auth(...[
  'softDeleteByUserInAdminPlatform',
  'softDeleteByAdminInAdminPlatform'
]),TESTINGController.softDeleteTESTING);
router.route("/admin/TESTING/addBulk").post(auth(...[ 'addBulkByUserInAdminPlatform', 'addBulkByAdminInAdminPlatform' ]),TESTINGController.bulkInsertTESTING);
router.route("/admin/TESTING/updateBulk").put(auth(...[
  'updateBulkByUserInAdminPlatform',
  'updateBulkByAdminInAdminPlatform'
]),TESTINGController.bulkUpdateTESTING);
router.route("/admin/TESTING/delete/:id").delete(auth(...[ 'deleteByUserInAdminPlatform', 'deleteByAdminInAdminPlatform' ]),TESTINGController.deleteTESTING);

module.exports = router;
