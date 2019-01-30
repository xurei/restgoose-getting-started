import { Typegoose, prop, arrayProp, Ref } from 'typegoose';
import { all, and, asFilter, create, one, remove, rest, RestError, update } from '@xureilab/restgoose';
import { Movie } from './movie';
import { keepfields } from './keepfields';
import { addPagination } from './addpagination';
import { verifyToken } from './verifytoken';

@rest({
    route: '/actors',
    methods: [
        all({     //GET    /actors
            preFetch: addPagination,
            preSend: keepfields('_id', 'title'),
        }),
        one(),    //GET    /actors/:id
        create({  //POST   /actors
            preFetch: verifyToken
        }),
        update({  //PATCH  /actors/:id
            preFetch: verifyToken
        }),
        remove({  //DElETE /actors/:id
            preFetch: verifyToken
        }),
    ],
})
export class Actor extends Typegoose {
    @prop({ required: true })
    name: string;

    @arrayProp({ itemsRef: { name: Movie } })
    movies?: Ref<Movie>[];
}
