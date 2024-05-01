const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/dados', (req, res) => {
    res.render('dados', { data: req.body });
});

app.listen(3000, () => {
    console.log('App listening on port 3000');
});
