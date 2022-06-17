import mongoose from "mongoose";

const Exam = mongoose.Schema({
    class_id: {
        type: Number,
        required: true
    },
    created_by: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    },
    type: {
        type: Number,
        required: true
    },
});

export default mongoose.model('Exams', Exam);