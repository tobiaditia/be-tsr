import mongoose from "mongoose";

const User = mongoose.Schema({
    role_id: {
        type: String,
        required: true
    },
    class_id: {
        type: String,
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