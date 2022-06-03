import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class todoWhereInput {

    @Field(() => [todoWhereInput], {nullable:true})
    AND?: Array<todoWhereInput>;

    @Field(() => [todoWhereInput], {nullable:true})
    OR?: Array<todoWhereInput>;

    @Field(() => [todoWhereInput], {nullable:true})
    NOT?: Array<todoWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    todo?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    limit?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    done_at?: BoolFilter;
}
