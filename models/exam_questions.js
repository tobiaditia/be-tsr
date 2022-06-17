import mongoose from "mongoose";

const ExamQuestions = mongoose.Schema({
    exam_id: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    }
});

export default mongoose.model('Exam_questions', ExamQuestions);