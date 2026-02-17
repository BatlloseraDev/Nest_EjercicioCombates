import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserCharacterModel = runtime.Types.Result.DefaultSelection<Prisma.$UserCharacterPayload>;
export type AggregateUserCharacter = {
    _count: UserCharacterCountAggregateOutputType | null;
    _avg: UserCharacterAvgAggregateOutputType | null;
    _sum: UserCharacterSumAggregateOutputType | null;
    _min: UserCharacterMinAggregateOutputType | null;
    _max: UserCharacterMaxAggregateOutputType | null;
};
export type UserCharacterAvgAggregateOutputType = {
    id: number | null;
    userId: number | null;
    characterId: number | null;
    level: number | null;
    experience: number | null;
};
export type UserCharacterSumAggregateOutputType = {
    id: number | null;
    userId: number | null;
    characterId: number | null;
    level: number | null;
    experience: number | null;
};
export type UserCharacterMinAggregateOutputType = {
    id: number | null;
    userId: number | null;
    characterId: number | null;
    level: number | null;
    experience: number | null;
};
export type UserCharacterMaxAggregateOutputType = {
    id: number | null;
    userId: number | null;
    characterId: number | null;
    level: number | null;
    experience: number | null;
};
export type UserCharacterCountAggregateOutputType = {
    id: number;
    userId: number;
    characterId: number;
    level: number;
    experience: number;
    _all: number;
};
export type UserCharacterAvgAggregateInputType = {
    id?: true;
    userId?: true;
    characterId?: true;
    level?: true;
    experience?: true;
};
export type UserCharacterSumAggregateInputType = {
    id?: true;
    userId?: true;
    characterId?: true;
    level?: true;
    experience?: true;
};
export type UserCharacterMinAggregateInputType = {
    id?: true;
    userId?: true;
    characterId?: true;
    level?: true;
    experience?: true;
};
export type UserCharacterMaxAggregateInputType = {
    id?: true;
    userId?: true;
    characterId?: true;
    level?: true;
    experience?: true;
};
export type UserCharacterCountAggregateInputType = {
    id?: true;
    userId?: true;
    characterId?: true;
    level?: true;
    experience?: true;
    _all?: true;
};
export type UserCharacterAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserCharacterWhereInput;
    orderBy?: Prisma.UserCharacterOrderByWithRelationInput | Prisma.UserCharacterOrderByWithRelationInput[];
    cursor?: Prisma.UserCharacterWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserCharacterCountAggregateInputType;
    _avg?: UserCharacterAvgAggregateInputType;
    _sum?: UserCharacterSumAggregateInputType;
    _min?: UserCharacterMinAggregateInputType;
    _max?: UserCharacterMaxAggregateInputType;
};
export type GetUserCharacterAggregateType<T extends UserCharacterAggregateArgs> = {
    [P in keyof T & keyof AggregateUserCharacter]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUserCharacter[P]> : Prisma.GetScalarType<T[P], AggregateUserCharacter[P]>;
};
export type UserCharacterGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserCharacterWhereInput;
    orderBy?: Prisma.UserCharacterOrderByWithAggregationInput | Prisma.UserCharacterOrderByWithAggregationInput[];
    by: Prisma.UserCharacterScalarFieldEnum[] | Prisma.UserCharacterScalarFieldEnum;
    having?: Prisma.UserCharacterScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCharacterCountAggregateInputType | true;
    _avg?: UserCharacterAvgAggregateInputType;
    _sum?: UserCharacterSumAggregateInputType;
    _min?: UserCharacterMinAggregateInputType;
    _max?: UserCharacterMaxAggregateInputType;
};
export type UserCharacterGroupByOutputType = {
    id: number;
    userId: number;
    characterId: number;
    level: number;
    experience: number;
    _count: UserCharacterCountAggregateOutputType | null;
    _avg: UserCharacterAvgAggregateOutputType | null;
    _sum: UserCharacterSumAggregateOutputType | null;
    _min: UserCharacterMinAggregateOutputType | null;
    _max: UserCharacterMaxAggregateOutputType | null;
};
type GetUserCharacterGroupByPayload<T extends UserCharacterGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserCharacterGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserCharacterGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserCharacterGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserCharacterGroupByOutputType[P]>;
}>>;
export type UserCharacterWhereInput = {
    AND?: Prisma.UserCharacterWhereInput | Prisma.UserCharacterWhereInput[];
    OR?: Prisma.UserCharacterWhereInput[];
    NOT?: Prisma.UserCharacterWhereInput | Prisma.UserCharacterWhereInput[];
    id?: Prisma.IntFilter<"UserCharacter"> | number;
    userId?: Prisma.IntFilter<"UserCharacter"> | number;
    characterId?: Prisma.IntFilter<"UserCharacter"> | number;
    level?: Prisma.IntFilter<"UserCharacter"> | number;
    experience?: Prisma.IntFilter<"UserCharacter"> | number;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    character?: Prisma.XOR<Prisma.CharacterScalarRelationFilter, Prisma.CharacterWhereInput>;
    battles?: Prisma.BattleParticipantListRelationFilter;
};
export type UserCharacterOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    characterId?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    experience?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    character?: Prisma.CharacterOrderByWithRelationInput;
    battles?: Prisma.BattleParticipantOrderByRelationAggregateInput;
};
export type UserCharacterWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.UserCharacterWhereInput | Prisma.UserCharacterWhereInput[];
    OR?: Prisma.UserCharacterWhereInput[];
    NOT?: Prisma.UserCharacterWhereInput | Prisma.UserCharacterWhereInput[];
    userId?: Prisma.IntFilter<"UserCharacter"> | number;
    characterId?: Prisma.IntFilter<"UserCharacter"> | number;
    level?: Prisma.IntFilter<"UserCharacter"> | number;
    experience?: Prisma.IntFilter<"UserCharacter"> | number;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    character?: Prisma.XOR<Prisma.CharacterScalarRelationFilter, Prisma.CharacterWhereInput>;
    battles?: Prisma.BattleParticipantListRelationFilter;
}, "id">;
export type UserCharacterOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    characterId?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    experience?: Prisma.SortOrder;
    _count?: Prisma.UserCharacterCountOrderByAggregateInput;
    _avg?: Prisma.UserCharacterAvgOrderByAggregateInput;
    _max?: Prisma.UserCharacterMaxOrderByAggregateInput;
    _min?: Prisma.UserCharacterMinOrderByAggregateInput;
    _sum?: Prisma.UserCharacterSumOrderByAggregateInput;
};
export type UserCharacterScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserCharacterScalarWhereWithAggregatesInput | Prisma.UserCharacterScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserCharacterScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserCharacterScalarWhereWithAggregatesInput | Prisma.UserCharacterScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"UserCharacter"> | number;
    userId?: Prisma.IntWithAggregatesFilter<"UserCharacter"> | number;
    characterId?: Prisma.IntWithAggregatesFilter<"UserCharacter"> | number;
    level?: Prisma.IntWithAggregatesFilter<"UserCharacter"> | number;
    experience?: Prisma.IntWithAggregatesFilter<"UserCharacter"> | number;
};
export type UserCharacterCreateInput = {
    level?: number;
    experience?: number;
    user: Prisma.UserCreateNestedOneWithoutCharactersInput;
    character: Prisma.CharacterCreateNestedOneWithoutInstancesInput;
    battles?: Prisma.BattleParticipantCreateNestedManyWithoutCharacterUsedInput;
};
export type UserCharacterUncheckedCreateInput = {
    id?: number;
    userId: number;
    characterId: number;
    level?: number;
    experience?: number;
    battles?: Prisma.BattleParticipantUncheckedCreateNestedManyWithoutCharacterUsedInput;
};
export type UserCharacterUpdateInput = {
    level?: Prisma.IntFieldUpdateOperationsInput | number;
    experience?: Prisma.IntFieldUpdateOperationsInput | number;
    user?: Prisma.UserUpdateOneRequiredWithoutCharactersNestedInput;
    character?: Prisma.CharacterUpdateOneRequiredWithoutInstancesNestedInput;
    battles?: Prisma.BattleParticipantUpdateManyWithoutCharacterUsedNestedInput;
};
export type UserCharacterUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    characterId?: Prisma.IntFieldUpdateOperationsInput | number;
    level?: Prisma.IntFieldUpdateOperationsInput | number;
    experience?: Prisma.IntFieldUpdateOperationsInput | number;
    battles?: Prisma.BattleParticipantUncheckedUpdateManyWithoutCharacterUsedNestedInput;
};
export type UserCharacterCreateManyInput = {
    id?: number;
    userId: number;
    characterId: number;
    level?: number;
    experience?: number;
};
export type UserCharacterUpdateManyMutationInput = {
    level?: Prisma.IntFieldUpdateOperationsInput | number;
    experience?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type UserCharacterUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    characterId?: Prisma.IntFieldUpdateOperationsInput | number;
    level?: Prisma.IntFieldUpdateOperationsInput | number;
    experience?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type UserCharacterListRelationFilter = {
    every?: Prisma.UserCharacterWhereInput;
    some?: Prisma.UserCharacterWhereInput;
    none?: Prisma.UserCharacterWhereInput;
};
export type UserCharacterOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type UserCharacterCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    characterId?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    experience?: Prisma.SortOrder;
};
export type UserCharacterAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    characterId?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    experience?: Prisma.SortOrder;
};
export type UserCharacterMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    characterId?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    experience?: Prisma.SortOrder;
};
export type UserCharacterMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    characterId?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    experience?: Prisma.SortOrder;
};
export type UserCharacterSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    characterId?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    experience?: Prisma.SortOrder;
};
export type UserCharacterScalarRelationFilter = {
    is?: Prisma.UserCharacterWhereInput;
    isNot?: Prisma.UserCharacterWhereInput;
};
export type UserCharacterCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserCharacterCreateWithoutUserInput, Prisma.UserCharacterUncheckedCreateWithoutUserInput> | Prisma.UserCharacterCreateWithoutUserInput[] | Prisma.UserCharacterUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserCharacterCreateOrConnectWithoutUserInput | Prisma.UserCharacterCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.UserCharacterCreateManyUserInputEnvelope;
    connect?: Prisma.UserCharacterWhereUniqueInput | Prisma.UserCharacterWhereUniqueInput[];
};
export type UserCharacterUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserCharacterCreateWithoutUserInput, Prisma.UserCharacterUncheckedCreateWithoutUserInput> | Prisma.UserCharacterCreateWithoutUserInput[] | Prisma.UserCharacterUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserCharacterCreateOrConnectWithoutUserInput | Prisma.UserCharacterCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.UserCharacterCreateManyUserInputEnvelope;
    connect?: Prisma.UserCharacterWhereUniqueInput | Prisma.UserCharacterWhereUniqueInput[];
};
export type UserCharacterUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserCharacterCreateWithoutUserInput, Prisma.UserCharacterUncheckedCreateWithoutUserInput> | Prisma.UserCharacterCreateWithoutUserInput[] | Prisma.UserCharacterUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserCharacterCreateOrConnectWithoutUserInput | Prisma.UserCharacterCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.UserCharacterUpsertWithWhereUniqueWithoutUserInput | Prisma.UserCharacterUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.UserCharacterCreateManyUserInputEnvelope;
    set?: Prisma.UserCharacterWhereUniqueInput | Prisma.UserCharacterWhereUniqueInput[];
    disconnect?: Prisma.UserCharacterWhereUniqueInput | Prisma.UserCharacterWhereUniqueInput[];
    delete?: Prisma.UserCharacterWhereUniqueInput | Prisma.UserCharacterWhereUniqueInput[];
    connect?: Prisma.UserCharacterWhereUniqueInput | Prisma.UserCharacterWhereUniqueInput[];
    update?: Prisma.UserCharacterUpdateWithWhereUniqueWithoutUserInput | Prisma.UserCharacterUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.UserCharacterUpdateManyWithWhereWithoutUserInput | Prisma.UserCharacterUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.UserCharacterScalarWhereInput | Prisma.UserCharacterScalarWhereInput[];
};
export type UserCharacterUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserCharacterCreateWithoutUserInput, Prisma.UserCharacterUncheckedCreateWithoutUserInput> | Prisma.UserCharacterCreateWithoutUserInput[] | Prisma.UserCharacterUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserCharacterCreateOrConnectWithoutUserInput | Prisma.UserCharacterCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.UserCharacterUpsertWithWhereUniqueWithoutUserInput | Prisma.UserCharacterUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.UserCharacterCreateManyUserInputEnvelope;
    set?: Prisma.UserCharacterWhereUniqueInput | Prisma.UserCharacterWhereUniqueInput[];
    disconnect?: Prisma.UserCharacterWhereUniqueInput | Prisma.UserCharacterWhereUniqueInput[];
    delete?: Prisma.UserCharacterWhereUniqueInput | Prisma.UserCharacterWhereUniqueInput[];
    connect?: Prisma.UserCharacterWhereUniqueInput | Prisma.UserCharacterWhereUniqueInput[];
    update?: Prisma.UserCharacterUpdateWithWhereUniqueWithoutUserInput | Prisma.UserCharacterUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.UserCharacterUpdateManyWithWhereWithoutUserInput | Prisma.UserCharacterUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.UserCharacterScalarWhereInput | Prisma.UserCharacterScalarWhereInput[];
};
export type UserCharacterCreateNestedManyWithoutCharacterInput = {
    create?: Prisma.XOR<Prisma.UserCharacterCreateWithoutCharacterInput, Prisma.UserCharacterUncheckedCreateWithoutCharacterInput> | Prisma.UserCharacterCreateWithoutCharacterInput[] | Prisma.UserCharacterUncheckedCreateWithoutCharacterInput[];
    connectOrCreate?: Prisma.UserCharacterCreateOrConnectWithoutCharacterInput | Prisma.UserCharacterCreateOrConnectWithoutCharacterInput[];
    createMany?: Prisma.UserCharacterCreateManyCharacterInputEnvelope;
    connect?: Prisma.UserCharacterWhereUniqueInput | Prisma.UserCharacterWhereUniqueInput[];
};
export type UserCharacterUncheckedCreateNestedManyWithoutCharacterInput = {
    create?: Prisma.XOR<Prisma.UserCharacterCreateWithoutCharacterInput, Prisma.UserCharacterUncheckedCreateWithoutCharacterInput> | Prisma.UserCharacterCreateWithoutCharacterInput[] | Prisma.UserCharacterUncheckedCreateWithoutCharacterInput[];
    connectOrCreate?: Prisma.UserCharacterCreateOrConnectWithoutCharacterInput | Prisma.UserCharacterCreateOrConnectWithoutCharacterInput[];
    createMany?: Prisma.UserCharacterCreateManyCharacterInputEnvelope;
    connect?: Prisma.UserCharacterWhereUniqueInput | Prisma.UserCharacterWhereUniqueInput[];
};
export type UserCharacterUpdateManyWithoutCharacterNestedInput = {
    create?: Prisma.XOR<Prisma.UserCharacterCreateWithoutCharacterInput, Prisma.UserCharacterUncheckedCreateWithoutCharacterInput> | Prisma.UserCharacterCreateWithoutCharacterInput[] | Prisma.UserCharacterUncheckedCreateWithoutCharacterInput[];
    connectOrCreate?: Prisma.UserCharacterCreateOrConnectWithoutCharacterInput | Prisma.UserCharacterCreateOrConnectWithoutCharacterInput[];
    upsert?: Prisma.UserCharacterUpsertWithWhereUniqueWithoutCharacterInput | Prisma.UserCharacterUpsertWithWhereUniqueWithoutCharacterInput[];
    createMany?: Prisma.UserCharacterCreateManyCharacterInputEnvelope;
    set?: Prisma.UserCharacterWhereUniqueInput | Prisma.UserCharacterWhereUniqueInput[];
    disconnect?: Prisma.UserCharacterWhereUniqueInput | Prisma.UserCharacterWhereUniqueInput[];
    delete?: Prisma.UserCharacterWhereUniqueInput | Prisma.UserCharacterWhereUniqueInput[];
    connect?: Prisma.UserCharacterWhereUniqueInput | Prisma.UserCharacterWhereUniqueInput[];
    update?: Prisma.UserCharacterUpdateWithWhereUniqueWithoutCharacterInput | Prisma.UserCharacterUpdateWithWhereUniqueWithoutCharacterInput[];
    updateMany?: Prisma.UserCharacterUpdateManyWithWhereWithoutCharacterInput | Prisma.UserCharacterUpdateManyWithWhereWithoutCharacterInput[];
    deleteMany?: Prisma.UserCharacterScalarWhereInput | Prisma.UserCharacterScalarWhereInput[];
};
export type UserCharacterUncheckedUpdateManyWithoutCharacterNestedInput = {
    create?: Prisma.XOR<Prisma.UserCharacterCreateWithoutCharacterInput, Prisma.UserCharacterUncheckedCreateWithoutCharacterInput> | Prisma.UserCharacterCreateWithoutCharacterInput[] | Prisma.UserCharacterUncheckedCreateWithoutCharacterInput[];
    connectOrCreate?: Prisma.UserCharacterCreateOrConnectWithoutCharacterInput | Prisma.UserCharacterCreateOrConnectWithoutCharacterInput[];
    upsert?: Prisma.UserCharacterUpsertWithWhereUniqueWithoutCharacterInput | Prisma.UserCharacterUpsertWithWhereUniqueWithoutCharacterInput[];
    createMany?: Prisma.UserCharacterCreateManyCharacterInputEnvelope;
    set?: Prisma.UserCharacterWhereUniqueInput | Prisma.UserCharacterWhereUniqueInput[];
    disconnect?: Prisma.UserCharacterWhereUniqueInput | Prisma.UserCharacterWhereUniqueInput[];
    delete?: Prisma.UserCharacterWhereUniqueInput | Prisma.UserCharacterWhereUniqueInput[];
    connect?: Prisma.UserCharacterWhereUniqueInput | Prisma.UserCharacterWhereUniqueInput[];
    update?: Prisma.UserCharacterUpdateWithWhereUniqueWithoutCharacterInput | Prisma.UserCharacterUpdateWithWhereUniqueWithoutCharacterInput[];
    updateMany?: Prisma.UserCharacterUpdateManyWithWhereWithoutCharacterInput | Prisma.UserCharacterUpdateManyWithWhereWithoutCharacterInput[];
    deleteMany?: Prisma.UserCharacterScalarWhereInput | Prisma.UserCharacterScalarWhereInput[];
};
export type UserCharacterCreateNestedOneWithoutBattlesInput = {
    create?: Prisma.XOR<Prisma.UserCharacterCreateWithoutBattlesInput, Prisma.UserCharacterUncheckedCreateWithoutBattlesInput>;
    connectOrCreate?: Prisma.UserCharacterCreateOrConnectWithoutBattlesInput;
    connect?: Prisma.UserCharacterWhereUniqueInput;
};
export type UserCharacterUpdateOneRequiredWithoutBattlesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCharacterCreateWithoutBattlesInput, Prisma.UserCharacterUncheckedCreateWithoutBattlesInput>;
    connectOrCreate?: Prisma.UserCharacterCreateOrConnectWithoutBattlesInput;
    upsert?: Prisma.UserCharacterUpsertWithoutBattlesInput;
    connect?: Prisma.UserCharacterWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserCharacterUpdateToOneWithWhereWithoutBattlesInput, Prisma.UserCharacterUpdateWithoutBattlesInput>, Prisma.UserCharacterUncheckedUpdateWithoutBattlesInput>;
};
export type UserCharacterCreateWithoutUserInput = {
    level?: number;
    experience?: number;
    character: Prisma.CharacterCreateNestedOneWithoutInstancesInput;
    battles?: Prisma.BattleParticipantCreateNestedManyWithoutCharacterUsedInput;
};
export type UserCharacterUncheckedCreateWithoutUserInput = {
    id?: number;
    characterId: number;
    level?: number;
    experience?: number;
    battles?: Prisma.BattleParticipantUncheckedCreateNestedManyWithoutCharacterUsedInput;
};
export type UserCharacterCreateOrConnectWithoutUserInput = {
    where: Prisma.UserCharacterWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCharacterCreateWithoutUserInput, Prisma.UserCharacterUncheckedCreateWithoutUserInput>;
};
export type UserCharacterCreateManyUserInputEnvelope = {
    data: Prisma.UserCharacterCreateManyUserInput | Prisma.UserCharacterCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type UserCharacterUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.UserCharacterWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserCharacterUpdateWithoutUserInput, Prisma.UserCharacterUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.UserCharacterCreateWithoutUserInput, Prisma.UserCharacterUncheckedCreateWithoutUserInput>;
};
export type UserCharacterUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.UserCharacterWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserCharacterUpdateWithoutUserInput, Prisma.UserCharacterUncheckedUpdateWithoutUserInput>;
};
export type UserCharacterUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.UserCharacterScalarWhereInput;
    data: Prisma.XOR<Prisma.UserCharacterUpdateManyMutationInput, Prisma.UserCharacterUncheckedUpdateManyWithoutUserInput>;
};
export type UserCharacterScalarWhereInput = {
    AND?: Prisma.UserCharacterScalarWhereInput | Prisma.UserCharacterScalarWhereInput[];
    OR?: Prisma.UserCharacterScalarWhereInput[];
    NOT?: Prisma.UserCharacterScalarWhereInput | Prisma.UserCharacterScalarWhereInput[];
    id?: Prisma.IntFilter<"UserCharacter"> | number;
    userId?: Prisma.IntFilter<"UserCharacter"> | number;
    characterId?: Prisma.IntFilter<"UserCharacter"> | number;
    level?: Prisma.IntFilter<"UserCharacter"> | number;
    experience?: Prisma.IntFilter<"UserCharacter"> | number;
};
export type UserCharacterCreateWithoutCharacterInput = {
    level?: number;
    experience?: number;
    user: Prisma.UserCreateNestedOneWithoutCharactersInput;
    battles?: Prisma.BattleParticipantCreateNestedManyWithoutCharacterUsedInput;
};
export type UserCharacterUncheckedCreateWithoutCharacterInput = {
    id?: number;
    userId: number;
    level?: number;
    experience?: number;
    battles?: Prisma.BattleParticipantUncheckedCreateNestedManyWithoutCharacterUsedInput;
};
export type UserCharacterCreateOrConnectWithoutCharacterInput = {
    where: Prisma.UserCharacterWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCharacterCreateWithoutCharacterInput, Prisma.UserCharacterUncheckedCreateWithoutCharacterInput>;
};
export type UserCharacterCreateManyCharacterInputEnvelope = {
    data: Prisma.UserCharacterCreateManyCharacterInput | Prisma.UserCharacterCreateManyCharacterInput[];
    skipDuplicates?: boolean;
};
export type UserCharacterUpsertWithWhereUniqueWithoutCharacterInput = {
    where: Prisma.UserCharacterWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserCharacterUpdateWithoutCharacterInput, Prisma.UserCharacterUncheckedUpdateWithoutCharacterInput>;
    create: Prisma.XOR<Prisma.UserCharacterCreateWithoutCharacterInput, Prisma.UserCharacterUncheckedCreateWithoutCharacterInput>;
};
export type UserCharacterUpdateWithWhereUniqueWithoutCharacterInput = {
    where: Prisma.UserCharacterWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserCharacterUpdateWithoutCharacterInput, Prisma.UserCharacterUncheckedUpdateWithoutCharacterInput>;
};
export type UserCharacterUpdateManyWithWhereWithoutCharacterInput = {
    where: Prisma.UserCharacterScalarWhereInput;
    data: Prisma.XOR<Prisma.UserCharacterUpdateManyMutationInput, Prisma.UserCharacterUncheckedUpdateManyWithoutCharacterInput>;
};
export type UserCharacterCreateWithoutBattlesInput = {
    level?: number;
    experience?: number;
    user: Prisma.UserCreateNestedOneWithoutCharactersInput;
    character: Prisma.CharacterCreateNestedOneWithoutInstancesInput;
};
export type UserCharacterUncheckedCreateWithoutBattlesInput = {
    id?: number;
    userId: number;
    characterId: number;
    level?: number;
    experience?: number;
};
export type UserCharacterCreateOrConnectWithoutBattlesInput = {
    where: Prisma.UserCharacterWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCharacterCreateWithoutBattlesInput, Prisma.UserCharacterUncheckedCreateWithoutBattlesInput>;
};
export type UserCharacterUpsertWithoutBattlesInput = {
    update: Prisma.XOR<Prisma.UserCharacterUpdateWithoutBattlesInput, Prisma.UserCharacterUncheckedUpdateWithoutBattlesInput>;
    create: Prisma.XOR<Prisma.UserCharacterCreateWithoutBattlesInput, Prisma.UserCharacterUncheckedCreateWithoutBattlesInput>;
    where?: Prisma.UserCharacterWhereInput;
};
export type UserCharacterUpdateToOneWithWhereWithoutBattlesInput = {
    where?: Prisma.UserCharacterWhereInput;
    data: Prisma.XOR<Prisma.UserCharacterUpdateWithoutBattlesInput, Prisma.UserCharacterUncheckedUpdateWithoutBattlesInput>;
};
export type UserCharacterUpdateWithoutBattlesInput = {
    level?: Prisma.IntFieldUpdateOperationsInput | number;
    experience?: Prisma.IntFieldUpdateOperationsInput | number;
    user?: Prisma.UserUpdateOneRequiredWithoutCharactersNestedInput;
    character?: Prisma.CharacterUpdateOneRequiredWithoutInstancesNestedInput;
};
export type UserCharacterUncheckedUpdateWithoutBattlesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    characterId?: Prisma.IntFieldUpdateOperationsInput | number;
    level?: Prisma.IntFieldUpdateOperationsInput | number;
    experience?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type UserCharacterCreateManyUserInput = {
    id?: number;
    characterId: number;
    level?: number;
    experience?: number;
};
export type UserCharacterUpdateWithoutUserInput = {
    level?: Prisma.IntFieldUpdateOperationsInput | number;
    experience?: Prisma.IntFieldUpdateOperationsInput | number;
    character?: Prisma.CharacterUpdateOneRequiredWithoutInstancesNestedInput;
    battles?: Prisma.BattleParticipantUpdateManyWithoutCharacterUsedNestedInput;
};
export type UserCharacterUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    characterId?: Prisma.IntFieldUpdateOperationsInput | number;
    level?: Prisma.IntFieldUpdateOperationsInput | number;
    experience?: Prisma.IntFieldUpdateOperationsInput | number;
    battles?: Prisma.BattleParticipantUncheckedUpdateManyWithoutCharacterUsedNestedInput;
};
export type UserCharacterUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    characterId?: Prisma.IntFieldUpdateOperationsInput | number;
    level?: Prisma.IntFieldUpdateOperationsInput | number;
    experience?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type UserCharacterCreateManyCharacterInput = {
    id?: number;
    userId: number;
    level?: number;
    experience?: number;
};
export type UserCharacterUpdateWithoutCharacterInput = {
    level?: Prisma.IntFieldUpdateOperationsInput | number;
    experience?: Prisma.IntFieldUpdateOperationsInput | number;
    user?: Prisma.UserUpdateOneRequiredWithoutCharactersNestedInput;
    battles?: Prisma.BattleParticipantUpdateManyWithoutCharacterUsedNestedInput;
};
export type UserCharacterUncheckedUpdateWithoutCharacterInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    level?: Prisma.IntFieldUpdateOperationsInput | number;
    experience?: Prisma.IntFieldUpdateOperationsInput | number;
    battles?: Prisma.BattleParticipantUncheckedUpdateManyWithoutCharacterUsedNestedInput;
};
export type UserCharacterUncheckedUpdateManyWithoutCharacterInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    level?: Prisma.IntFieldUpdateOperationsInput | number;
    experience?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type UserCharacterCountOutputType = {
    battles: number;
};
export type UserCharacterCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    battles?: boolean | UserCharacterCountOutputTypeCountBattlesArgs;
};
export type UserCharacterCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCharacterCountOutputTypeSelect<ExtArgs> | null;
};
export type UserCharacterCountOutputTypeCountBattlesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BattleParticipantWhereInput;
};
export type UserCharacterSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    characterId?: boolean;
    level?: boolean;
    experience?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    character?: boolean | Prisma.CharacterDefaultArgs<ExtArgs>;
    battles?: boolean | Prisma.UserCharacter$battlesArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCharacterCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userCharacter"]>;
