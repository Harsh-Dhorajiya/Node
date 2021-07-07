/*
 * constants
 */

const JWT={
  ADMIN_SECRET:"myjwtadminsecret",
  DEVICE_SECRET:"myjwtdevicesecret",
  DESKTOP_SECRET:"myjwtdesktopsecret",
  CLIENT_SECRET:"myjwtclientsecret",
  EXPIRES_IN: 10000
};

const USER_ROLE ={
  User:1,
  Admin:2,
};

const PLATFORM = {
  ADMIN:1,
  DEVICE:2,
  DESKTOP:3,
  CLIENT:4,
};

let LOGIN_ACCESS ={
  [USER_ROLE.User]:[PLATFORM.ADMIN,PLATFORM.DESKTOP,PLATFORM.CLIENT,PLATFORM.DEVICE],        
  [USER_ROLE.Admin]:[PLATFORM.ADMIN,PLATFORM.DESKTOP,PLATFORM.CLIENT,PLATFORM.DEVICE],        
};

const DEFAULT_ROLE= 1;

const ROLE_RIGHTS={
    
  [USER_ROLE.User] : [
    "getAllByUserInAdminPlatform",
    "getByUserInAdminPlatform",
    "aggregateByUserInAdminPlatform",
    "getCountByUserInAdminPlatform",
    "createByUserInAdminPlatform",
    "addBulkByUserInAdminPlatform",
    "updateByUserInAdminPlatform",
    "updateBulkByUserInAdminPlatform",
    "partialUpdateByUserInAdminPlatform",
    "deleteByUserInAdminPlatform",
    "softDeleteByUserInAdminPlatform",
    "upsertByUserInAdminPlatform",
    "fileUploadByUserInAdminPlatform",
    "changePasswordByUserInAdminPlatform",
    "getAllByUserInDesktopPlatform",
    "getByUserInDesktopPlatform",
    "aggregateByUserInDesktopPlatform",
    "getCountByUserInDesktopPlatform",
    "createByUserInDesktopPlatform",
    "addBulkByUserInDesktopPlatform",
    "updateByUserInDesktopPlatform",
    "updateBulkByUserInDesktopPlatform",
    "partialUpdateByUserInDesktopPlatform",
    "deleteByUserInDesktopPlatform",
    "softDeleteByUserInDesktopPlatform",
    "upsertByUserInDesktopPlatform",
    "fileUploadByUserInDesktopPlatform",
    "changePasswordByUserInDesktopPlatform",
    "getAllByUserInClientPlatform",
    "getByUserInClientPlatform",
    "aggregateByUserInClientPlatform",
    "getCountByUserInClientPlatform",
    "createByUserInClientPlatform",
    "addBulkByUserInClientPlatform",
    "updateByUserInClientPlatform",
    "updateBulkByUserInClientPlatform",
    "partialUpdateByUserInClientPlatform",
    "deleteByUserInClientPlatform",
    "softDeleteByUserInClientPlatform",
    "upsertByUserInClientPlatform",
    "fileUploadByUserInClientPlatform",
    "changePasswordByUserInClientPlatform",
    "getAllByUserInDevicePlatform",
    "getByUserInDevicePlatform",
    "aggregateByUserInDevicePlatform",
    "getCountByUserInDevicePlatform",
    "createByUserInDevicePlatform",
    "addBulkByUserInDevicePlatform",
    "updateByUserInDevicePlatform",
    "updateBulkByUserInDevicePlatform",
    "partialUpdateByUserInDevicePlatform",
    "deleteByUserInDevicePlatform",
    "softDeleteByUserInDevicePlatform",
    "upsertByUserInDevicePlatform",
    "fileUploadByUserInDevicePlatform",
    "changePasswordByUserInDevicePlatform"
  ],
    
  [USER_ROLE.Admin] : [
    "getAllByAdminInAdminPlatform",
    "getByAdminInAdminPlatform",
    "aggregateByAdminInAdminPlatform",
    "getCountByAdminInAdminPlatform",
    "createByAdminInAdminPlatform",
    "addBulkByAdminInAdminPlatform",
    "updateByAdminInAdminPlatform",
    "updateBulkByAdminInAdminPlatform",
    "partialUpdateByAdminInAdminPlatform",
    "deleteByAdminInAdminPlatform",
    "softDeleteByAdminInAdminPlatform",
    "upsertByAdminInAdminPlatform",
    "fileUploadByAdminInAdminPlatform",
    "changePasswordByAdminInAdminPlatform",
    "getAllByAdminInDesktopPlatform",
    "getByAdminInDesktopPlatform",
    "aggregateByAdminInDesktopPlatform",
    "getCountByAdminInDesktopPlatform",
    "createByAdminInDesktopPlatform",
    "addBulkByAdminInDesktopPlatform",
    "updateByAdminInDesktopPlatform",
    "updateBulkByAdminInDesktopPlatform",
    "partialUpdateByAdminInDesktopPlatform",
    "deleteByAdminInDesktopPlatform",
    "softDeleteByAdminInDesktopPlatform",
    "upsertByAdminInDesktopPlatform",
    "fileUploadByAdminInDesktopPlatform",
    "changePasswordByAdminInDesktopPlatform",
    "getAllByAdminInClientPlatform",
    "getByAdminInClientPlatform",
    "aggregateByAdminInClientPlatform",
    "getCountByAdminInClientPlatform",
    "createByAdminInClientPlatform",
    "addBulkByAdminInClientPlatform",
    "updateByAdminInClientPlatform",
    "updateBulkByAdminInClientPlatform",
    "partialUpdateByAdminInClientPlatform",
    "deleteByAdminInClientPlatform",
    "softDeleteByAdminInClientPlatform",
    "upsertByAdminInClientPlatform",
    "fileUploadByAdminInClientPlatform",
    "changePasswordByAdminInClientPlatform",
    "getAllByAdminInDevicePlatform",
    "getByAdminInDevicePlatform",
    "aggregateByAdminInDevicePlatform",
    "getCountByAdminInDevicePlatform",
    "createByAdminInDevicePlatform",
    "addBulkByAdminInDevicePlatform",
    "updateByAdminInDevicePlatform",
    "updateBulkByAdminInDevicePlatform",
    "partialUpdateByAdminInDevicePlatform",
    "deleteByAdminInDevicePlatform",
    "softDeleteByAdminInDevicePlatform",
    "upsertByAdminInDevicePlatform",
    "fileUploadByAdminInDevicePlatform",
    "changePasswordByAdminInDevicePlatform"
  ],
    
};
const MAX_LOGIN_RETRY_LIMIT = 3;   

const FORGOT_PASSWORD_WITH = {
  OTP: {
    email: true,
    sms: false
  },
  EXPIRETIME: 20
};

module.exports = {
  JWT,
  USER_ROLE,
  DEFAULT_ROLE,
  ROLE_RIGHTS,
  PLATFORM,
  MAX_LOGIN_RETRY_LIMIT,
  FORGOT_PASSWORD_WITH,
  LOGIN_ACCESS,
        
};