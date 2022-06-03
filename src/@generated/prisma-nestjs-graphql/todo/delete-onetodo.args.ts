import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { todoWhereUniqueInput } from './todo-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnetodoArgs {

    @Field(() => todoWhereUniqueInput, {nullable:false})
    @Type(() => todoWhereUniqueInput)
    where!: todoWhereUniqueInput;
}
