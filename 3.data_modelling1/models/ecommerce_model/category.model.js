import mongoose from 'mongoose'
const categorySchema=new mongoose.schema({
     name:{
          type:String,
          required:true,
          unique:true,
          lowercase:true
     },
     description:{
          type:String,
          required:true
     },
     products:[//here products are stored as an array of objects, to use map on it later
          {
               type:mongoose.Schema.Types.ObjectId,
               ref:'Product'
          }
     ]
},{timestamps:true})
export const Category=mongoose.model('Category',categorySchema)//keep the names consistent