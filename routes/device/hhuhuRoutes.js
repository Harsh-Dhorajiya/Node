const express = require('express');
const router = express.Router();
const hhuhuController = require("../../controller/device/hhuhuController");
const auth = require("../../middleware/auth");
router.route("/device/api/v1/hhuhu/create").post(auth(...[ 'createByUserInDevicePlatform', 'createByAdminInDevicePlatform' ]),hhuhuController.addHhuhu);
router.route("/device/api/v1/hhuhu/list").post(auth(...[ 'getAllByUserInDevicePlatform', 'getAllByAdminInDevicePlatform' ]),hhuhuController.findAllHhuhu);
router.route("/device/api/v1/hhuhu/:id").get(auth(...[ 'getByUserInDevicePlatform', 'getByAdminInDevicePlatform' ]),hhuhuController.getHhuhu);
router.route("/device/api/v1/hhuhu/count").post(auth(...[ 'getCountByUserInDevicePlatform', 'getCountByAdminInDevicePlatform' ]),hhuhuController.getHhuhuCount);
router.route("/device/api/v1/hhuhu/aggregate").post(auth(...[
  'aggregateByUserInDevicePlatform',
  'aggregateByAdminInDevicePlatform'
]),hhuhuController.getHhuhuByAggregate);
router.route("/device/api/v1/hhuhu/update/:id").put(auth(...[ 'updateByUserInDevicePlatform', 'updateByAdminInDevicePlatform' ]),hhuhuController.updateHhuhu);    
router.route("/device/api/v1/hhuhu/partial-update/:id").put(auth(...[
  'partialUpdateByUserInDevicePlatform',
  'partialUpdateByAdminInDevicePlatform'
]),hhuhuController.partialUpdateHhuhu);
router.route("/device/api/v1/hhuhu/softDelete/:id").put(auth(...[
  'softDeleteByUserInDevicePlatform',
  'softDeleteByAdminInDevicePlatform'
]),hhuhuController.softDeleteHhuhu);
router.route("/device/api/v1/hhuhu/addBulk").post(auth(...[ 'addBulkByUserInDevicePlatform', 'addBulkByAdminInDevicePlatform' ]),hhuhuController.bulkInsertHhuhu);
router.route("/device/api/v1/hhuhu/updateBulk").put(auth(...[
  'updateBulkByUserInDevicePlatform',
  'updateBulkByAdminInDevicePlatform'
]),hhuhuController.bulkUpdateHhuhu);

module.exports = router;
