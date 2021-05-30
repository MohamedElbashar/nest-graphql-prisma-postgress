import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Tweet, Prisma } from '@prisma/client';

@Injectable()
export class TweetService {
  constructor(private prisma: PrismaService) {}

  async tweet(
    tweetWhereUniqueInput: Prisma.TweetWhereUniqueInput,
  ): Promise<Tweet | null> {
    return this.prisma.tweet.findUnique({
      where: tweetWhereUniqueInput,
    });
  }

  async tweets(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.TweetWhereUniqueInput;
    where?: Prisma.TweetWhereInput;
    orderBy?: Prisma.TweetOrderByInput;
  }): Promise<Tweet[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.tweet.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createTweet(data: Prisma.TweetCreateInput): Promise<Tweet> {
    return this.prisma.tweet.create({
      data,
    });
  }

  async updateTweet(params: {
    where: Prisma.TweetWhereUniqueInput;
    data: Prisma.TweetUpdateInput;
  }): Promise<Tweet> {
    const { where, data } = params;
    return this.prisma.tweet.update({
      data,
      where,
    });
  }

  async deleteTweet(where: Prisma.TweetWhereUniqueInput): Promise<Tweet> {
    return this.prisma.tweet.delete({
      where,
    });
  }
}
