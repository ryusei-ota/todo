import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model';
import { UserService } from './user.service';
import { CreateOneUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/create-one-user.args';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService : UserService){}
  
  //登録
  @Mutation(() => User)
  async createTodo(@Args() args: CreateOneUserArgs) {
    return this.userService.createUser(args);
  }
}
