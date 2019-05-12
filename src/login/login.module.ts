import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { loginProviders } from './login.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [LoginController],
    providers: [
        LoginService,
        ...loginProviders,
    ],
})
export class LoginModule { }