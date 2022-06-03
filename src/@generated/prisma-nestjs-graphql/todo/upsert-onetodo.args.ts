import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { todoWhereUniqueInput } from './todo-where-unique.input';
import { Type } from 'class-transformer';
import { todoCreateInput } from './todo-create.input';
import { todoUpdateInput } from './todo-update.input';

@ArgsType()
export class UpsertOnetodoArgs {

    @Field(() => todoWhereUniqueInput, {nullable:false})
    @Type(() => todoWhereUniqueInput)
    where!: todoWhereUniqueInput;

    @Field(() => todoCreateInput, {nullable:false})
    @Type(() => todoCreateInput)
    create!: todoCreateInput;

    @Field(() => todoUpdateInput, {nullable:false})
    @Type(() => todoUpdateInput)
    update!: todoUpdateInput;
}
