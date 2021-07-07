const Hhuhu = require("../../model/hhuhu");
const utils = require("../../utils/messages");
const hhuhuSchemaKey = require("../../utils/validation/hhuhuValidation");
const validation = require("../../utils/validateRequest");
const dbService = require("../../utils/dbService");
const addHhuhu = async(req, res) => {
  try {
    let isValid = validation.validateParamsWithJoi(req.body,hhuhuSchemaKey.schemaKeys);
    if (isValid.error) {
      return utils.inValidParam(isValid.details, res);
    } 
    const data = new Hhuhu({...req.body,});
    let result = await dbService.createDocument(Hhuhu,data);

    return  utils.successResponse(result, res);
  } catch (error) {
    if(error.name === "ValidationError"){
      return utils.validationError(error.message, res);
    }
    if(error.code && error.code == 11000){
      return utils.isDuplicate(error.message, res);
    }
    return utils.failureResponse(error.message,res); 
  }
};
const findAllHhuhu = async(req, res) => {
  try {
    let options = {};
    let query={};
    let result;
    if(req.body.isCountOnly){
      if (req.body.query !== undefined) {
        query = { ...req.body.query };
      }
      result = await dbService.countDocument(Hhuhu, query);
      if (result) {
        result = { totalRecords: result };
        return utils.successResponse(result, res);
      } 
      return utils.recordNotFound([], res);
    }
    else {
      if (req.body.options !== undefined) {
        if(req.body.options.populate){
          delete req.body.options.populate;
        }
        options = { ...req.body.options };
                
        if(req.body.query !==undefined){
          query={...req.body.query};
        }
        result = await dbService.getAllDocuments( Hhuhu,query,options);
               
        if(!result){
          return utils.recordNotFound([],res);
        }
        return utils.successResponse(result, res);
      }
    }
  }
  catch(error){
    return utils.failureResponse(error.message,res);
  }
};

const getHhuhu = async(req, res) => {
  try {
    let query={};
    query.id = req.params.id;
    let result = await dbService.getDocumentByQuery(Hhuhu,query);
        
    if(result){
      return  utils.successResponse(result, res);
    }
    return utils.recordNotFound([],res);
  }
  catch(error){
    return utils.failureResponse(error.message,res);
  }
};
const getHhuhuCount = async(req, res) => {
  try {
    let where ={};
    if(req.body.where){
      where = req.body.where;
    }
    let result = await dbService.countDocument(Hhuhu,where);
    if(result){
      result = {totalRecords:result};
      return utils.successResponse(result, res);
    }
    return utils.recordNotFound([],res);
  }
  catch(error){
    return utils.failureResponse(error.message,res);
  }
};

const getHhuhuByAggregate = async (req,res)=>{
  try{
    let result=await dbService.getDocumentByAggregation(Hhuhu,req.body);
    if(result){
      return utils.successResponse(result, res);
    }
    return utils.recordNotFound([],res);
  }catch(error){
    return utils.failureResponse(error.message,res);
  }
};
const updateHhuhu = async(req, res) => {
  try {
    const data = {
      ...req.body,
      id:req.params.id
    };
    let isValid = validation.validateParamsWithJoi(
      data,
      hhuhuSchemaKey.schemaKeys
    );
    if (isValid.error) {
      return  utils.inValidParam(isValid.details, res);
    }
    let result = await dbService.findOneAndUpdateDocument(Hhuhu,{_id:req.params.id},data,{new:true});
    if(!result){
      return utils.failureResponse("something is wrong",res);
    }
        
    return  utils.successResponse(result, res);
  }
  catch(error){
    if(error.name === "ValidationError"){
      return utils.isDuplicate(error.message, res);
    }
    if(error.code && error.code == 11000){
      return utils.isDuplicate(error.message, res);
    }
    return utils.failureResponse(error.message,res);
  }
};
const partialUpdateHhuhu = async (req, res) => {
  try {
    const data = {
      ...req.body,
      id: req.params.id
    };
    let isValid = validation.validateParamsWithJoi(
      data,
      hhuhuSchemaKey.updateSchemaKeys
    );
    if (isValid.error) {
      return utils.inValidParam(isValid.details, res);
    }
    let result = await dbService.updateDocument(Hhuhu, req.params.id, data);
    if (!result) {
      return utils.failureResponse("something is wrong", res);
    }
        
    return utils.successResponse(result, res);
  }
  catch(error){
    return utils.failureResponse(error.message, res);
  }
};
const softDeleteHhuhu = async (req, res) => {
  try{
    let result = await dbService.updateDocument(Hhuhu, { _id: req.params.id }, { isDeleted: true });
    if(!result){
      return utils.failedSoftDelete(res);
    }
    return  utils.successResponse(result, res);
  }catch(error){
    return utils.failureResponse(error.message,res); 
  }
};
const bulkInsertHhuhu = async(req,res)=>{
  try{
    let data;   
    if(req.body.data !== undefined && req.body.data.length){
      data = req.body.data;
      let result =await dbService.bulkInsert(Hhuhu,data);
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
const bulkUpdateHhuhu=async(req,res)=>{
  try {
    let filter={};
    let data;
    if(req.body.filter !== undefined){
      filter = req.body.filter;
    }
    if(req.body.data !== undefined){
      data = req.body.data;
      let result = await dbService.bulkUpdate(Hhuhu,filter,data);
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

module.exports = {
  addHhuhu,
  findAllHhuhu,
  getHhuhu,
  getHhuhuCount,
  getHhuhuByAggregate,
  updateHhuhu,
  partialUpdateHhuhu,
  softDeleteHhuhu,
  bulkInsertHhuhu,
  bulkUpdateHhuhu,
};
