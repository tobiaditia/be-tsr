import ExamQuestion from "../models/exam_questions.js";

export const getExamQuestion = async (req, res) => {
    try {
        const exams = await ExamQuestion.find({exam_id: req.params.id});
        res.json(exams);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }

}

export const getExamQuestionById = async (req, res) => {
    try {
        const examQuestion = await ExamQuestion.findById(req.params.id_question);
        res.json(examQuestion);
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }

}

export const saveExamQuestion = async (req, res) => {
    const examQuestion = new ExamQuestion({
        exam_id: req.params.id,
        question: req.body.question,
    });
    try {
        const savedExamQuestion = await examQuestion.save();
        res.status(201).json(savedExamQuestion);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

export const updateExamQuestion = async (req, res) => {
    const cekId = await ExamQuestion.findById(req.params.id_question);
    if (!cekId) return res.status(404).json({
        message: "Data tidak ditemukan"
    });
    try {
        const updatedExamQuestion = await ExamQuestion.updateOne({
            _id: req.params.id_question
        }, {
            $set: req.body
        });
        res.status(200).json(updatedExamQuestion);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

export const deleteExamQuestion = async (req, res) => {
    const cekId = await ExamQuestion.findById(req.params.id_question);
    if (!cekId) return res.status(404).json({
        message: "Data tidak ditemukan"
    });
    try {
        const deletedExamQuestion = await ExamQuestion.deleteOne({
            _id: req.params.id_question
        });
        res.status(200).json(deletedExamQuestion);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}