const express = require('express');
const router = express.Router();
const hhuhuController = require("../../controller/client/hhuhuController");
const auth = require("../../middleware/auth");
router.route("/client/api/v1/hhuhu/create").post(auth(...[ 'createByUserInClientPlatform', 'createByAdminInClientPlatform' ]),hhuhuController.addHhuhu);
router.route("/client/api/v1/hhuhu/list").post(auth(...[ 'getAllByUserInClientPlatform', 'getAllByAdminInClientPlatform' ]),hhuhuController.findAllHhuhu);
router.route("/client/api/v1/hhuhu/:id").get(auth(...[ 'getByUserInClientPlatform', 'getByAdminInClientPlatform' ]),hhuhuController.getHhuhu);
router.route("/client/api/v1/hhuhu/count").post(auth(...[ 'getCountByUserInClientPlatform', 'getCountByAdminInClientPlatform' ]),hhuhuController.getHhuhuCount);
router.route("/client/api/v1/hhuhu/aggregate").post(auth(...[
  'aggregateByUserInClientPlatform',
  'aggregateByAdminInClientPlatform'
]),hhuhuController.getHhuhuByAggregate);
router.route("/client/api/v1/hhuhu/update/:id").put(auth(...[ 'updateByUserInClientPlatform', 'updateByAdminInClientPlatform' ]),hhuhuController.updateHhuhu);    
router.route("/client/api/v1/hhuhu/partial-update/:id").put(auth(...[
  'partialUpdateByUserInClientPlatform',
  'partialUpdateByAdminInClientPlatform'
]),hhuhuController.partialUpdateHhuhu);
router.route("/client/api/v1/hhuhu/softDelete/:id").put(auth(...[
  'softDeleteByUserInClientPlatform',
  'softDeleteByAdminInClientPlatform'
]),hhuhuController.softDeleteHhuhu);
router.route("/client/api/v1/hhuhu/addBulk").post(auth(...[ 'addBulkByUserInClientPlatform', 'addBulkByAdminInClientPlatform' ]),hhuhuController.bulkInsertHhuhu);
router.route("/client/api/v1/hhuhu/updateBulk").put(auth(...[
  'updateBulkByUserInClientPlatform',
  'updateBulkByAdminInClientPlatform'
]),hhuhuController.bulkUpdateHhuhu);

module.exports = router;
