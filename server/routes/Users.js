const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const { Users } = require('../models');

router.get('/', async (req, res) => {
    const data = await Users.findAll();
    res.json(data);
});

router.post('/', async (req, res) => {
    const { username, password, email} = req.body;

    const isUsernameExists = await Users.findOne({ where: { username } });
    if (isUsernameExists) {
        return res.json({
            message: "Username already exists"
        });
    }

    const isEmailExists = await Users.findOne({ where: { email } });
    if (isEmailExists) {
        return res.json({
            message: "Email already exists"
        });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    const data = await Users.create({
        username: username,
        password: hashPassword,
        email: email
    });

    res.json({
        message: "Data berhasil ditambahkan",
        data
    });
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await Users.findOne({ where: { username } });

    if (!user) {
        return res.json({
            message: "Invalid username"
        });
    }

    const isValidPassword = bcrypt.compareSync(password, user.password);
    if (!isValidPassword) {
        return res.json({
            message: "Invalid password"
        });
    }

    res.json({
        message: "Login success",
        user
    });

});

module.exports = router;