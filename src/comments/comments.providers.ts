import { Connection } from 'mongoose';

import { CommentSchema } from './comments.schema';
import { DB_PROVIDER, COMMENT_MODEL_PROVIDER } from '../constants';

export const commentProviders = [
    {
        provide: COMMENT_MODEL_PROVIDER,
        useFactory: (connection: Connection) => connection.model('Comment', CommentSchema),
        inject: [DB_PROVIDER],
    },
];