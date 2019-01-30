import { Request } from 'express';
import { Typegoose } from 'typegoose';

export function keepfields<T extends Typegoose>(...fieldNames: string[]) {
    return async function(req: Request, entity: T) {
        const out = {};
        fieldNames.forEach(name => {
            out[name] = entity[name];
        });
        return out as T;
    };
}
