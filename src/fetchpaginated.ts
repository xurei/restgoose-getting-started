import { Request } from 'express';
import { MiddlewareFetch } from '@xureilab/restgoose/lib/types';
import { Model, Document } from 'mongoose';
import { InstanceType, Typegoose } from 'typegoose';
export declare type Doc<T> = T | InstanceType<T>;

export async function fetchPaginated<T>(req: Request, modelType?: Model<InstanceType<T>>) {
    return modelType.find(); /*
    if (!(req.headers && req.headers['authorization'])) {
        reject(new RestError(401, { code: 'UNAUTHENTICATED' }));
    }
    else {
        if (req.headers['authorization'] === 'super-secret') {
            resolve(true);
        }
        else {
            reject(new RestError(401, { code: 'UNAUTHENTICATED' }));
        }
    }*/
};

