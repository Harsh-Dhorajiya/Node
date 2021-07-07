const express = require('express');
const router = express.Router();
const aswqaswqqController = require("../../controller/desktop/aswqaswqqController");
const auth = require("../../middleware/auth");
router.route("/desktop/api/v1/aswqaswqq/create").post(auth(...[ 'createByUserInDesktopPlatform', 'createByAdminInDesktopPlatform' ]),aswqaswqqController.addAswqaswqq);
router.route("/desktop/api/v1/aswqaswqq/list").post(auth(...[ 'getAllByUserInDesktopPlatform', 'getAllByAdminInDesktopPlatform' ]),aswqaswqqController.findAllAswqaswqq);
router.route("/desktop/api/v1/aswqaswqq/:id").get(auth(...[ 'getByUserInDesktopPlatform', 'getByAdminInDesktopPlatform' ]),aswqaswqqController.getAswqaswqq);
router.route("/desktop/api/v1/aswqaswqq/count").post(auth(...[
  'getCountByUserInDesktopPlatform',
  'getCountByAdminInDesktopPlatform'
]),aswqaswqqController.getAswqaswqqCount);
router.route("/desktop/api/v1/aswqaswqq/aggregate").post(auth(...[
  'aggregateByUserInDesktopPlatform',
  'aggregateByAdminInDesktopPlatform'
]),aswqaswqqController.getAswqaswqqByAggregate);
router.route("/desktop/api/v1/aswqaswqq/update/:id").put(auth(...[ 'updateByUserInDesktopPlatform', 'updateByAdminInDesktopPlatform' ]),aswqaswqqController.updateAswqaswqq);    
router.route("/desktop/api/v1/aswqaswqq/partial-update/:id").put(auth(...[
  'partialUpdateByUserInDesktopPlatform',
  'partialUpdateByAdminInDesktopPlatform'
]),aswqaswqqController.partialUpdateAswqaswqq);
router.route("/desktop/api/v1/aswqaswqq/softDelete/:id").put(auth(...[
  'softDeleteByUserInDesktopPlatform',
  'softDeleteByAdminInDesktopPlatform'
]),aswqaswqqController.softDeleteAswqaswqq);
router.route("/desktop/api/v1/aswqaswqq/addBulk").post(auth(...[ 'addBulkByUserInDesktopPlatform', 'addBulkByAdminInDesktopPlatform' ]),aswqaswqqController.bulkInsertAswqaswqq);
router.route("/desktop/api/v1/aswqaswqq/updateBulk").put(auth(...[
  'updateBulkByUserInDesktopPlatform',
  'updateBulkByAdminInDesktopPlatform'
]),aswqaswqqController.bulkUpdateAswqaswqq);

module.exports = router;
