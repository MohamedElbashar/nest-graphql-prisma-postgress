import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { FollowersService } from 'src/followers/followers.service';
import { TweetService } from 'src/tweet/tweet.service';
import { GetUsersArgs } from './dto/args/get-users.args';
import { User } from './models/user.model';
import { UserService } from './users.service';
import { User as UserModel } from '@prisma/client';
import { CreateUserInput } from './dto/input/create-user.input';
import { UpdateUserInput } from './dto/input/update-user.input';

@Resolver((of) => User)
export class UserResolver {
  constructor(
    private usersService: UserService,
    private tweetsService: TweetService,
    private followerService: FollowersService,
  ) {}

  @Query((returns) => User, { name: 'user' })
  async user(@Args('id', { type: () => Int }) id: number): Promise<UserModel> {
    return this.usersService.user({ id: Number(id) });
  }

  @Query((returns) => [User], { name: 'users' })
  async users(@Args() getUsersArgs: GetUsersArgs): Promise<UserModel[]> {
    return this.usersService.users({});
  }

  @ResolveField()
  async tweets(@Parent() user: User) {
    const { id } = user;
    return this.tweetsService.tweets({ where: { id: id } });
  }

  @ResolveField()
  async followers(@Parent() user: User) {
    const { id } = user;
    return this.followerService.followers({ where: { id: id } });
  }

  @Mutation((returns) => User)
  async createUser(
    @Args('createUserData') createUserData: CreateUserInput,
  ): Promise<UserModel> {
    return this.usersService.createUser(createUserData);
  }

  @Mutation((returns) => User)
  async updateUser(
    @Args('updateUserData') updateUserData: UpdateUserInput,
  ): Promise<UserModel> {
    return this.usersService.updateUser(where:{User.id:updateUserData.id});
  }
}
