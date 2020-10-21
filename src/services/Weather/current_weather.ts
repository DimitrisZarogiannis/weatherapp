import { API_KEY } from '../../config/constants';
import { fetch } from 'cross-fetch';
import {IWeather} from '../../interfaces/index';


export class get_currentWeather {

    private api_key: string;

    constructor() {
        this.api_key = API_KEY;
    }

    public async fetch_weather(city: string):Promise<IWeather>{
    
        const api_Url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.api_key}`;

        const result = await fetch(api_Url)
        const resultJson = await result.json();

        const weather: IWeather = {
                location: city,
                temperature: Math.round(resultJson['main']['temp'] -273.15),
                description: resultJson["weather"][0]['main']
        }
        return weather;
    }


}