const TESTING = require("../../model/TESTING");
const utils = require("../../utils/messages");
const TESTINGSchemaKey = require("../../utils/validation/TESTINGValidation");
const validation = require("../../utils/validateRequest");
const dbService = require("../../utils/dbService");
const addTESTING = async(req, res) => {
  try {
    let isValid = validation.validateParamsWithJoi(req.body,TESTINGSchemaKey.schemaKeys);
    if (isValid.error) {
      return utils.inValidParam(isValid.details, res);
    } 
    const data = new TESTING({...req.body,});
    let result = await dbService.createDocument(TESTING,data);

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
const findAllTESTING = async(req, res) => {
  try {
    let options = {};
    let query={};
    let result;
    if(req.body.isCountOnly){
      if (req.body.query !== undefined) {
        query = { ...req.body.query };
      }
      result = await dbService.countDocument(TESTING, query);
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
        result = await dbService.getAllDocuments( TESTING,query,options);
               
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

const getTESTING = async(req, res) => {
  try {
    let query={};
    query.id = req.params.id;
    let result = await dbService.getDocumentByQuery(TESTING,query);
        
    if(result){
      return  utils.successResponse(result, res);
    }
    return utils.recordNotFound([],res);
  }
  catch(error){
    return utils.failureResponse(error.message,res);
  }
};
const getTESTINGCount = async(req, res) => {
  try {
    let where ={};
    if(req.body.where){
      where = req.body.where;
    }
    let result = await dbService.countDocument(TESTING,where);
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

const getTESTINGByAggregate = async (req,res)=>{
  try{
    let result=await dbService.getDocumentByAggregation(TESTING,req.body);
    if(result){
      return utils.successResponse(result, res);
    }
    return utils.recordNotFound([],res);
  }catch(error){
    return utils.failureResponse(error.message,res);
  }
};
const updateTESTING = async(req, res) => {
  try {
    const data = {
      ...req.body,
      id:req.params.id
    };
    let isValid = validation.validateParamsWithJoi(
      data,
      TESTINGSchemaKey.schemaKeys
    );
    if (isValid.error) {
      return  utils.inValidParam(isValid.details, res);
    }
    let result = await dbService.findOneAndUpdateDocument(TESTING,{_id:req.params.id},data,{new:true});
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
const partialUpdateTESTING = async (req, res) => {
  try {
    const data = {
      ...req.body,
      id: req.params.id
    };
    let isValid = validation.validateParamsWithJoi(
      data,
      TESTINGSchemaKey.updateSchemaKeys
    );
    if (isValid.error) {
      return utils.inValidParam(isValid.details, res);
    }
    let result = await dbService.updateDocument(TESTING, req.params.id, data);
    if (!result) {
      return utils.failureResponse("something is wrong", res);
    }
        
    return utils.successResponse(result, res);
  }
  catch(error){
    return utils.failureResponse(error.message, res);
  }
};
const softDeleteTESTING = async (req, res) => {
  try{
    let result = await dbService.updateDocument(TESTING, { _id: req.params.id }, { isDeleted: true });
    if(!result){
      return utils.failedSoftDelete(res);
    }
    return  utils.successResponse(result, res);
  }catch(error){
    return utils.failureResponse(error.message,res); 
  }
};
const bulkInsertTESTING = async(req,res)=>{
  try{
    let data;   
    if(req.body.data !== undefined && req.body.data.length){
      data = req.body.data;
      let result =await dbService.bulkInsert(TESTING,data);
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
const bulkUpdateTESTING=async(req,res)=>{
  try {
    let filter={};
    let data;
    if(req.body.filter !== undefined){
      filter = req.body.filter;
    }
    if(req.body.data !== undefined){
      data = req.body.data;
      let result = await dbService.bulkUpdate(TESTING,filter,data);
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
const deleteTESTING =async(req, res) => {
  try {
    const result = await dbService.findOneAndDeleteDocument(TESTING, {_id:req.params.id});
    return  utils.successResponse(result, res);
  }
  catch(error){
    return utils.failureResponse(error.message,res);
  }
};

module.exports = {
  addTESTING,
  findAllTESTING,
  getTESTING,
  getTESTINGCount,
  getTESTINGByAggregate,
  updateTESTING,
  partialUpdateTESTING,
  softDeleteTESTING,
  bulkInsertTESTING,
  bulkUpdateTESTING,
  deleteTESTING,
};
