import { Injectable } from '@nestjs/common';
import { CreateOneUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/create-one-user.args';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService) {}
    //登録  
    async createUser(args: CreateOneUserArgs){
      return this.prisma.user.create(args);
  }
}
sa