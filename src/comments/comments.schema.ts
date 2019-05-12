import * as mongoose from 'mongoose';

export const CommentSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    }
});