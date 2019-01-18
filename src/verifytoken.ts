import { Request } from 'express';
import { RestError } from '@xureilab/restgoose';

export async function verifyToken(req: Request): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
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
        }
    });
}
