const express = require('express');
const app = express();
const port = 3069;

app.get('/', (req, res) => {
    res.send('Welcome to the server');
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})
