import mongoose from "mongoose"

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




    },{
        timestamps: true,
    }
)

const Tour=mongoose.model("tour", tourSchema);
export default Tour;