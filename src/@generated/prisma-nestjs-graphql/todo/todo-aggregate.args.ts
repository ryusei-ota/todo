import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { todoWhereInput } from './todo-where.input';
import { Type } from 'class-transformer';
import { todoOrderByWithRelationInput } from './todo-order-by-with-relation.input';
import { todoWhereUniqueInput } from './todo-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class todoAggregateArgs {

    @Field(() => todoWhereInput, {nullable:true})
    @Type(() => todoWhereInput)
    where?: todoWhereInput;

    @Field(() => [todoOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<todoOrderByWithRelationInput>;

    @Field(() => todoWhereUniqueInput, {nullable:true})
    cursor?: todoWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
