import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PostsModule } from './posts/posts.module';
import { AppService } from './app.service';
import { CommentsModule } from './comments/comments.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [PostsModule, CommentsModule, LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
