import { Typegoose, prop, arrayProp, Ref } from 'typegoose';
import { all, and, asFilter, create, one, remove, rest, RestError, update } from '@xureilab/restgoose';
import { Movie } from './movie';
import { keepFields } from './keepFields';

@rest({
    route: '/actors',
    methods: [
        all({     //GET    /actors
            preSend: keepFields('_id', 'title'),
        }),
        one(),    //GET    /actors/:id
        create(), //POST   /actors
        update(), //PATCH  /actors/:id
        remove(), //DElETE /actors/:id
    ],
})
export class Actor extends Typegoose {
    @prop({ required: true })
    name: string;

    @arrayProp({ itemsRef: { name: Movie } })
    movies?: Ref<Movie>[];
}
