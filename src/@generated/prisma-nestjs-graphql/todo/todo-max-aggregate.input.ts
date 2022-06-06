import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TodoMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    todo?: true;

    @Field(() => Boolean, {nullable:true})
    limit?: true;

    @Field(() => Boolean, {nullable:true})
    done_at?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;
}
