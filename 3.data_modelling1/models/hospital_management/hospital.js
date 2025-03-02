import mongoose from 'mongoose'
const hospitalSchema=new mongoose.Schema({
     //almost everthig about modeling is covered, try reading mongoose when you require more info
     name:{
          type:String,
          required:true,
          lowercase:true
     },
     addressline1:{
          type:String,
          required:true,
          lowercase:true
     },
     addressline2:{
          type:String,
          required:true,
          lowercase:true
     },
     pin:{
          type:Number,
          required:true
     },
     contact:{
          type:String,
          required:true
     },
     specializedIn:[{
          type:String,
          required:true
     }],
     doctors:[
          {
          type:mongoose.Schema.Types.ObjectId,
          ref:'Doctor'
          }
     ],
},{timestamps:true})
export const Hospital=mongoose.model('Hospital',hospitalSchema)