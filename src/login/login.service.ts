import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common'; // not use Component

import { Login } from './interfaces/login.interface';
import { CreateLoginDto } from './dto/create-login.dto';
import { LOGIN_MODEL_PROVIDER } from '../constants';

@Injectable()
export class LoginService {
    constructor(
        @Inject(LOGIN_MODEL_PROVIDER) private readonly loginModel: Model<Login>
        ) { }
    async createLogin(createLoginDto: CreateLoginDto): Promise<Login> {
        const createdLogin = new this.loginModel(createLoginDto);
        return await createdLogin.save();
    }

    async findUsers(): Promise<Login[]> {
        return await this.loginModel.find().exec();
    }

    async findUser(id): Promise<Login> {
        return await this.loginModel.findById(id).exec();
    }
}