const express = require('express');
const router = express.Router();
const userController = require("../../controller/admin/userController");
const auth = require("../../middleware/auth");
router.route("/admin/user/create").post(userController.addUser);
router.route("/admin/user/list").post(auth(...[ 'getAllByUserInAdminPlatform', 'getAllByAdminInAdminPlatform' ]),userController.findAllUser);
router.route("/admin/user/:id").get(auth(...[ 'getByUserInAdminPlatform', 'getByAdminInAdminPlatform' ]),userController.getUser);
router.route("/admin/user/count").post(auth(...[ 'getCountByUserInAdminPlatform', 'getCountByAdminInAdminPlatform' ]),userController.getUserCount);
router.route("/admin/user/aggregate").post(auth(...[ 'aggregateByUserInAdminPlatform', 'aggregateByAdminInAdminPlatform' ]),userController.getUserByAggregate);
router.route("/admin/user/update/:id").put(auth(...[ 'updateByUserInAdminPlatform', 'updateByAdminInAdminPlatform' ]),userController.updateUser);    
router.route("/admin/user/partial-update/:id").put(auth(...[
  'partialUpdateByUserInAdminPlatform',
  'partialUpdateByAdminInAdminPlatform'
]),userController.partialUpdateUser);
router.route("/admin/user/softDelete/:id").put(auth(...[
  'softDeleteByUserInAdminPlatform',
  'softDeleteByAdminInAdminPlatform'
]),userController.softDeleteUser);
router.route("/admin/user/change-password").put(auth(...[
  'changePasswordByUserInAdminPlatform',
  'changePasswordByAdminInAdminPlatform'
]),userController.changePassword);

module.exports = router;
