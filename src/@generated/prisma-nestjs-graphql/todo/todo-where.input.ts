import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class TodoWhereInput {

    @Field(() => [TodoWhereInput], {nullable:true})
    AND?: Array<TodoWhereInput>;

    @Field(() => [TodoWhereInput], {nullable:true})
    OR?: Array<TodoWhereInput>;

    @Field(() => [TodoWhereInput], {nullable:true})
    NOT?: Array<TodoWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    todo?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    limit?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    done_at?: BoolFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    userId?: IntNullableFilter;
}
