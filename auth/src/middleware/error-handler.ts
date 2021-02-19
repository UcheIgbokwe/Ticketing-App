import { Request, Response, NextFunction } from 'express';
import { DatabaseConnectionError } from './../errors/database-connection-error';
import { RequestValidationError } from './../errors/request-validation-error';


export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    //console.log('Something went wrong', err);
    if (err instanceof RequestValidationError){
        const formattedError = err.errors.map(error => {
            return { message: error.msg, field: error.param };
        });
        return res.status(400).send({ errors: formattedError });
    }

    if (err instanceof DatabaseConnectionError) {
        console.log('handling this error as a db connection error');
    }

    res.status(400).send({
        message: err.message
    });
};