const express = require('express');
const router = express.Router();
const aswqaswqqController = require("../../controller/client/aswqaswqqController");
const auth = require("../../middleware/auth");
router.route("/client/api/v1/aswqaswqq/create").post(auth(...[ 'createByUserInClientPlatform', 'createByAdminInClientPlatform' ]),aswqaswqqController.addAswqaswqq);
router.route("/client/api/v1/aswqaswqq/list").post(auth(...[ 'getAllByUserInClientPlatform', 'getAllByAdminInClientPlatform' ]),aswqaswqqController.findAllAswqaswqq);
router.route("/client/api/v1/aswqaswqq/:id").get(auth(...[ 'getByUserInClientPlatform', 'getByAdminInClientPlatform' ]),aswqaswqqController.getAswqaswqq);
router.route("/client/api/v1/aswqaswqq/count").post(auth(...[ 'getCountByUserInClientPlatform', 'getCountByAdminInClientPlatform' ]),aswqaswqqController.getAswqaswqqCount);
router.route("/client/api/v1/aswqaswqq/aggregate").post(auth(...[
  'aggregateByUserInClientPlatform',
  'aggregateByAdminInClientPlatform'
]),aswqaswqqController.getAswqaswqqByAggregate);
router.route("/client/api/v1/aswqaswqq/update/:id").put(auth(...[ 'updateByUserInClientPlatform', 'updateByAdminInClientPlatform' ]),aswqaswqqController.updateAswqaswqq);    
router.route("/client/api/v1/aswqaswqq/partial-update/:id").put(auth(...[
  'partialUpdateByUserInClientPlatform',
  'partialUpdateByAdminInClientPlatform'
]),aswqaswqqController.partialUpdateAswqaswqq);
router.route("/client/api/v1/aswqaswqq/softDelete/:id").put(auth(...[
  'softDeleteByUserInClientPlatform',
  'softDeleteByAdminInClientPlatform'
]),aswqaswqqController.softDeleteAswqaswqq);
router.route("/client/api/v1/aswqaswqq/addBulk").post(auth(...[ 'addBulkByUserInClientPlatform', 'addBulkByAdminInClientPlatform' ]),aswqaswqqController.bulkInsertAswqaswqq);
router.route("/client/api/v1/aswqaswqq/updateBulk").put(auth(...[
  'updateBulkByUserInClientPlatform',
  'updateBulkByAdminInClientPlatform'
]),aswqaswqqController.bulkUpdateAswqaswqq);

module.exports = router;
