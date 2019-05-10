import { Document } from 'mongoose';

export interface Post extends Document {
    readonly title: string;
    readonly content: string;
    readonly userId: string;
}

export interface Login extends Document {
    readonly username: string;
    readonly password: string;
}