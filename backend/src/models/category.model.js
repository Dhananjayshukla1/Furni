import mongoose from "mongoose";

const category_schema=new mongoose.Schema({
    name:String

},{timestamps:true})
export const Category=mongoose.model("Category",category_schema);