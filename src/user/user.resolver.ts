import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model';
import { UsersService } from './user.service';
import * as bcrypt from 'bcrypt';
import { CreateOneUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/create-one-user.args';
import { DeleteOneUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/delete-one-user.args';
import { FindManyUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/find-many-user.args';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UsersService) {}

  //登録
  @Mutation(() => User, { name: 'createUser' })
  async createUser(@Args() args: CreateOneUserArgs) {
    args.data.password = await bcrypt.hash(args.data.password, 10);
    return this.userService.createUser(args);
  }

  //削除
  @Mutation(() => User, { name: 'deleteUser' })
  async deleteUser(@Args() args: DeleteOneUserArgs) {
    return this.userService.deleteUser(args);
  }

  //全件
  @Query(() => [User])
  @UseGuards(JwtAuthGuard)
  async findAllUser(@Args() args: FindManyUserArgs) {
    return await this.userService.findAllUser(args);
  }
}
