import mongoose, { Mongoose } from "mongoose"

const reviewShcema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.ObjectId,
        ref:"User",
        required: true,
    },
    comment:{
        type: String,
    },
    rating:{
        type: Number,
        min: 1,
        max: 5,
        required: true,
    },
})

const tourSchema = new mongoose.Schema(
    {
        title: {type: String, required: true},
        description: {type: String},
        location: {type: String, required: true},
        country: {type: String, required: true},
        city: {type: String, required: true},
        price: {type: Number, required: true},
        avarageRating: {type: Number, default:0},
        image: {type: String},
        createdBy: {type: mongoose.Schema.Types.ObjectId, 
            ref:"user",
             required: true},

             reviews: [reviewShcema],



    },{
        timestamps: true,
    }
)

const Tour=mongoose.model("tour", tourSchema);
export default Tour;