import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableEnumBuildStatusFieldUpdateOperationsInput } from '../prisma/nullable-enum-build-status-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ScriptUpdateOneRequiredWithoutBuild_detailNestedInput } from '../script/script-update-one-required-without-build-detail-nested.input';

@InputType()
export class BuildDetailUpdateInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    path?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    bundle?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    priority?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableEnumBuildStatusFieldUpdateOperationsInput, {nullable:true})
    status?: NullableEnumBuildStatusFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    failed_reason?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ScriptUpdateOneRequiredWithoutBuild_detailNestedInput, {nullable:true})
    script?: ScriptUpdateOneRequiredWithoutBuild_detailNestedInput;
}
