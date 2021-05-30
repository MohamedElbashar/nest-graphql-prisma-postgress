import { Field, Int, ObjectType } from '@nestjs/graphql';
import { User } from './user.model';

@ObjectType()
export class Tweet {
  @Field((type) => Int)
  id: number;

  @Field((type) => String)
  content: string;

  @Field((type) => Int)
  userId: number;
}
