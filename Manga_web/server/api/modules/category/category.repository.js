const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    name: String,
});

const CategoryModel = mongoose.model('Category',CategorySchema);

const find = async function (query) {
    const limit = Number(query.limit);
    const skip = Number(query.skip);
    delete query.skip;
    delete query.limit;
    if ( limit && skip !== undefined ) {
      return await CategoryModel.find(query).limit(limit).skip(skip);
    } else {
      return await CategoryModel.find(query);
    }
  }
  
const count = async function (query) {
    return await CategoryModel.count(query);
}

const findById = async function(id){
    return await CategoryModel.findById(id);
}

const create = async function(data){
    const a = new CategoryModel(data);
    return await a.save();
}

const update = async function(id,data){
    return await CategoryModel.findByIdAndUpdate(id,{$set:data},{new:true});
}
const  deleteOne = async function(id){
    return await CategoryModel.findByIdAndDelete(id);
}

module.exports = {
    find:find,
    findById:findById,
    create:create,
    update:update,
    delete:deleteOne,
    count: count,
}