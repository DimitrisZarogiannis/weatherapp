import { Request, Response } from 'express';
import { CrudController } from '../CrudController';
import {get_currentWeather} from '../../services';

export class WeatherController extends CrudController {

    constructor(private weather_service = new get_currentWeather()){
        super();       
    }

    public create(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        throw new Error("Method not implemented.");
    }

    // https://localhost:4000/weather?city="Thessaloniki"
    public async read(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): Promise<void> {
        res.json(await this.weather_service.fetch_weather(req.query.city as string));

    }

    public update(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        throw new Error("Method not implemented.");
    }

    public delete(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        throw new Error("Method not implemented.");
    }
}