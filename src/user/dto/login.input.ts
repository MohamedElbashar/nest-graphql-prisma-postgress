import { IsNotEmpty, MinLength, IsEmail, IsEnum } from 'class-validator';

enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

export class UserDto {
  @IsNotEmpty()
  readonly username: string;

  @IsNotEmpty()
  @MinLength(6)
  readonly password: string;

  readonly gender: Gender;
}
