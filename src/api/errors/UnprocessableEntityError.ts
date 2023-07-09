/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../errors";
import * as Optimizely from "..";

export class UnprocessableEntityError extends errors.OptimizelyError {
    constructor(body: Optimizely.HttpValidationError) {
        super({
            message: "UnprocessableEntityError",
            statusCode: 422,
            body: body,
        });
        Object.setPrototypeOf(this, UnprocessableEntityError.prototype);
    }
}