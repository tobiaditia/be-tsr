import mongoose from "mongoose";

const Theory = mongoose.Schema({
    class_id: {
        type: Number,
        required: true
    },
    created_by: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
});

export default mongoose.model('Theories', Theory);