import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { UserResolver } from './user.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [UsersService, UserResolver, PrismaService],
  exports: [UsersService],
})
export class UserModule {}
