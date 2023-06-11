import { Router } from 'express';
import { server } from '../Server';
import {StatusCodes} from 'http-status-codes';

const router = Router();

router.get('/', (req, res) => {
	return res.send('olá, dev!');
});
router.post('/teste', (req, res) => {
	console.log(req.body);
	return res.status(StatusCodes.OK).json(req.body);
});

export {router}; 