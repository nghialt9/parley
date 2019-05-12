import { Connection } from 'mongoose';

import { LoginSchema } from './login.schema';
import { DB_PROVIDER, LOGIN_MODEL_PROVIDER } from '../constants';

export const loginProviders = [
    {
        provide: LOGIN_MODEL_PROVIDER,
        useFactory: (connection: Connection) => connection.model('Login', LoginSchema),
        inject: [DB_PROVIDER],
    },
];