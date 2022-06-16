import User from "../models/users.js";

export const getUser = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }

}

export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }

}

export const saveUser = async (req, res) => {
    const user = new User(req.body);
    try {
        const savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

export const updateUser = async (req, res) => {
    const cekId = await User.findById(req.params.id);
    if (!cekId) return res.status(404).json({
        message: "Data tidak ditemukan"
    });
    try {
        const updatedUser = await User.updateOne({
            _id: req.params.id
        }, {
            $set: req.body
        });
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

export const deleteUser = async (req, res) => {
    const cekId = await User.findById(req.params.id);
    if (!cekId) return res.status(404).json({
        message: "Data tidak ditemukan"
    });
    try {
        const deletedUser = await User.deleteOne({
            _id: req.params.id
        });
        res.status(200).json(deletedUser);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}