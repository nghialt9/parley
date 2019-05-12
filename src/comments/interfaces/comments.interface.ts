import { Document } from 'mongoose';

export interface Comments extends Document {
    readonly author: string;
    readonly text: string;
}