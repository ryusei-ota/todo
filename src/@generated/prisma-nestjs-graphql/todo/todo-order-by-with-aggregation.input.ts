import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { todoCountOrderByAggregateInput } from './todo-count-order-by-aggregate.input';
import { todoAvgOrderByAggregateInput } from './todo-avg-order-by-aggregate.input';
import { todoMaxOrderByAggregateInput } from './todo-max-order-by-aggregate.input';
import { todoMinOrderByAggregateInput } from './todo-min-order-by-aggregate.input';
import { todoSumOrderByAggregateInput } from './todo-sum-order-by-aggregate.input';

@InputType()
export class todoOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    todo?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    limit?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    done_at?: keyof typeof SortOrder;

    @Field(() => todoCountOrderByAggregateInput, {nullable:true})
    _count?: todoCountOrderByAggregateInput;

    @Field(() => todoAvgOrderByAggregateInput, {nullable:true})
    _avg?: todoAvgOrderByAggregateInput;

    @Field(() => todoMaxOrderByAggregateInput, {nullable:true})
    _max?: todoMaxOrderByAggregateInput;

    @Field(() => todoMinOrderByAggregateInput, {nullable:true})
    _min?: todoMinOrderByAggregateInput;

    @Field(() => todoSumOrderByAggregateInput, {nullable:true})
    _sum?: todoSumOrderByAggregateInput;
}
