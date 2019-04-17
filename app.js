const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const names = [
	{First: "Leilani", Last: "Vazquez"},
	{First: "Noelia", Last: "Vazquez"},
	{First: "Carmen", Last: "Vazquez"},
	{First: "German", Last: "Vazquez"},
	{First: "Selena", Last: "Gomez"},
	{First: "NJIT", Last: "2023"},
	{First: "Debbie"},
	{Last: "James"}
];

app.use(bodyParser.urlencoded({ extended: false}));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/cards', (req, res) => {
	res.render('card', {prompt: "Who is buried in Grant's tomb?", hint: "Think about whose tomb it is!"});
});

app.get('/hello', (req, res) => {
	res.render('hello')
});

app.post('/hello', (req, res) => {
	console.dir(req.body);
	res.render('hello')
});

app.get('/sandbox', (req, res) => {
	res.render('sandbox', {names});
});

app.listen(3000, () => {
	console.log('The application is running on localhost:3000!');
});
