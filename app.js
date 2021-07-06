const express = require('express');
const app = express();

const PORT = process.env.PORT || 8877;

app.listen(PORT, () => {
    console.log(`Escutando na porta ${PORT}`)
})

app.get('/', (req, res) => {
    res.json({
        msg : 'OK'
    })
})

app.get('/about', (req, res) => {
    res.json({
        author : 'Grazziani Xavier',
        desc : 'Test'
    })
})