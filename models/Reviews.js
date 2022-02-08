import mongoose from "mongoose";// import  Mongoose from "mongoose";

const { Schema } = mongoose;

const schema = new Schema({ // создаем модель schema
    title:{
        type: String,
        required: true
    },
});

const review = mongoose.model("Review", schema)

export default review
