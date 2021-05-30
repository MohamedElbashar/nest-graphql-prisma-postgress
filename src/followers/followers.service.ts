import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Followers, Prisma } from '@prisma/client';

@Injectable()
export class FollowersService {
  constructor(private prisma: PrismaService) {}

  async follower(
    followersWhereUniqueInput: Prisma.FollowersWhereUniqueInput,
  ): Promise<Followers | null> {
    return this.prisma.followers.findUnique({
      where: followersWhereUniqueInput,
    });
  }

  async followers(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.FollowersWhereUniqueInput;
    where?: Prisma.FollowersWhereInput;
    orderBy?: Prisma.FollowersOrderByInput;
  }): Promise<Followers[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.followers.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createFollower(data: Prisma.FollowersCreateInput): Promise<Followers> {
    return this.prisma.followers.create({
      data,
    });
  }

  async updateFollower(params: {
    where: Prisma.FollowersWhereUniqueInput;
    data: Prisma.FollowersUpdateInput;
  }): Promise<Followers> {
    const { where, data } = params;
    return this.prisma.followers.update({
      data,
      where,
    });
  }

  async deleteFollower(
    where: Prisma.FollowersWhereUniqueInput,
  ): Promise<Followers> {
    return this.prisma.followers.delete({
      where,
    });
  }
}
