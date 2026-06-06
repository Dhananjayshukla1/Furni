import mongoose from 'mongoose'

const user_schema=new mongoose.Schema({});
export const User= mongoose.model("User", user_schema);