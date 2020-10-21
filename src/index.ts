import express from 'express';
import { PORT } from './config/constants';
import { WeatherRouter } from './routes';
import path from 'path';

const STATIC = path.resolve(__dirname, '../src/client/build');
const INDEX = path.resolve(STATIC, 'index.html');

const app = express();



app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.use('/weather', WeatherRouter);

app.use(express.static(STATIC));

app.get('*', (req, res) => {
    res.sendFile(INDEX);
});


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});


