import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';

@Module({
    providers: [...databaseProviders],// not use components
    exports: [...databaseProviders],
})
export class DatabaseModule { };