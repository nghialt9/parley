import { Connection } from 'mongoose';

import { PostSchema, LoginSchema } from './posts.schema';
import { POST_MODEL_PROVIDER, DB_PROVIDER, LOGIN_MODEL_PROVIDER } from '../constants';

export const postsProviders = [
    {
        provide: POST_MODEL_PROVIDER,
        useFactory: (connection: Connection) => connection.model('Post', PostSchema),
        inject: [DB_PROVIDER],
    },
];

export const loginProviders = [
    {
        provide: LOGIN_MODEL_PROVIDER,
        useFactory: (connection: Connection) => connection.model('Login', LoginSchema),
        inject: [DB_PROVIDER],
    },
];