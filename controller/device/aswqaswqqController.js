const Aswqaswqq = require("../../model/aswqaswqq");
const utils = require("../../utils/messages");
const aswqaswqqSchemaKey = require("../../utils/validation/aswqaswqqValidation");
const validation = require("../../utils/validateRequest");
const dbService = require("../../utils/dbService");
const addAswqaswqq = async(req, res) => {
  try {
    let isValid = validation.validateParamsWithJoi(req.body,aswqaswqqSchemaKey.schemaKeys);
    if (isValid.error) {
      return utils.inValidParam(isValid.details, res);
    } 
    const data = new Aswqaswqq({...req.body,});
    let result = await dbService.createDocument(Aswqaswqq,data);

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
const findAllAswqaswqq = async(req, res) => {
  try {
    let options = {};
    let query={};
    let result;
    if(req.body.isCountOnly){
      if (req.body.query !== undefined) {
        query = { ...req.body.query };
      }
      result = await dbService.countDocument(Aswqaswqq, query);
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
        result = await dbService.getAllDocuments( Aswqaswqq,query,options);
               
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

const getAswqaswqq = async(req, res) => {
  try {
    let query={};
    query.id = req.params.id;
    let result = await dbService.getDocumentByQuery(Aswqaswqq,query);
        
    if(result){
      return  utils.successResponse(result, res);
    }
    return utils.recordNotFound([],res);
  }
  catch(error){
    return utils.failureResponse(error.message,res);
  }
};
const getAswqaswqqCount = async(req, res) => {
  try {
    let where ={};
    if(req.body.where){
      where = req.body.where;
    }
    let result = await dbService.countDocument(Aswqaswqq,where);
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

const getAswqaswqqByAggregate = async (req,res)=>{
  try{
    let result=await dbService.getDocumentByAggregation(Aswqaswqq,req.body);
    if(result){
      return utils.successResponse(result, res);
    }
    return utils.recordNotFound([],res);
  }catch(error){
    return utils.failureResponse(error.message,res);
  }
};
const updateAswqaswqq = async(req, res) => {
  try {
    const data = {
      ...req.body,
      id:req.params.id
    };
    let isValid = validation.validateParamsWithJoi(
      data,
      aswqaswqqSchemaKey.schemaKeys
    );
    if (isValid.error) {
      return  utils.inValidParam(isValid.details, res);
    }
    let result = await dbService.findOneAndUpdateDocument(Aswqaswqq,{_id:req.params.id},data,{new:true});
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
const partialUpdateAswqaswqq = async (req, res) => {
  try {
    const data = {
      ...req.body,
      id: req.params.id
    };
    let isValid = validation.validateParamsWithJoi(
      data,
      aswqaswqqSchemaKey.updateSchemaKeys
    );
    if (isValid.error) {
      return utils.inValidParam(isValid.details, res);
    }
    let result = await dbService.updateDocument(Aswqaswqq, req.params.id, data);
    if (!result) {
      return utils.failureResponse("something is wrong", res);
    }
        
    return utils.successResponse(result, res);
  }
  catch(error){
    return utils.failureResponse(error.message, res);
  }
};
const softDeleteAswqaswqq = async (req, res) => {
  try{
    let result = await dbService.updateDocument(Aswqaswqq, { _id: req.params.id }, { isDeleted: true });
    if(!result){
      return utils.failedSoftDelete(res);
    }
    return  utils.successResponse(result, res);
  }catch(error){
    return utils.failureResponse(error.message,res); 
  }
};
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

module.exports = {
  addAswqaswqq,
  findAllAswqaswqq,
  getAswqaswqq,
  getAswqaswqqCount,
  getAswqaswqqByAggregate,
  updateAswqaswqq,
  partialUpdateAswqaswqq,
  softDeleteAswqaswqq,
  bulkInsertAswqaswqq,
  bulkUpdateAswqaswqq,
};
