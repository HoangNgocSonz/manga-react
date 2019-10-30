const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
    link:String,
    chapIndex:String,
    mangaName:String,
})

const imageModel = mongoose.model("Image", imageSchema);

const find = async function (query) {
  const limit = Number(query.limit);
  const skip = Number(query.skip);
  delete query.skip;
  delete query.limit;
  if ( limit && skip !== undefined ) {
    return await imageModel.find(query).limit(limit).skip(skip);
  } else {
    return await imageModel.find(query);
  }
}

const count = async function (query) {
  return await imageModel.count(query);
}

const findById = async function (id) {
  return await imageModel.findById(id).populate("image");
}

const create = async function (data) {
  const newDoc = new imageModel(data);
  return await newDoc.save();
}

const update = async function (id, data) {
  return await imageModel.findByIdAndUpdate(id, data, {new: true});
}

const deleteOne = async function (id) {
  return await imageModel.findByIdAndDelete(id);
}
// const  deleteOne = async function(){
//   return await imageModel.deleteMany();
// }
// const deleteOne = async function (query) {
//   return await imageModel.deleteMany(query);
// }

module.exports = {
  find: find,
  findById: findById,
  create: create,
  update: update,
  delete: deleteOne,
  count: count,
};