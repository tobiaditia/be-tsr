import Theory from "../models/theory.js";

export const getTheory = async (req, res) => {
    try {
        const theories = await Theory.find();
        res.json(theories);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }

}

export const getTheoryById = async (req, res) => {
    try {
        const theory = await Theory.findById(req.params.id);
        res.json(theory);
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }

}

export const saveTheory = async (req, res) => {
    const theory = new Theory(req.body);
    try {
        const savedTheory = await theory.save();
        res.status(201).json(savedTheory);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

export const updateTheory = async (req, res) => {
    const cekId = await Theory.findById(req.params.id);
    if (!cekId) return res.status(404).json({
        message: "Data tidak ditemukan"
    });
    try {
        const updatedTheory = await Theory.updateOne({
            _id: req.params.id
        }, {
            $set: req.body
        });
        res.status(200).json(updatedTheory);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

export const deleteTheory = async (req, res) => {
    const cekId = await Theory.findById(req.params.id);
    if (!cekId) return res.status(404).json({
        message: "Data tidak ditemukan"
    });
    try {
        const deletedTheory = await Theory.deleteOne({
            _id: req.params.id
        });
        res.status(200).json(deletedTheory);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}