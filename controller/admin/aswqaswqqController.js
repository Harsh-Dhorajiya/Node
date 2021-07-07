const Aswqaswqq = require("../../model/aswqaswqq");
const utils = require("../../utils/messages");
const aswqaswqqSchemaKey = require("../../utils/validation/aswqaswqqValidation");
const validation = require("../../utils/validateRequest");
const dbService = require("../../utils/dbService");
const bulkInsertAswqaswqq = async(req,res)=>{
  try{
    let data;   
    if(req.body.data !== undefined && req.body.data.length){
      data = req.body.data;
      let result =await dbService.bulkInsert(Aswqaswqq,data);
      return  utils.successResponse(result, res);
    }else{
      return utils.failureResponse('Invalid Data',res);
    }  
  }catch(error){
    if(error.name === "ValidationError"){
      return utils.validationError(error.message, res);
    }
    if(error.code && error.code == 11000){
      return utils.isDuplicate(error.message, res);
    }
    return utils.failureResponse(error.message,res);
  }
};
const bulkUpdateAswqaswqq=async(req,res)=>{
  try {
    let filter={};
    let data;
    if(req.body.filter !== undefined){
      filter = req.body.filter;
    }
    if(req.body.data !== undefined){
      data = req.body.data;
      let result = await dbService.bulkUpdate(Aswqaswqq,filter,data);
      if(!result){
        return utils.failureResponse("something is wrong.",res);
      }
      return  utils.successResponse(result, res);
    }
    else{
      return utils.failureResponse("Invalid Data", res);
    }
  }
  catch(error){
    return utils.failureResponse(error.message,res); 
  }
};
const deleteAswqaswqq =async(req, res) => {
  try {
    const result = await dbService.findOneAndDeleteDocument(Aswqaswqq, {_id:req.params.id});
    return  utils.successResponse(result, res);
  }
  catch(error){
    return utils.failureResponse(error.message,res);
  }
};

module.exports = {
  bulkInsertAswqaswqq,
  bulkUpdateAswqaswqq,
  deleteAswqaswqq,
};
