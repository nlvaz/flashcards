const express = require('express');

const app = express();

const names = [
	{First: "Leilani", Last: "Vazquez"},
	{First: "Noelia", Last: "Vazquez"},
	{First: "Carmen", Last: "Vazquez"},
	{First: "German", Last: "Vazquez"},
	{First: "Ashley", Last: "Dzergoski"},
	{First: "NJIT", Last: "2023"},
	{First: "Debbie"},
	{Last: "James"}
];

app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/cards', (req, res) => {
	res.render('card', {prompt: "Who is buried in Grant's tomb?", hint: "Think about whose tomb it is!"});
});

// /sandbox : challenge to create random path and use iteration to display first and last name from an array into two table column :)
// First Name | Last Name
app.get('/sandbox', (req, res) => {
	res.render('sandbox', {prompt: names})
});

app.listen(3000, () => {
	console.log('The application is running on localhost:3000!');
});
