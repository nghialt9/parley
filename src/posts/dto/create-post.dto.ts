export class CreatePostDto {
    readonly title: string;
    readonly content: string;
    readonly userId: string;
}

export class CreateLoginDto {
    readonly username: string;
    readonly password: string;
}