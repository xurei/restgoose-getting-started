import { Request } from 'express';
import { RestError } from '@xureilab/restgoose';

export async function verifyToken(req: Request): Promise<boolean> {
    if (!(req.headers && req.headers['authorization'])) {
        throw new RestError(401, { code: 'UNAUTHENTICATED' });
    }
    else {
        if (req.headers['authorization'] === 'super-secret') {
            return true;
        }
        else {
            throw new RestError(401, { code: 'UNAUTHENTICATED' });
        }
    }
}
