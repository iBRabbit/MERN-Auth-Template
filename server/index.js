const db = require('./models');
const port = 8000;

const express = require('express');
const app = express();

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.clear();
        console.log(`Server is running on port ${port}`);
        console.log(`http://localhost:${port}`)
        console.log(`Last reloaded at ${new Date()}`)
    });
});