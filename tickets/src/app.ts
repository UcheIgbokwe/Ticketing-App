import express from 'express';
import { json } from 'body-parser';
import 'express-async-errors';
import cookieSession from 'cookie-session';
import { NotFoundError, errorHandler } from '@jackytickets/common';



const app = express();
//trust traffic coming from proxy NGINX
app.set('trust proxy', true);
app.use(json());
app.use(
    cookieSession({
        signed: false,
        secure: process.env.NODE_ENV !== 'test'
    })
);


app.all('*', async () => {
    throw new NotFoundError();
});

app.use(errorHandler);

export { app };