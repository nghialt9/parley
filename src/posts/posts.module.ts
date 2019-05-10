import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { LoginController } from './login.controller';
import { PostsService } from './posts.service';
import { postsProviders, loginProviders } from './posts.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [PostsController, LoginController],
    providers: [
        PostsService,
        ...postsProviders,
        ...loginProviders,
    ],
})
export class PostsModule { }