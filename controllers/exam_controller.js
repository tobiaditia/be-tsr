import Exam from "../models/exam.js";

export const getExam = async (req, res) => {
    try {
        const exams = await Exam.find();
        res.json(exams);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }

}

export const getExamById = async (req, res) => {
    try {
        const theory = await Exam.findById(req.params.id);
        res.json(theory);
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }

}

export const saveExam = async (req, res) => {
    const theory = new Exam(req.body);
    try {
        const savedExam = await theory.save();
        res.status(201).json(savedExam);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

export const updateExam = async (req, res) => {
    const cekId = await Exam.findById(req.params.id);
    if (!cekId) return res.status(404).json({
        message: "Data tidak ditemukan"
    });
    try {
        const updatedExam = await Exam.updateOne({
            _id: req.params.id
        }, {
            $set: req.body
        });
        res.status(200).json(updatedExam);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

export const deleteExam = async (req, res) => {
    const cekId = await Exam.findById(req.params.id);
    if (!cekId) return res.status(404).json({
        message: "Data tidak ditemukan"
    });
    try {
        const deletedExam = await Exam.deleteOne({
            _id: req.params.id
        });
        res.status(200).json(deletedExam);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}