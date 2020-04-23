import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors'

const root = path.join.bind(this, __dirname, '../');
dotenv.config({ path: root('.env') });

const app = express();
app.use(cors());

app.get('/',(request, response)=> {
    response.send('Hello World!');
});

app.listen(process.env.PORT, () => {
    console.log(`Express server run http://${process.env.HOST}:${process.env.PORT}`);
});
