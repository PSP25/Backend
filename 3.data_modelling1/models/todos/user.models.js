import mongoose from 'mongoose'

const userSchema=new mongoose.Schema(
  {
    username:{//we can use only string but this will set other fields to default settings
      type:String,
      required:True,
      unique:true,
      lowercase:true
    },
    email:{
      type:String,
      required:true,
      unique:true,
      lowercase:true
    },
    password:{
      type:Strig,
      required:true,
      //monogoose also helps us to store timestamps for better optimization
      //but we need to store it in a separate secondary object
    }

    
  },
  {
    timestamps:true
    //we get updatedAt and createdAt through this
  }
)//create the new user schema

export const User=mongooose.model('User',userSchema)
//This is a method provided by Mongoose to define a new model or retrieve an existing one. A Mongoose model is a wrapper around a MongoDB collection that provides various methods to interact with the database (like .save(), .find(), etc.).