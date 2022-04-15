import { Injectable } from '@nestjs/common';
import { Post } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { NewPost, UpdatePost } from 'src/types';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}
  async post(id: string): Promise<Post | null> {
    return this.prisma.post.findUnique({
      where: {
        id: parseInt(id),
      },
    });
  }

  async posts(): Promise<Post[]> {
    return this.prisma.post.findMany({});
  }

  async createPost(data: NewPost): Promise<Post> {
    return this.prisma.post.create({
      data,
    });
  }

  async updatePost(params: UpdatePost): Promise<Post> {
    const { id, published, title, content } = params;
    const data = { published, title, content };
    return this.prisma.post.update({
      where: {
        id: parseInt(id),
      },
      data,
    });
  }

  async deletePost(id: string): Promise<Post> {
    return this.prisma.post.delete({
      where: {
        id: parseInt(id),
      },
    });
  }
}
