import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoUpdateManyWithoutUserInput } from '../todo/todo-update-many-without-user.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class UserUpdateInput {

    @Field(() => TodoUpdateManyWithoutUserInput, {nullable:true})
    todo?: TodoUpdateManyWithoutUserInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
