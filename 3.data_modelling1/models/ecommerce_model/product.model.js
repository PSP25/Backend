import mongoose from 'mongoose'
const productSchema=new mongoose.schema({
     name:{
          type:String,
          required:true,
          lowercase:true
     },
     description:{
          type:String,
          required:true
     },
     price:{
          type:Number,
          default:0,
          required:true
     },
     stock:{
          type:Number,
          default:0,
          required:true
     },
     category:{
          type:mongoose.Schema.Types.ObjectId,
          ref:'Category',
          required:true
     },
     owner:{
          type:mongoose.Schema.Types.ObjectId,
          ref:'User',
          required:true
     },
     //we can store the image of the product as a string buffer, but it loads the database
     //so we store the image as a url in am separate folder and use the url to go to the image
     productImage:{
          type:String,//cloudnry and othe sitees help in storing the image and give a url to it
          required:true
     }

},{timestamps:true})
export const Product=mongoose.model('Product',productSchema)