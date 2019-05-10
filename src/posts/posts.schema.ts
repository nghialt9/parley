import * as mongoose from 'mongoose';

export const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: false,
    },
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
    }
});

export const LoginSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});