const express = require('express');
const router = express.Router();
const TESTINGController = require("../../controller/desktop/TESTINGController");
const auth = require("../../middleware/auth");
router.route("/desktop/api/v1/TESTING/create").post(auth(...[ 'createByUserInDesktopPlatform', 'createByAdminInDesktopPlatform' ]),TESTINGController.addTESTING);
router.route("/desktop/api/v1/TESTING/list").post(auth(...[ 'getAllByUserInDesktopPlatform', 'getAllByAdminInDesktopPlatform' ]),TESTINGController.findAllTESTING);
router.route("/desktop/api/v1/TESTING/:id").get(auth(...[ 'getByUserInDesktopPlatform', 'getByAdminInDesktopPlatform' ]),TESTINGController.getTESTING);
router.route("/desktop/api/v1/TESTING/count").post(auth(...[
  'getCountByUserInDesktopPlatform',
  'getCountByAdminInDesktopPlatform'
]),TESTINGController.getTESTINGCount);
router.route("/desktop/api/v1/TESTING/aggregate").post(auth(...[
  'aggregateByUserInDesktopPlatform',
  'aggregateByAdminInDesktopPlatform'
]),TESTINGController.getTESTINGByAggregate);
router.route("/desktop/api/v1/TESTING/update/:id").put(auth(...[ 'updateByUserInDesktopPlatform', 'updateByAdminInDesktopPlatform' ]),TESTINGController.updateTESTING);    
router.route("/desktop/api/v1/TESTING/partial-update/:id").put(auth(...[
  'partialUpdateByUserInDesktopPlatform',
  'partialUpdateByAdminInDesktopPlatform'
]),TESTINGController.partialUpdateTESTING);
router.route("/desktop/api/v1/TESTING/softDelete/:id").put(auth(...[
  'softDeleteByUserInDesktopPlatform',
  'softDeleteByAdminInDesktopPlatform'
]),TESTINGController.softDeleteTESTING);
router.route("/desktop/api/v1/TESTING/addBulk").post(auth(...[ 'addBulkByUserInDesktopPlatform', 'addBulkByAdminInDesktopPlatform' ]),TESTINGController.bulkInsertTESTING);
router.route("/desktop/api/v1/TESTING/updateBulk").put(auth(...[
  'updateBulkByUserInDesktopPlatform',
  'updateBulkByAdminInDesktopPlatform'
]),TESTINGController.bulkUpdateTESTING);
router.route("/desktop/api/v1/TESTING/delete/:id").delete(auth(...[ 'deleteByUserInDesktopPlatform', 'deleteByAdminInDesktopPlatform' ]),TESTINGController.deleteTESTING);

module.exports = router;
