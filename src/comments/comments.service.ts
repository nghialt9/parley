import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common'; // not use Component

import { Comments } from './interfaces/comments.interface';
import { CreateCommentDto } from './dto/create-comments.dto';
import { COMMENT_MODEL_PROVIDER } from '../constants';

@Injectable()
export class CommentsService {
    constructor(
        @Inject(COMMENT_MODEL_PROVIDER) private readonly commentModel: Model<Comments>
        ) { }

    async createComment(createCommentDto: CreateCommentDto): Promise<Comments> {
        const createComment = new this.commentModel(createCommentDto);
        return await createComment.save();
    }

    async findCommentAll(): Promise<Comments[]> {
        return await this.commentModel.find().exec();
    }
}