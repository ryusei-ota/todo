import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

@ObjectType()
export class todo {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    todo!: string;

    @Field(() => Date, {nullable:false})
    limit!: Date;

    @Field(() => Boolean, {nullable:false})
    done_at!: boolean;
}
