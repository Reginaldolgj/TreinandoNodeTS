import { Request, Response } from 'express';
import * as yup from 'yup';

import { validation } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';

interface IQueryProps {
  page?: number;
  limit?: number;
  filter?: string;
}
export const getAllValidation = validation((getSchema) => ({
	body: getSchema<IQueryProps>(yup.object().shape({
		page: yup.number().optional().moreThan(0),
		limit: yup.number().optional().moreThan(0),
		filter: yup.string().optional(),
	})),
}));
export const GetAll = async (req: Request<{}, {}, {}, IQueryProps>, res: Response) => {
	console.log(req.query);


	return res.send(StatusCodes.INTERNAL_SERVER_ERROR).send('nOT IMPLEMENTS');
};