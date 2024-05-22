import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScriptStatus } from './script-status.enum';

@InputType()
export class NestedEnumScriptStatusNullableFilter {

    @Field(() => ScriptStatus, {nullable:true})
    equals?: keyof typeof ScriptStatus;

    @Field(() => [ScriptStatus], {nullable:true})
    in?: Array<keyof typeof ScriptStatus>;

    @Field(() => [ScriptStatus], {nullable:true})
    notIn?: Array<keyof typeof ScriptStatus>;

    @Field(() => NestedEnumScriptStatusNullableFilter, {nullable:true})
    not?: NestedEnumScriptStatusNullableFilter;
}
