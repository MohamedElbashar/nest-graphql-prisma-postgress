import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './users/users.module';
import { TweetModule } from './tweet/tweet.module';
import { FollowersModule } from './followers/followers.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      debug: true,
      playground: true,
    }),
    AuthModule,
    UserModule,
    TweetModule,
    FollowersModule,
  ],
})
export class AppModule {}
