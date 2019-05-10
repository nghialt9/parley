import { Controller, Get, Post, Body, Param, Res } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';
import { Login } from './interfaces/post.interface';

@Controller('login')
export class LoginController {
    constructor(private readonly postsService: PostsService) { }

    @Post()
    async createLogin(@Body() CreateLoginDto: CreateLoginDto) {
        this.postsService.createLogin(CreateLoginDto);
        return "ok";
    }

    @Get('/user')
    async findLogin(@Body() login: CreateLoginDto) {
        // const result = this.postsService.findUsers();
        // const check = result.then((a) => a.filter(b =>
        //     b.username === login.username &&
        //     b.password === login.password))
        return this.postsService.findUsers();
    }

    @Get(':name')
    async findLogin1(@Param('name') name) {
        const result = this.postsService.findUsers();
        const check = result.then((a) => a.filter(b => b.username === name).length > 0 ? "ok":"nok")
        return check;
    }

    @Get(':id')
    async findLogin2( @Param('id') id): Promise<Login> {
        return this.postsService.findUser(id);
    }
}