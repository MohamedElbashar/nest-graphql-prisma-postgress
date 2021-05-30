import { Field, Int, ObjectType } from '@nestjs/graphql';
@ObjectType()
export class Followers {
  @Field((type) => Int)
  id: number;

  @Field((type) => Int)
  userId: number;

  @Field((type) => Int)
  followerId: number;
}
