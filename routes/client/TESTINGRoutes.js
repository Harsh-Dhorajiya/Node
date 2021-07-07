const express = require('express');
const router = express.Router();
const TESTINGController = require("../../controller/client/TESTINGController");
const auth = require("../../middleware/auth");
router.route("/client/api/v1/TESTING/create").post(auth(...[ 'createByUserInClientPlatform', 'createByAdminInClientPlatform' ]),TESTINGController.addTESTING);
router.route("/client/api/v1/TESTING/list").post(auth(...[ 'getAllByUserInClientPlatform', 'getAllByAdminInClientPlatform' ]),TESTINGController.findAllTESTING);
router.route("/client/api/v1/TESTING/:id").get(auth(...[ 'getByUserInClientPlatform', 'getByAdminInClientPlatform' ]),TESTINGController.getTESTING);
router.route("/client/api/v1/TESTING/count").post(auth(...[ 'getCountByUserInClientPlatform', 'getCountByAdminInClientPlatform' ]),TESTINGController.getTESTINGCount);
router.route("/client/api/v1/TESTING/aggregate").post(auth(...[
  'aggregateByUserInClientPlatform',
  'aggregateByAdminInClientPlatform'
]),TESTINGController.getTESTINGByAggregate);
router.route("/client/api/v1/TESTING/update/:id").put(auth(...[ 'updateByUserInClientPlatform', 'updateByAdminInClientPlatform' ]),TESTINGController.updateTESTING);    
router.route("/client/api/v1/TESTING/partial-update/:id").put(auth(...[
  'partialUpdateByUserInClientPlatform',
  'partialUpdateByAdminInClientPlatform'
]),TESTINGController.partialUpdateTESTING);
router.route("/client/api/v1/TESTING/softDelete/:id").put(auth(...[
  'softDeleteByUserInClientPlatform',
  'softDeleteByAdminInClientPlatform'
]),TESTINGController.softDeleteTESTING);
router.route("/client/api/v1/TESTING/addBulk").post(auth(...[ 'addBulkByUserInClientPlatform', 'addBulkByAdminInClientPlatform' ]),TESTINGController.bulkInsertTESTING);
router.route("/client/api/v1/TESTING/updateBulk").put(auth(...[
  'updateBulkByUserInClientPlatform',
  'updateBulkByAdminInClientPlatform'
]),TESTINGController.bulkUpdateTESTING);
router.route("/client/api/v1/TESTING/delete/:id").delete(auth(...[ 'deleteByUserInClientPlatform', 'deleteByAdminInClientPlatform' ]),TESTINGController.deleteTESTING);

module.exports = router;
