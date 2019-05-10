import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common'; // not use Component

import { Post, Login } from './interfaces/post.interface';
import { CreatePostDto, CreateLoginDto } from './dto/create-post.dto';
import { POST_MODEL_PROVIDER, LOGIN_MODEL_PROVIDER } from '../constants';

@Injectable()
export class PostsService {
    constructor(
        @Inject(POST_MODEL_PROVIDER) private readonly postModel: Model<Post>,
        @Inject(LOGIN_MODEL_PROVIDER) private readonly loginModel: Model<Login>
        ) { }

    async createPost(createPostDto: CreatePostDto): Promise<Post> {
        const createdPost = new this.postModel(createPostDto);
        return await createdPost.save();
    }

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

    async findPostAll(): Promise<Post[]> {
        return await this.postModel.find().exec();
    }
}