export type UserCharacterSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    characterId?: boolean;
    level?: boolean;
    experience?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    character?: boolean | Prisma.CharacterDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userCharacter"]>;
export type UserCharacterSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    characterId?: boolean;
    level?: boolean;
    experience?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    character?: boolean | Prisma.CharacterDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userCharacter"]>;
export type UserCharacterSelectScalar = {
    id?: boolean;
    userId?: boolean;
    characterId?: boolean;
    level?: boolean;
    experience?: boolean;
};
export type UserCharacterOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "characterId" | "level" | "experience", ExtArgs["result"]["userCharacter"]>;
export type UserCharacterInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    character?: boolean | Prisma.CharacterDefaultArgs<ExtArgs>;
    battles?: boolean | Prisma.UserCharacter$battlesArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCharacterCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserCharacterIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    character?: boolean | Prisma.CharacterDefaultArgs<ExtArgs>;
};
export type UserCharacterIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    character?: boolean | Prisma.CharacterDefaultArgs<ExtArgs>;
};
export type $UserCharacterPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "UserCharacter";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        character: Prisma.$CharacterPayload<ExtArgs>;
        battles: Prisma.$BattleParticipantPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        userId: number;
        characterId: number;
        level: number;
        experience: number;
    }, ExtArgs["result"]["userCharacter"]>;
    composites: {};
};
export type UserCharacterGetPayload<S extends boolean | null | undefined | UserCharacterDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserCharacterPayload, S>;
export type UserCharacterCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserCharacterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCharacterCountAggregateInputType | true;
};
export interface UserCharacterDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['UserCharacter'];
        meta: {
            name: 'UserCharacter';
        };
    };
    findUnique<T extends UserCharacterFindUniqueArgs>(args: Prisma.SelectSubset<T, UserCharacterFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserCharacterClient<runtime.Types.Result.GetResult<Prisma.$UserCharacterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserCharacterFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserCharacterFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserCharacterClient<runtime.Types.Result.GetResult<Prisma.$UserCharacterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserCharacterFindFirstArgs>(args?: Prisma.SelectSubset<T, UserCharacterFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserCharacterClient<runtime.Types.Result.GetResult<Prisma.$UserCharacterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserCharacterFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserCharacterFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserCharacterClient<runtime.Types.Result.GetResult<Prisma.$UserCharacterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserCharacterFindManyArgs>(args?: Prisma.SelectSubset<T, UserCharacterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserCharacterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserCharacterCreateArgs>(args: Prisma.SelectSubset<T, UserCharacterCreateArgs<ExtArgs>>): Prisma.Prisma__UserCharacterClient<runtime.Types.Result.GetResult<Prisma.$UserCharacterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserCharacterCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCharacterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserCharacterCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCharacterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserCharacterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserCharacterDeleteArgs>(args: Prisma.SelectSubset<T, UserCharacterDeleteArgs<ExtArgs>>): Prisma.Prisma__UserCharacterClient<runtime.Types.Result.GetResult<Prisma.$UserCharacterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserCharacterUpdateArgs>(args: Prisma.SelectSubset<T, UserCharacterUpdateArgs<ExtArgs>>): Prisma.Prisma__UserCharacterClient<runtime.Types.Result.GetResult<Prisma.$UserCharacterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserCharacterDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserCharacterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserCharacterUpdateManyArgs>(args: Prisma.SelectSubset<T, UserCharacterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserCharacterUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserCharacterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserCharacterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserCharacterUpsertArgs>(args: Prisma.SelectSubset<T, UserCharacterUpsertArgs<ExtArgs>>): Prisma.Prisma__UserCharacterClient<runtime.Types.Result.GetResult<Prisma.$UserCharacterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserCharacterCountArgs>(args?: Prisma.Subset<T, UserCharacterCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCharacterCountAggregateOutputType> : number>;
    aggregate<T extends UserCharacterAggregateArgs>(args: Prisma.Subset<T, UserCharacterAggregateArgs>): Prisma.PrismaPromise<GetUserCharacterAggregateType<T>>;
    groupBy<T extends UserCharacterGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserCharacterGroupByArgs['orderBy'];
    } : {
        orderBy?: UserCharacterGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserCharacterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserCharacterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserCharacterFieldRefs;
}
export interface Prisma__UserCharacterClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    character<T extends Prisma.CharacterDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CharacterDefaultArgs<ExtArgs>>): Prisma.Prisma__CharacterClient<runtime.Types.Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    battles<T extends Prisma.UserCharacter$battlesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserCharacter$battlesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BattleParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserCharacterFieldRefs {
    readonly id: Prisma.FieldRef<"UserCharacter", 'Int'>;
    readonly userId: Prisma.FieldRef<"UserCharacter", 'Int'>;
    readonly characterId: Prisma.FieldRef<"UserCharacter", 'Int'>;
    readonly level: Prisma.FieldRef<"UserCharacter", 'Int'>;
    readonly experience: Prisma.FieldRef<"UserCharacter", 'Int'>;
}
export type UserCharacterFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCharacterSelect<ExtArgs> | null;
    omit?: Prisma.UserCharacterOmit<ExtArgs> | null;
    include?: Prisma.UserCharacterInclude<ExtArgs> | null;
    where: Prisma.UserCharacterWhereUniqueInput;
};
export type UserCharacterFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCharacterSelect<ExtArgs> | null;
    omit?: Prisma.UserCharacterOmit<ExtArgs> | null;
    include?: Prisma.UserCharacterInclude<ExtArgs> | null;
    where: Prisma.UserCharacterWhereUniqueInput;
};
export type UserCharacterFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCharacterSelect<ExtArgs> | null;
    omit?: Prisma.UserCharacterOmit<ExtArgs> | null;
    include?: Prisma.UserCharacterInclude<ExtArgs> | null;
    where?: Prisma.UserCharacterWhereInput;
    orderBy?: Prisma.UserCharacterOrderByWithRelationInput | Prisma.UserCharacterOrderByWithRelationInput[];
    cursor?: Prisma.UserCharacterWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserCharacterScalarFieldEnum | Prisma.UserCharacterScalarFieldEnum[];
};
export type UserCharacterFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCharacterSelect<ExtArgs> | null;
    omit?: Prisma.UserCharacterOmit<ExtArgs> | null;
    include?: Prisma.UserCharacterInclude<ExtArgs> | null;
    where?: Prisma.UserCharacterWhereInput;
    orderBy?: Prisma.UserCharacterOrderByWithRelationInput | Prisma.UserCharacterOrderByWithRelationInput[];
    cursor?: Prisma.UserCharacterWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserCharacterScalarFieldEnum | Prisma.UserCharacterScalarFieldEnum[];
};
export type UserCharacterFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCharacterSelect<ExtArgs> | null;
    omit?: Prisma.UserCharacterOmit<ExtArgs> | null;
    include?: Prisma.UserCharacterInclude<ExtArgs> | null;
    where?: Prisma.UserCharacterWhereInput;
    orderBy?: Prisma.UserCharacterOrderByWithRelationInput | Prisma.UserCharacterOrderByWithRelationInput[];
    cursor?: Prisma.UserCharacterWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserCharacterScalarFieldEnum | Prisma.UserCharacterScalarFieldEnum[];
};
export type UserCharacterCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCharacterSelect<ExtArgs> | null;
    omit?: Prisma.UserCharacterOmit<ExtArgs> | null;
    include?: Prisma.UserCharacterInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCharacterCreateInput, Prisma.UserCharacterUncheckedCreateInput>;
};
export type UserCharacterCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserCharacterCreateManyInput | Prisma.UserCharacterCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserCharacterCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCharacterSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserCharacterOmit<ExtArgs> | null;
    data: Prisma.UserCharacterCreateManyInput | Prisma.UserCharacterCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.UserCharacterIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type UserCharacterUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCharacterSelect<ExtArgs> | null;
    omit?: Prisma.UserCharacterOmit<ExtArgs> | null;
    include?: Prisma.UserCharacterInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCharacterUpdateInput, Prisma.UserCharacterUncheckedUpdateInput>;
    where: Prisma.UserCharacterWhereUniqueInput;
};
export type UserCharacterUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserCharacterUpdateManyMutationInput, Prisma.UserCharacterUncheckedUpdateManyInput>;
    where?: Prisma.UserCharacterWhereInput;
    limit?: number;
};
export type UserCharacterUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCharacterSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserCharacterOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCharacterUpdateManyMutationInput, Prisma.UserCharacterUncheckedUpdateManyInput>;
    where?: Prisma.UserCharacterWhereInput;
    limit?: number;
    include?: Prisma.UserCharacterIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type UserCharacterUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCharacterSelect<ExtArgs> | null;
    omit?: Prisma.UserCharacterOmit<ExtArgs> | null;
    include?: Prisma.UserCharacterInclude<ExtArgs> | null;
    where: Prisma.UserCharacterWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCharacterCreateInput, Prisma.UserCharacterUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserCharacterUpdateInput, Prisma.UserCharacterUncheckedUpdateInput>;
};
export type UserCharacterDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCharacterSelect<ExtArgs> | null;
    omit?: Prisma.UserCharacterOmit<ExtArgs> | null;
    include?: Prisma.UserCharacterInclude<ExtArgs> | null;
    where: Prisma.UserCharacterWhereUniqueInput;
};
export type UserCharacterDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserCharacterWhereInput;
    limit?: number;
};
export type UserCharacter$battlesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BattleParticipantSelect<ExtArgs> | null;
    omit?: Prisma.BattleParticipantOmit<ExtArgs> | null;
    include?: Prisma.BattleParticipantInclude<ExtArgs> | null;
    where?: Prisma.BattleParticipantWhereInput;
    orderBy?: Prisma.BattleParticipantOrderByWithRelationInput | Prisma.BattleParticipantOrderByWithRelationInput[];
    cursor?: Prisma.BattleParticipantWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BattleParticipantScalarFieldEnum | Prisma.BattleParticipantScalarFieldEnum[];
};
export type UserCharacterDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCharacterSelect<ExtArgs> | null;
    omit?: Prisma.UserCharacterOmit<ExtArgs> | null;
    include?: Prisma.UserCharacterInclude<ExtArgs> | null;
};
export {};
