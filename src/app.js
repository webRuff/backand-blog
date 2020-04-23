import express from 'express'

const port = 7777;
const app = express();

app.get('/',(request, response)=> {
    response.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
