const express = require('express');
const { join } = require('path');

module.exports = () => {
	const app = express();
	app.set('view engine', 'ejs');
	app.use('/', express.static(join(__dirname, 'public')));
	app.get('/', (req, res, next) => res.render('index'));
	return app;
};
