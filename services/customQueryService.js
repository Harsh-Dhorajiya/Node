
const find = async (model, {
  filter = {}, populate, skip, limit, select, sort 
}) => {
  let query = model.find(filter);
  if (select) {
    query = query.select(select);
  }
  if (populate) {
    query = query.populate(populate);
  }
  if (skip) {
    query = query.skip(skip);
  }
  if (limit) {
    query = query.limit(limit);
  }
  if (sort) {
    query = query.sort(sort);
  }
  return await query.exec();
};
const create = async(model,data,options={})=>{
  try {
    if(data && data.length){
      return await model.create(data,options);
    }else{
      return await model.create([data],options);
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
const findOneAndUpdate = async(model,filter,data,options={new:true})=>{
  try {
    return await model.findOneAndUpdate(filter,data,options);        
  } catch (error) {
    throw new Error(error.message);
  }
};
const findOneAndDelete = async(model,filter,options={})=>{
  try {
    return await model.findOneAndDelete(filter,options);        
  } catch (error) {
    throw new Error(error.message);
  }
};
const updateMany = async(model,filter,data,options={})=>{
  try {
    await model.updateMany(filter,data,options);
    return await model.find(filter);
  } catch (error) {
    throw new Error(error.message);
  }
};
const deleteMany = async(model,filter,options={})=>{
  try {
    await model.deleteMany(filter,data,options);
    return await model.find(filter);
  } catch (error) {
    throw new Error(error.message);
  }
};
const aggregate = async(model, queries)=>{
  try {
    return await model.aggregate(queries);
  } catch (error) {
    throw new Error(error.message);
  }
};
module.exports = {
  find,
  findOneAndUpdate,
  findOneAndDelete,
  updateMany,
  deleteMany,
  create,
  aggregate
};
