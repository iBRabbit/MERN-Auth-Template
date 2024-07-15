const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const { Users } = require('../models');

router.get('/', async (req, res) => {
    const data = await Users.findAll();
    res.json(data);
});

router.post('/', async (req, res) => {
    const { username, password, email } = req.body;

    const isUsernameExists = await Users.findOne({ where: { username } });
    if (isUsernameExists) {
        return res.status(400).json({
            message: "Username already exists",
            success: false
        });
    }

    const isEmailExists = await Users.findOne({ where: { email } });
    if (isEmailExists) {
        return res.status(400).json({
            message: "Email already exists",
            success: false
        });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    await Users.create({
        username,
        password: hashPassword,
        email
    });

    res.json({
        message: "Anda berhasil mendaftarkan akun anda.",
        success: true
    });
});

// Other routes...

module.exports = router;
