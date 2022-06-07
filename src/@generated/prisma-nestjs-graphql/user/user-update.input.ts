import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoUpdateManyWithoutUserInput } from '../todo/todo-update-many-without-user.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class UserUpdateInput {

    @Field(() => TodoUpdateManyWithoutUserInput, {nullable:true})
    todo?: TodoUpdateManyWithoutUserInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
