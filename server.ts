import express from 'express';
import next from 'next';
import path from 'path';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || 3000;

app.prepare().then(() => {
	const server = express();

	server.use('/_next', express.static(path.join(__dirname, '.next')));

	server.use('/_next/image', (req, res, next) => {
		handle(req, res);
	});

	server.all('*', (req, res) => {
		return handle(req, res);
	});

	server.listen(port, (err?: any) => {
		if (err) throw err;
		console.log(`> Ready on http://localhost:${port}`);
	});
});
