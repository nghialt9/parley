import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { commentProviders } from './comments.providers';
import { DatabaseModule } from '../database/database.module';
import { CommentsController } from './comments.controller';

@Module({
    imports: [DatabaseModule],
    controllers: [ CommentsController ],
    providers: [
        CommentsService,
        ...commentProviders,
    ],
})
export class CommentsModule { }