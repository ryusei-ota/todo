import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { todoUpdateInput } from './todo-update.input';
import { Type } from 'class-transformer';
import { todoWhereUniqueInput } from './todo-where-unique.input';

@ArgsType()
export class UpdateOnetodoArgs {

    @Field(() => todoUpdateInput, {nullable:false})
    @Type(() => todoUpdateInput)
    data!: todoUpdateInput;

    @Field(() => todoWhereUniqueInput, {nullable:false})
    @Type(() => todoWhereUniqueInput)
    where!: todoWhereUniqueInput;
}
