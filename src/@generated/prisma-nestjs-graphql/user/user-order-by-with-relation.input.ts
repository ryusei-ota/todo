import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { TodoOrderByRelationAggregateInput } from '../todo/todo-order-by-relation-aggregate.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => TodoOrderByRelationAggregateInput, {nullable:true})
    todo?: TodoOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;
}
