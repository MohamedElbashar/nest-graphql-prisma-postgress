import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Tweet } from './tweet.model';
import { Followers } from './follower.model';

@ObjectType()
export class User {
  @Field((type) => Int)
  id: number;

  @Field((type) => String)
  username: string;

  @Field((type) => String)
  password: string;

  @Field((type) => [Tweet])
  Tweet: Tweet[];

  @Field((type) => [Followers])
  Followers: Followers[];

  @Field((type) => [Followers])
  Followee: Followers[];
}
