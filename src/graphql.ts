
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class VideoInput {
    title: string;
    url: string;
    authorId: string;
}

export class Video {
    id: string;
    title: string;
    url: string;
    author: User;
}

export class User {
    id: string;
    name: string;
}

export abstract class IQuery {
    abstract videos(): Video[] | Promise<Video[]>;

    abstract video(id: string): Nullable<Video> | Promise<Nullable<Video>>;

    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createVideo(input: VideoInput): Nullable<Video> | Promise<Nullable<Video>>;

    abstract updateVideo(id: string, input: VideoInput): Nullable<Video> | Promise<Nullable<Video>>;

    abstract deleteVideo(id: string): Nullable<Video> | Promise<Nullable<Video>>;
}

type Nullable<T> = T | null;
