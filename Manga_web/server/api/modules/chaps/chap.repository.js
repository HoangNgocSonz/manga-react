const mongoose = require('mongoose');

const ChapSchema = mongoose.Schema({
    name:String,
    manga:String,
    imageLinksId:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Image",
        }
    ]
    
});

const ChapModel = mongoose.model('Chap',ChapSchema);

const find = async function (query) {
    const limit = Number(query.limit);
    const skip = Number(query.skip);
    delete query.skip;
    delete query.limit;
    if ( limit && skip !== undefined ) {
      return await ChapModel.find(query).limit(limit).skip(skip).populate("imageLinksId");
    } else {
      return await ChapModel.find(query).populate("imageLinksId");
    }
  }
  
const count = async function (query) {
    return await ChapModel.count(query);
}

const findById = async function(id){
    return await ChapModel.findById(id);
}

const create = async function(data){
    const a = new ChapModel(data);
    return await a.save();
}

const update = async function(id,data){
    return await ChapModel.findByIdAndUpdate(id,{$set:data},{new:true});
}
const  deleteOne = async function(id){
    return await ChapModel.findByIdAndDelete(id);
}
// const  deleteOne = async function(){
//     return await ChapModel.deleteMany();
// }

module.exports = {
    find:find,
    findById:findById,
    create:create,
    update:update,
    delete:deleteOne,
    count: count,
}