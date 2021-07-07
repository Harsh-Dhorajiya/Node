const express = require('express');
const router = express.Router();
const aswqaswqqController = require("../../controller/device/aswqaswqqController");
const auth = require("../../middleware/auth");
router.route("/device/api/v1/aswqaswqq/create").post(auth(...[ 'createByUserInDevicePlatform', 'createByAdminInDevicePlatform' ]),aswqaswqqController.addAswqaswqq);
router.route("/device/api/v1/aswqaswqq/list").post(auth(...[ 'getAllByUserInDevicePlatform', 'getAllByAdminInDevicePlatform' ]),aswqaswqqController.findAllAswqaswqq);
router.route("/device/api/v1/aswqaswqq/:id").get(auth(...[ 'getByUserInDevicePlatform', 'getByAdminInDevicePlatform' ]),aswqaswqqController.getAswqaswqq);
router.route("/device/api/v1/aswqaswqq/count").post(auth(...[ 'getCountByUserInDevicePlatform', 'getCountByAdminInDevicePlatform' ]),aswqaswqqController.getAswqaswqqCount);
router.route("/device/api/v1/aswqaswqq/aggregate").post(auth(...[
  'aggregateByUserInDevicePlatform',
  'aggregateByAdminInDevicePlatform'
]),aswqaswqqController.getAswqaswqqByAggregate);
router.route("/device/api/v1/aswqaswqq/update/:id").put(auth(...[ 'updateByUserInDevicePlatform', 'updateByAdminInDevicePlatform' ]),aswqaswqqController.updateAswqaswqq);    
router.route("/device/api/v1/aswqaswqq/partial-update/:id").put(auth(...[
  'partialUpdateByUserInDevicePlatform',
  'partialUpdateByAdminInDevicePlatform'
]),aswqaswqqController.partialUpdateAswqaswqq);
router.route("/device/api/v1/aswqaswqq/softDelete/:id").put(auth(...[
  'softDeleteByUserInDevicePlatform',
  'softDeleteByAdminInDevicePlatform'
]),aswqaswqqController.softDeleteAswqaswqq);
router.route("/device/api/v1/aswqaswqq/addBulk").post(auth(...[ 'addBulkByUserInDevicePlatform', 'addBulkByAdminInDevicePlatform' ]),aswqaswqqController.bulkInsertAswqaswqq);
router.route("/device/api/v1/aswqaswqq/updateBulk").put(auth(...[
  'updateBulkByUserInDevicePlatform',
  'updateBulkByAdminInDevicePlatform'
]),aswqaswqqController.bulkUpdateAswqaswqq);

module.exports = router;
