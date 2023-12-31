import { Router } from 'express';
import {CidadesController} from './../controllers';
const router = Router();

router.get('/', (_, res) => {
	return res.send('Teste de rota, OK!');
});

router.get('/cidades', CidadesController.GetAll, CidadesController.GetAll);
router.post('/cidades', CidadesController.createValidation, CidadesController.create);

export {router}; 