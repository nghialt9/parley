import { Controller, Get, Post, Body, Param, Res } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { LoginService } from './login.service';
import { Login } from './interfaces/login.interface';

@Controller('login')
export class LoginController {
    constructor(private readonly loginService: LoginService) { }

    @Post()
    async createLogin(@Body() CreateLoginDto: CreateLoginDto) {
        this.loginService.createLogin(CreateLoginDto);
        return "ok";
    }

    @Get('/user')
    async findLogin(@Body() login: CreateLoginDto) {
        // const result = this.loginService.findUsers();
        // const check = result.then((a) => a.filter(b =>
        //     b.username === login.username &&
        //     b.password === login.password))
        return this.loginService.findUsers();
    }

    @Get(':name')
    async findLogin1(@Param('name') name) {
        const result = this.loginService.findUsers();
        const check = result.then((a) => a.filter(b => b.username === name).length > 0 ? "ok":"nok")
        return check;
    }

    @Get(':id')
    async findLogin2( @Param('id') id): Promise<Login> {
        return this.loginService.findUser(id);
    }
}