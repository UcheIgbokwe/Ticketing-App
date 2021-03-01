import express, { Request, Response } from 'express';
import { body } from 'express-validator';

const router = express.Router();

router.post('/api/users/signin', 

(req, res) => {
    res.send('You signed in!')
});

export { router as signinRouter };