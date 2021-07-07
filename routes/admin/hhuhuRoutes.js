const express = require('express');
const router = express.Router();
const hhuhuController = require("../../controller/admin/hhuhuController");
const auth = require("../../middleware/auth");
router.route("/admin/hhuhu/create").post(auth(...[ 'createByUserInAdminPlatform', 'createByAdminInAdminPlatform' ]),hhuhuController.addHhuhu);
router.route("/admin/hhuhu/list").post(auth(...[ 'getAllByUserInAdminPlatform', 'getAllByAdminInAdminPlatform' ]),hhuhuController.findAllHhuhu);
router.route("/admin/hhuhu/:id").get(auth(...[ 'getByUserInAdminPlatform', 'getByAdminInAdminPlatform' ]),hhuhuController.getHhuhu);
router.route("/admin/hhuhu/count").post(auth(...[ 'getCountByUserInAdminPlatform', 'getCountByAdminInAdminPlatform' ]),hhuhuController.getHhuhuCount);
router.route("/admin/hhuhu/aggregate").post(auth(...[ 'aggregateByUserInAdminPlatform', 'aggregateByAdminInAdminPlatform' ]),hhuhuController.getHhuhuByAggregate);
router.route("/admin/hhuhu/update/:id").put(auth(...[ 'updateByUserInAdminPlatform', 'updateByAdminInAdminPlatform' ]),hhuhuController.updateHhuhu);    
router.route("/admin/hhuhu/partial-update/:id").put(auth(...[
  'partialUpdateByUserInAdminPlatform',
  'partialUpdateByAdminInAdminPlatform'
]),hhuhuController.partialUpdateHhuhu);
router.route("/admin/hhuhu/softDelete/:id").put(auth(...[
  'softDeleteByUserInAdminPlatform',
  'softDeleteByAdminInAdminPlatform'
]),hhuhuController.softDeleteHhuhu);
router.route("/admin/hhuhu/addBulk").post(auth(...[ 'addBulkByUserInAdminPlatform', 'addBulkByAdminInAdminPlatform' ]),hhuhuController.bulkInsertHhuhu);
router.route("/admin/hhuhu/updateBulk").put(auth(...[
  'updateBulkByUserInAdminPlatform',
  'updateBulkByAdminInAdminPlatform'
]),hhuhuController.bulkUpdateHhuhu);

module.exports = router;
