const express = require('express');
const router = express.Router();
const hhuhuController = require("../../controller/desktop/hhuhuController");
const auth = require("../../middleware/auth");
router.route("/desktop/api/v1/hhuhu/create").post(auth(...[ 'createByUserInDesktopPlatform', 'createByAdminInDesktopPlatform' ]),hhuhuController.addHhuhu);
router.route("/desktop/api/v1/hhuhu/list").post(auth(...[ 'getAllByUserInDesktopPlatform', 'getAllByAdminInDesktopPlatform' ]),hhuhuController.findAllHhuhu);
router.route("/desktop/api/v1/hhuhu/:id").get(auth(...[ 'getByUserInDesktopPlatform', 'getByAdminInDesktopPlatform' ]),hhuhuController.getHhuhu);
router.route("/desktop/api/v1/hhuhu/count").post(auth(...[
  'getCountByUserInDesktopPlatform',
  'getCountByAdminInDesktopPlatform'
]),hhuhuController.getHhuhuCount);
router.route("/desktop/api/v1/hhuhu/aggregate").post(auth(...[
  'aggregateByUserInDesktopPlatform',
  'aggregateByAdminInDesktopPlatform'
]),hhuhuController.getHhuhuByAggregate);
router.route("/desktop/api/v1/hhuhu/update/:id").put(auth(...[ 'updateByUserInDesktopPlatform', 'updateByAdminInDesktopPlatform' ]),hhuhuController.updateHhuhu);    
router.route("/desktop/api/v1/hhuhu/partial-update/:id").put(auth(...[
  'partialUpdateByUserInDesktopPlatform',
  'partialUpdateByAdminInDesktopPlatform'
]),hhuhuController.partialUpdateHhuhu);
router.route("/desktop/api/v1/hhuhu/softDelete/:id").put(auth(...[
  'softDeleteByUserInDesktopPlatform',
  'softDeleteByAdminInDesktopPlatform'
]),hhuhuController.softDeleteHhuhu);
router.route("/desktop/api/v1/hhuhu/addBulk").post(auth(...[ 'addBulkByUserInDesktopPlatform', 'addBulkByAdminInDesktopPlatform' ]),hhuhuController.bulkInsertHhuhu);
router.route("/desktop/api/v1/hhuhu/updateBulk").put(auth(...[
  'updateBulkByUserInDesktopPlatform',
  'updateBulkByAdminInDesktopPlatform'
]),hhuhuController.bulkUpdateHhuhu);

module.exports = router;
