const express = require('express');
const router = express.Router();
const userController = require("../../controller/client/userController");
const auth = require("../../middleware/auth");
router.route("/client/api/v1/user/create").post(userController.addUser);
router.route("/client/api/v1/user/list").post(auth(...[ 'getAllByUserInClientPlatform', 'getAllByAdminInClientPlatform' ]),userController.findAllUser);
router.route("/client/api/v1/user/:id").get(auth(...[ 'getByUserInClientPlatform', 'getByAdminInClientPlatform' ]),userController.getUser);
router.route("/client/api/v1/user/count").post(auth(...[ 'getCountByUserInClientPlatform', 'getCountByAdminInClientPlatform' ]),userController.getUserCount);
router.route("/client/api/v1/user/aggregate").post(auth(...[
  'aggregateByUserInClientPlatform',
  'aggregateByAdminInClientPlatform'
]),userController.getUserByAggregate);
router.route("/client/api/v1/user/update/:id").put(auth(...[ 'updateByUserInClientPlatform', 'updateByAdminInClientPlatform' ]),userController.updateUser);    
router.route("/client/api/v1/user/partial-update/:id").put(auth(...[
  'partialUpdateByUserInClientPlatform',
  'partialUpdateByAdminInClientPlatform'
]),userController.partialUpdateUser);
router.route("/client/api/v1/user/softDelete/:id").put(auth(...[
  'softDeleteByUserInClientPlatform',
  'softDeleteByAdminInClientPlatform'
]),userController.softDeleteUser);
router.route("/client/api/v1/user/change-password").put(auth(...[
  'changePasswordByUserInClientPlatform',
  'changePasswordByAdminInClientPlatform'
]),userController.changePassword);

module.exports = router;
