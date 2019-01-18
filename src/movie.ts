import { Typegoose, prop, arrayProp, Ref } from 'typegoose';
import { Actor } from './actor';
import { all, and, asFilter, create, one, remove, rest, RestError, update } from '@xureilab/restgoose';
import { verifyToken } from './verifytoken';
import { fetchPaginated } from './fetchpaginated';

@rest({
    route: '/movies',
    methods: [
        all({
            fetch: fetchPaginated,
        }),    //GET    /movies
        one(),    //GET    /movies/:id
        create({  //POST   /movies
            preFetch: verifyToken
        }),
        update({  //PATCH  /movies/:id
            preFetch: verifyToken
        }),
        remove({  //DElETE /movies/:id
            preFetch: verifyToken
        }),
    ],
})
export class Movie extends Typegoose {
    @prop({ required: true })
    name: string;

    @prop({ required: true })
    description: string;

    @arrayProp({ itemsRef: { name: Actor } })
    actors?: Ref<Actor>[];
}
