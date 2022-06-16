import mongoose from "mongoose";

const User = mongoose.Schema({
    role_id: {
        type: Number,
        required: true
    },
    class_id: {
        type: Number,
        required: false
    },
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});

export default mongoose.model('Users', User);