import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TodoMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    todo?: string;

    @Field(() => Date, {nullable:true})
    limit?: Date | string;

    @Field(() => Boolean, {nullable:true})
    done_at?: boolean;

    @Field(() => Int, {nullable:true})
    userId?: number;
}
