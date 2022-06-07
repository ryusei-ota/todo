import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model';
import { UserService } from './user.service';
import { CreateOneUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/create-one-user.args';
import { DeleteOneUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/delete-one-user.args';
import { Todo } from 'src/@generated/prisma-nestjs-graphql/todo/todo.model';
import { FindManyUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/find-many-user.args';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  //登録
  @Mutation(() => User, { name: 'createUser' })
  async createUser(@Args() args: CreateOneUserArgs) {
    return this.userService.createUser(args);
  }

  //削除
  @Mutation(() => User, { name: 'deleteUser' })
  async deleteUser(@Args() args: DeleteOneUserArgs) {
    return this.userService.deleteUser(args);
  }

  //全件
  @Query(() => [User])
  async findAllUser(@Args() args: FindManyUserArgs) {
    return await this.userService.findAllUser(args);
  }
}
