import { CustomError } from './custom-errors';

export class NotAuthorizedError extends CustomError {
    statusCode = 401;

    constructor() {
        super();

        //Only because we are extending a built in class
        Object.setPrototypeOf(this, NotAuthorizedError.prototype);
    }

    serializeErrors() {
        return [
            { message: 'Not authorized'}
        ];
    }
}