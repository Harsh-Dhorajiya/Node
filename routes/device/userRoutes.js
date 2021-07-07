const express = require('express');
const router = express.Router();
const userController = require("../../controller/device/userController");
const auth = require("../../middleware/auth");
router.route("/device/api/v1/user/create").post(userController.addUser);
router.route("/device/api/v1/user/list").post(auth(...[ 'getAllByUserInDevicePlatform', 'getAllByAdminInDevicePlatform' ]),userController.findAllUser);
router.route("/device/api/v1/user/:id").get(auth(...[ 'getByUserInDevicePlatform', 'getByAdminInDevicePlatform' ]),userController.getUser);
router.route("/device/api/v1/user/count").post(auth(...[ 'getCountByUserInDevicePlatform', 'getCountByAdminInDevicePlatform' ]),userController.getUserCount);
router.route("/device/api/v1/user/aggregate").post(auth(...[
  'aggregateByUserInDevicePlatform',
  'aggregateByAdminInDevicePlatform'
]),userController.getUserByAggregate);
router.route("/device/api/v1/user/update/:id").put(auth(...[ 'updateByUserInDevicePlatform', 'updateByAdminInDevicePlatform' ]),userController.updateUser);    
router.route("/device/api/v1/user/partial-update/:id").put(auth(...[
  'partialUpdateByUserInDevicePlatform',
  'partialUpdateByAdminInDevicePlatform'
]),userController.partialUpdateUser);
router.route("/device/api/v1/user/softDelete/:id").put(auth(...[
  'softDeleteByUserInDevicePlatform',
  'softDeleteByAdminInDevicePlatform'
]),userController.softDeleteUser);
router.route("/device/api/v1/user/change-password").put(auth(...[
  'changePasswordByUserInDevicePlatform',
  'changePasswordByAdminInDevicePlatform'
]),userController.changePassword);

module.exports = router;
