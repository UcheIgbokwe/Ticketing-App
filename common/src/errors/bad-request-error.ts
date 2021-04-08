import { CustomError } from './custom-errors';

export class BadRequestError extends CustomError {
    statusCode = 400;

    constructor(public message: string) {
        super();

        //Only because we are extending a built in class
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }

    serializeErrors() {
        return [
            { message: this.message }
        ];
    }
}