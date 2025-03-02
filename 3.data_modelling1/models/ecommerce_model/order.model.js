import mongoose from 'mongoose'

const orderItemSchema=new mongoose.Schema({
     quantity:{
          type:Number,
          required:true
     },
     product:{
          type:mongoose.Schema.Types.ObjectId,
          ref:'Product'
     }
})
const orderSchema=new mongoose.Schema({
     orderPrice:{
          type:Number,
          required:true
     },
     customer:{
          type:mongoose.Schema.Types.ObjectId,
          ref:'User',
     },
     orderItems:[orderItemSchema],
     //we can store the products in the order as an array of objects
     //but order has different properties like quantity,product, etc
     //so we try creating a new model for the orderItems
     //we can also define the temporary schema inside orderItem as we did for subTodos in todo.model.js
     address:{
          type:String,
          required:true//we can also make a separate temp model to store different parts of address(pin,post, etc)
     },
     //there are some properties where there are fixed number of choices, like status of order(ordered,shipped,delivered)
     //this is done by enums
     status:{
          type:String,
          required:true,
          enum:['pending','shipped','delivered'],
          default:'pending'
     }


},{timestamps:true})
export const Order=mongoose.model('Order',orderSchema)