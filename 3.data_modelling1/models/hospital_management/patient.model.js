import mongoose from 'mongoose'
const patientSchema=new mongoose.Schema({
     name:{
          type:String,
          required:true,
          lowercase:true
     },
     age:{
          type:Number,
          required:true
     },
     bloodgroup:{
          type:String,
          required:true
     },
     gender:{
          type:String,
          enum:['M','F','Other'],
          required:true
     },
     diagnosedWith:{
          type:String,
          required:true
     },
     address:{
          type:String,
          required:true//we can also make a separate temp model to store different parts of address(pin,post, etc)
     },
     admittedIn:{
          type:mongoose.Schema.Types.ObjectId,
          ref:'Hospital',
     }
},{timestamps:true})
export const Patient=mongoose.model('Patient',patientSchema)