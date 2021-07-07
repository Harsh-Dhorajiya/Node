const express = require('express');
const router = express.Router();
const userController = require("../../controller/desktop/userController");
const auth = require("../../middleware/auth");
router.route("/desktop/api/v1/user/create").post(userController.addUser);
router.route("/desktop/api/v1/user/list").post(auth(...[ 'getAllByUserInDesktopPlatform', 'getAllByAdminInDesktopPlatform' ]),userController.findAllUser);
router.route("/desktop/api/v1/user/:id").get(auth(...[ 'getByUserInDesktopPlatform', 'getByAdminInDesktopPlatform' ]),userController.getUser);
router.route("/desktop/api/v1/user/count").post(auth(...[
  'getCountByUserInDesktopPlatform',
  'getCountByAdminInDesktopPlatform'
]),userController.getUserCount);
router.route("/desktop/api/v1/user/aggregate").post(auth(...[
  'aggregateByUserInDesktopPlatform',
  'aggregateByAdminInDesktopPlatform'
]),userController.getUserByAggregate);
router.route("/desktop/api/v1/user/update/:id").put(auth(...[ 'updateByUserInDesktopPlatform', 'updateByAdminInDesktopPlatform' ]),userController.updateUser);    
router.route("/desktop/api/v1/user/partial-update/:id").put(auth(...[
  'partialUpdateByUserInDesktopPlatform',
  'partialUpdateByAdminInDesktopPlatform'
]),userController.partialUpdateUser);
router.route("/desktop/api/v1/user/softDelete/:id").put(auth(...[
  'softDeleteByUserInDesktopPlatform',
  'softDeleteByAdminInDesktopPlatform'
]),userController.softDeleteUser);
router.route("/desktop/api/v1/user/change-password").put(auth(...[
  'changePasswordByUserInDesktopPlatform',
  'changePasswordByAdminInDesktopPlatform'
]),userController.changePassword);

module.exports = router;
