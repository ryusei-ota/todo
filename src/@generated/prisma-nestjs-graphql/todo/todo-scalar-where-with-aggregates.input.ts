import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class todoScalarWhereWithAggregatesInput {

    @Field(() => [todoScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<todoScalarWhereWithAggregatesInput>;

    @Field(() => [todoScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<todoScalarWhereWithAggregatesInput>;

    @Field(() => [todoScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<todoScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    todo?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    limit?: DateTimeWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    done_at?: BoolWithAggregatesFilter;
}
