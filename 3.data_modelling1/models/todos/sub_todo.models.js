import mongoose, { trusted } from 'mongoose'

const sub_TodoSchema=new mongoose.Schema({
  content:{
    type:String,
    required:true,
  },
  complete:{
    type:Boolean,
    default:false
  },
  createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
  }

},{timestamps:true})

export const sub_Todo=mongoose.model('sub_Todo',sub_todoSchema)