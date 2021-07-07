const express = require('express');
const router = express.Router();
const TESTINGController = require("../../controller/device/TESTINGController");
const auth = require("../../middleware/auth");
router.route("/device/api/v1/TESTING/create").post(auth(...[ 'createByUserInDevicePlatform', 'createByAdminInDevicePlatform' ]),TESTINGController.addTESTING);
router.route("/device/api/v1/TESTING/list").post(auth(...[ 'getAllByUserInDevicePlatform', 'getAllByAdminInDevicePlatform' ]),TESTINGController.findAllTESTING);
router.route("/device/api/v1/TESTING/:id").get(auth(...[ 'getByUserInDevicePlatform', 'getByAdminInDevicePlatform' ]),TESTINGController.getTESTING);
router.route("/device/api/v1/TESTING/count").post(auth(...[ 'getCountByUserInDevicePlatform', 'getCountByAdminInDevicePlatform' ]),TESTINGController.getTESTINGCount);
router.route("/device/api/v1/TESTING/aggregate").post(auth(...[
  'aggregateByUserInDevicePlatform',
  'aggregateByAdminInDevicePlatform'
]),TESTINGController.getTESTINGByAggregate);
router.route("/device/api/v1/TESTING/update/:id").put(auth(...[ 'updateByUserInDevicePlatform', 'updateByAdminInDevicePlatform' ]),TESTINGController.updateTESTING);    
router.route("/device/api/v1/TESTING/partial-update/:id").put(auth(...[
  'partialUpdateByUserInDevicePlatform',
  'partialUpdateByAdminInDevicePlatform'
]),TESTINGController.partialUpdateTESTING);
router.route("/device/api/v1/TESTING/softDelete/:id").put(auth(...[
  'softDeleteByUserInDevicePlatform',
  'softDeleteByAdminInDevicePlatform'
]),TESTINGController.softDeleteTESTING);
router.route("/device/api/v1/TESTING/addBulk").post(auth(...[ 'addBulkByUserInDevicePlatform', 'addBulkByAdminInDevicePlatform' ]),TESTINGController.bulkInsertTESTING);
router.route("/device/api/v1/TESTING/updateBulk").put(auth(...[
  'updateBulkByUserInDevicePlatform',
  'updateBulkByAdminInDevicePlatform'
]),TESTINGController.bulkUpdateTESTING);
router.route("/device/api/v1/TESTING/delete/:id").delete(auth(...[ 'deleteByUserInDevicePlatform', 'deleteByAdminInDevicePlatform' ]),TESTINGController.deleteTESTING);

module.exports = router;
