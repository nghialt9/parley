import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comments.dto';
import { CommentsService } from './comments.service';
import { Comments as CommentInterface } from './interfaces/comments.interface';

@Controller('comments')
export class CommentsController {
    constructor(private readonly commentsService: CommentsService) { }

    @Post()
    async createComment(@Body() createCommentDto: CreateCommentDto) {
        this.commentsService.createComment(createCommentDto);
        return "ok";
    }

    @Get()
    async findCommentAll(): Promise<CommentInterface[]> {
        return this.commentsService.findCommentAll();
    }
}