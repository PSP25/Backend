import mongoose from 'mongoose'

const todoSchema=new mongoose.Schema({
  content:{
    type:String,
    required:true
  },
  complete:{
    type:Boolean,
    default:false
  },
  createdBy:{
    //important as this is used to get data from some other model in dataBase
    //the type of this is defined
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  //if we want to store the subtodos, that too we can do using an array of object
  subTodos:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:'sub_Todo'
    }
  ]
},{timestamps:true})

export const Todo=mongoose.model('Todo',todoSchema)