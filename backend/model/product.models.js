import mongoose, { Types } from "mongoose"

const productSchema = new mongoose.Schema ({

  description :{
    type : string,
    required : true
  },
  description :{
    type : string,
    required : true
  },
  productImage :{
    type : string,
    required : true
  },
  price :{
    type : Number,
    default : 0
  },
  stock:{
    default :0,
    type : Number
  },
  category:{
       type : mongoose.Schema.Types.ObjectId,
    ref : "Category",
    required : true
  },
  owner :{
       type : mongoose.Schema.Types.ObjectId,
    ref : "User" 
  }

  

},{timestamps : true})

export const Product = mongoose.model("Product" , productSchema)