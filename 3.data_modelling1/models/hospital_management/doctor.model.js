import mongoose from 'mongoose'
const doctorSchema=new mongoose.Schema({
     name:{
          type:String,
          required:true,
          lowercase:true
     },
     salary:{
          type:Number,
          required:true
     },
     qualification:{
          type:String,
          required:true
     },
     experience:{
          type:Number,
          default:0,
          required:true
     },
     worksInHospital:[
          {
          type:mongoose.Schema.Types.ObjectId,
          ref:'Hospital',
          }//now if you need how many hours a doctor spends ina hospital 
          //then you can create a temp model above and use it here
     ],

},{timestamps:true})
export const Doctor=mongoose.model('Doctor',doctorSchema)
