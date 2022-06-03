import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class todoMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    todo?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    limit?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    done_at?: keyof typeof SortOrder;
}
