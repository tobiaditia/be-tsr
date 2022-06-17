import express from "express";
import {
    getTheoryById,
    saveTheory,
    updateTheory,
    deleteTheory,
    getTheory,
} from "../controllers/theory_controller.js";
import {
    getUserById,
    saveUser,
    updateUser,
    deleteUser,
    getUser,
} from "../controllers/user_controller.js";
import {
    getExamById,
    saveExam,
    updateExam,
    deleteExam,
    getExam,
} from "../controllers/exam_controller.js";

const router = express.Router();

router.get('/', (req, res) => res.json({
    'message': 'hello'
}));
router.get('/theory/', getTheory);
router.get('/theory/:id', getTheoryById);
router.post('/theory/', saveTheory);
router.patch('/theory/:id', updateTheory);
router.delete('/theory/:id', deleteTheory);
router.get('/exams/', getExam);
router.get('/exams/:id', getExamById);
router.post('/exams/', saveExam);
router.patch('/exams/:id', updateExam);
router.delete('/exams/:id', deleteExam);
router.get('/users/', getUser);
router.get('/users/:id', getUserById);
router.post('/users/', saveUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;