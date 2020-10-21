import express, { Request, Response } from 'express';
import { Weather_Controller } from '../../controllers';

export const router = express.Router({
    strict: true
});

router.post('/', (req: Request, res: Response) => {
    Weather_Controller.create(req, res);
});

router.get('/', (req: Request, res: Response) => {
    Weather_Controller.read(req, res);
});

router.patch('/', (req: Request, res: Response) => {
    Weather_Controller.update(req, res);
});

router.delete('/', (req: Request, res: Response) => {
    Weather_Controller.delete(req, res);
});