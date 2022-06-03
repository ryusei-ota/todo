import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { todoWhereInput } from './todo-where.input';
import { Type } from 'class-transformer';
import { todoOrderByWithAggregationInput } from './todo-order-by-with-aggregation.input';
import { TodoScalarFieldEnum } from '../prisma/todo-scalar-field.enum';
import { todoScalarWhereWithAggregatesInput } from './todo-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class todoGroupByArgs {

    @Field(() => todoWhereInput, {nullable:true})
    @Type(() => todoWhereInput)
    where?: todoWhereInput;

    @Field(() => [todoOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<todoOrderByWithAggregationInput>;

    @Field(() => [TodoScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof TodoScalarFieldEnum>;

    @Field(() => todoScalarWhereWithAggregatesInput, {nullable:true})
    having?: todoScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
