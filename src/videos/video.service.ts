import { Injectable } from '@nestjs/common';
import { Video } from '../graphql';

@Injectable()
export class VideoService {
  private readonly videos: Video[] = [];

  findAll(): Video[] {
    return this.videos;
  }

  // create(video: Video): Video {}
}
