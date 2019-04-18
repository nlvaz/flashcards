const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

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
app.use(cookieParser());
app.set('view engine', 'pug');

app.get('/', (req, res) => {
	const name = req.cookies.username;
	if (name)
		res.render('index', {name});
	else
		res.redirect('/hello');
});

app.get('/cards', (req, res) => {
	res.render('card', {prompt: "Who is buried in Grant's tomb?", hint: "Think about whose tomb it is!"});
});

app.get('/hello', (req, res) => {
	if(req.cookies.username)
		res.redirect('/');
	else
		res.render('hello');
});

app.post('/hello', (req, res) => {
	res.cookie('username', req.body.username);
	res.redirect('/');
});

app.post('/goodbye', (req, res) => {
	res.clearCookie('username');
	res.redirect('/hello')
})

app.get('/sandbox', (req, res) => {
	res.render('sandbox', {names});
});

app.listen(3000, () => {
	console.log('The application is running on localhost:3000!');
});
