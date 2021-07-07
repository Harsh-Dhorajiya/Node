const cron = require('node-cron');
let jobService = require("../services/jobs/jobConfiguration");

/* 
 * "email": {
 *   "type": "email"
 * },
 * "name": {
 *   "type": "String"
 * }
 */
let Cron = cron.schedule('*/31 9-18 * * *',() => {
  try {
    jobService.Cron();
    console.log('job called');
  } catch (error) {
    throw error;        
  }
});   

module.exports={Cron,};