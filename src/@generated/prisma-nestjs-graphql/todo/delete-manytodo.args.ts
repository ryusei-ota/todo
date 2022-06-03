import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { todoWhereInput } from './todo-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManytodoArgs {

    @Field(() => todoWhereInput, {nullable:true})
    @Type(() => todoWhereInput)
    where?: todoWhereInput;
}
