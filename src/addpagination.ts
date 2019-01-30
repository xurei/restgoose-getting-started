import { RestRequest } from '@xureilab/restgoose';

export async function addPagination(req: RestRequest): Promise<boolean> {
    const query = req.query || {};
    const skip = query.page * 20;

    req.restgoose.options = Object.assign({}, req.restgoose.options, {
        skip: skip,
        limit: 20
    });
    return true;
}
