import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BattleParticipantModel = runtime.Types.Result.DefaultSelection<Prisma.$BattleParticipantPayload>;
export type AggregateBattleParticipant = {
    _count: BattleParticipantCountAggregateOutputType | null;
    _avg: BattleParticipantAvgAggregateOutputType | null;
    _sum: BattleParticipantSumAggregateOutputType | null;
    _min: BattleParticipantMinAggregateOutputType | null;
    _max: BattleParticipantMaxAggregateOutputType | null;
};
export type BattleParticipantAvgAggregateOutputType = {
    id: number | null;
    battleId: number | null;
    userId: number | null;
    userCharacterId: number | null;
};
export type BattleParticipantSumAggregateOutputType = {
    id: number | null;
    battleId: number | null;
    userId: number | null;
    userCharacterId: number | null;
};
export type BattleParticipantMinAggregateOutputType = {
    id: number | null;
    battleId: number | null;
    userId: number | null;
    userCharacterId: number | null;
};
export type BattleParticipantMaxAggregateOutputType = {
    id: number | null;
    battleId: number | null;
    userId: number | null;
    userCharacterId: number | null;
};
export type BattleParticipantCountAggregateOutputType = {
    id: number;
    battleId: number;
    userId: number;
    userCharacterId: number;
    _all: number;
};
export type BattleParticipantAvgAggregateInputType = {
    id?: true;
    battleId?: true;
    userId?: true;
    userCharacterId?: true;
};
export type BattleParticipantSumAggregateInputType = {
    id?: true;
    battleId?: true;
    userId?: true;
    userCharacterId?: true;
};
export type BattleParticipantMinAggregateInputType = {
    id?: true;
    battleId?: true;
    userId?: true;
    userCharacterId?: true;
};
export type BattleParticipantMaxAggregateInputType = {
    id?: true;
    battleId?: true;
    userId?: true;
    userCharacterId?: true;
};
export type BattleParticipantCountAggregateInputType = {
    id?: true;
    battleId?: true;
    userId?: true;
    userCharacterId?: true;
    _all?: true;
};
export type BattleParticipantAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BattleParticipantWhereInput;
    orderBy?: Prisma.BattleParticipantOrderByWithRelationInput | Prisma.BattleParticipantOrderByWithRelationInput[];
    cursor?: Prisma.BattleParticipantWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BattleParticipantCountAggregateInputType;
    _avg?: BattleParticipantAvgAggregateInputType;
    _sum?: BattleParticipantSumAggregateInputType;
    _min?: BattleParticipantMinAggregateInputType;
    _max?: BattleParticipantMaxAggregateInputType;
};
export type GetBattleParticipantAggregateType<T extends BattleParticipantAggregateArgs> = {
    [P in keyof T & keyof AggregateBattleParticipant]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBattleParticipant[P]> : Prisma.GetScalarType<T[P], AggregateBattleParticipant[P]>;
};
export type BattleParticipantGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BattleParticipantWhereInput;
    orderBy?: Prisma.BattleParticipantOrderByWithAggregationInput | Prisma.BattleParticipantOrderByWithAggregationInput[];
    by: Prisma.BattleParticipantScalarFieldEnum[] | Prisma.BattleParticipantScalarFieldEnum;
    having?: Prisma.BattleParticipantScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BattleParticipantCountAggregateInputType | true;
    _avg?: BattleParticipantAvgAggregateInputType;
    _sum?: BattleParticipantSumAggregateInputType;
    _min?: BattleParticipantMinAggregateInputType;
    _max?: BattleParticipantMaxAggregateInputType;
};
export type BattleParticipantGroupByOutputType = {
    id: number;
    battleId: number;
    userId: number;
    userCharacterId: number;
    _count: BattleParticipantCountAggregateOutputType | null;
    _avg: BattleParticipantAvgAggregateOutputType | null;
    _sum: BattleParticipantSumAggregateOutputType | null;
    _min: BattleParticipantMinAggregateOutputType | null;
    _max: BattleParticipantMaxAggregateOutputType | null;
};
type GetBattleParticipantGroupByPayload<T extends BattleParticipantGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BattleParticipantGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BattleParticipantGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BattleParticipantGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BattleParticipantGroupByOutputType[P]>;
}>>;
export type BattleParticipantWhereInput = {
    AND?: Prisma.BattleParticipantWhereInput | Prisma.BattleParticipantWhereInput[];
    OR?: Prisma.BattleParticipantWhereInput[];
    NOT?: Prisma.BattleParticipantWhereInput | Prisma.BattleParticipantWhereInput[];
    id?: Prisma.IntFilter<"BattleParticipant"> | number;
    battleId?: Prisma.IntFilter<"BattleParticipant"> | number;
    userId?: Prisma.IntFilter<"BattleParticipant"> | number;
    userCharacterId?: Prisma.IntFilter<"BattleParticipant"> | number;
    battle?: Prisma.XOR<Prisma.BattleScalarRelationFilter, Prisma.BattleWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    characterUsed?: Prisma.XOR<Prisma.UserCharacterScalarRelationFilter, Prisma.UserCharacterWhereInput>;
};
export type BattleParticipantOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    battleId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    userCharacterId?: Prisma.SortOrder;
    battle?: Prisma.BattleOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
    characterUsed?: Prisma.UserCharacterOrderByWithRelationInput;
};
export type BattleParticipantWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.BattleParticipantWhereInput | Prisma.BattleParticipantWhereInput[];
    OR?: Prisma.BattleParticipantWhereInput[];
    NOT?: Prisma.BattleParticipantWhereInput | Prisma.BattleParticipantWhereInput[];
    battleId?: Prisma.IntFilter<"BattleParticipant"> | number;
    userId?: Prisma.IntFilter<"BattleParticipant"> | number;
    userCharacterId?: Prisma.IntFilter<"BattleParticipant"> | number;
    battle?: Prisma.XOR<Prisma.BattleScalarRelationFilter, Prisma.BattleWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    characterUsed?: Prisma.XOR<Prisma.UserCharacterScalarRelationFilter, Prisma.UserCharacterWhereInput>;
}, "id">;
export type BattleParticipantOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    battleId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    userCharacterId?: Prisma.SortOrder;
    _count?: Prisma.BattleParticipantCountOrderByAggregateInput;
    _avg?: Prisma.BattleParticipantAvgOrderByAggregateInput;
    _max?: Prisma.BattleParticipantMaxOrderByAggregateInput;
    _min?: Prisma.BattleParticipantMinOrderByAggregateInput;
    _sum?: Prisma.BattleParticipantSumOrderByAggregateInput;
};
export type BattleParticipantScalarWhereWithAggregatesInput = {
    AND?: Prisma.BattleParticipantScalarWhereWithAggregatesInput | Prisma.BattleParticipantScalarWhereWithAggregatesInput[];
    OR?: Prisma.BattleParticipantScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BattleParticipantScalarWhereWithAggregatesInput | Prisma.BattleParticipantScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"BattleParticipant"> | number;
    battleId?: Prisma.IntWithAggregatesFilter<"BattleParticipant"> | number;
    userId?: Prisma.IntWithAggregatesFilter<"BattleParticipant"> | number;
    userCharacterId?: Prisma.IntWithAggregatesFilter<"BattleParticipant"> | number;
};
export type BattleParticipantCreateInput = {
    battle: Prisma.BattleCreateNestedOneWithoutParticipantsInput;
    user: Prisma.UserCreateNestedOneWithoutBattlesAsPlayerInput;
    characterUsed: Prisma.UserCharacterCreateNestedOneWithoutBattlesInput;
};
export type BattleParticipantUncheckedCreateInput = {
    id?: number;
    battleId: number;
    userId: number;
    userCharacterId: number;
};
export type BattleParticipantUpdateInput = {
    battle?: Prisma.BattleUpdateOneRequiredWithoutParticipantsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutBattlesAsPlayerNestedInput;
    characterUsed?: Prisma.UserCharacterUpdateOneRequiredWithoutBattlesNestedInput;
};
export type BattleParticipantUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    battleId?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    userCharacterId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BattleParticipantCreateManyInput = {
    id?: number;
    battleId: number;
    userId: number;
    userCharacterId: number;
};
export type BattleParticipantUpdateManyMutationInput = {};
export type BattleParticipantUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    battleId?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    userCharacterId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BattleParticipantListRelationFilter = {
    every?: Prisma.BattleParticipantWhereInput;
    some?: Prisma.BattleParticipantWhereInput;
    none?: Prisma.BattleParticipantWhereInput;
};
export type BattleParticipantOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BattleParticipantCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    battleId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    userCharacterId?: Prisma.SortOrder;
};
export type BattleParticipantAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    battleId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    userCharacterId?: Prisma.SortOrder;
};
export type BattleParticipantMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    battleId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    userCharacterId?: Prisma.SortOrder;
};
export type BattleParticipantMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    battleId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    userCharacterId?: Prisma.SortOrder;
};
export type BattleParticipantSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    battleId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    userCharacterId?: Prisma.SortOrder;
};
export type BattleParticipantCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.BattleParticipantCreateWithoutUserInput, Prisma.BattleParticipantUncheckedCreateWithoutUserInput> | Prisma.BattleParticipantCreateWithoutUserInput[] | Prisma.BattleParticipantUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.BattleParticipantCreateOrConnectWithoutUserInput | Prisma.BattleParticipantCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.BattleParticipantCreateManyUserInputEnvelope;
    connect?: Prisma.BattleParticipantWhereUniqueInput | Prisma.BattleParticipantWhereUniqueInput[];
};
export type BattleParticipantUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.BattleParticipantCreateWithoutUserInput, Prisma.BattleParticipantUncheckedCreateWithoutUserInput> | Prisma.BattleParticipantCreateWithoutUserInput[] | Prisma.BattleParticipantUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.BattleParticipantCreateOrConnectWithoutUserInput | Prisma.BattleParticipantCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.BattleParticipantCreateManyUserInputEnvelope;
    connect?: Prisma.BattleParticipantWhereUniqueInput | Prisma.BattleParticipantWhereUniqueInput[];
};
export type BattleParticipantUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.BattleParticipantCreateWithoutUserInput, Prisma.BattleParticipantUncheckedCreateWithoutUserInput> | Prisma.BattleParticipantCreateWithoutUserInput[] | Prisma.BattleParticipantUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.BattleParticipantCreateOrConnectWithoutUserInput | Prisma.BattleParticipantCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.BattleParticipantUpsertWithWhereUniqueWithoutUserInput | Prisma.BattleParticipantUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.BattleParticipantCreateManyUserInputEnvelope;
    set?: Prisma.BattleParticipantWhereUniqueInput | Prisma.BattleParticipantWhereUniqueInput[];
    disconnect?: Prisma.BattleParticipantWhereUniqueInput | Prisma.BattleParticipantWhereUniqueInput[];
    delete?: Prisma.BattleParticipantWhereUniqueInput | Prisma.BattleParticipantWhereUniqueInput[];
    connect?: Prisma.BattleParticipantWhereUniqueInput | Prisma.BattleParticipantWhereUniqueInput[];
    update?: Prisma.BattleParticipantUpdateWithWhereUniqueWithoutUserInput | Prisma.BattleParticipantUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.BattleParticipantUpdateManyWithWhereWithoutUserInput | Prisma.BattleParticipantUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.BattleParticipantScalarWhereInput | Prisma.BattleParticipantScalarWhereInput[];
};
export type BattleParticipantUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.BattleParticipantCreateWithoutUserInput, Prisma.BattleParticipantUncheckedCreateWithoutUserInput> | Prisma.BattleParticipantCreateWithoutUserInput[] | Prisma.BattleParticipantUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.BattleParticipantCreateOrConnectWithoutUserInput | Prisma.BattleParticipantCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.BattleParticipantUpsertWithWhereUniqueWithoutUserInput | Prisma.BattleParticipantUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.BattleParticipantCreateManyUserInputEnvelope;
    set?: Prisma.BattleParticipantWhereUniqueInput | Prisma.BattleParticipantWhereUniqueInput[];
    disconnect?: Prisma.BattleParticipantWhereUniqueInput | Prisma.BattleParticipantWhereUniqueInput[];
    delete?: Prisma.BattleParticipantWhereUniqueInput | Prisma.BattleParticipantWhereUniqueInput[];
    connect?: Prisma.BattleParticipantWhereUniqueInput | Prisma.BattleParticipantWhereUniqueInput[];
    update?: Prisma.BattleParticipantUpdateWithWhereUniqueWithoutUserInput | Prisma.BattleParticipantUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.BattleParticipantUpdateManyWithWhereWithoutUserInput | Prisma.BattleParticipantUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.BattleParticipantScalarWhereInput | Prisma.BattleParticipantScalarWhereInput[];
};
export type BattleParticipantCreateNestedManyWithoutCharacterUsedInput = {
    create?: Prisma.XOR<Prisma.BattleParticipantCreateWithoutCharacterUsedInput, Prisma.BattleParticipantUncheckedCreateWithoutCharacterUsedInput> | Prisma.BattleParticipantCreateWithoutCharacterUsedInput[] | Prisma.BattleParticipantUncheckedCreateWithoutCharacterUsedInput[];
    connectOrCreate?: Prisma.BattleParticipantCreateOrConnectWithoutCharacterUsedInput | Prisma.BattleParticipantCreateOrConnectWithoutCharacterUsedInput[];
    createMany?: Prisma.BattleParticipantCreateManyCharacterUsedInputEnvelope;
    connect?: Prisma.BattleParticipantWhereUniqueInput | Prisma.BattleParticipantWhereUniqueInput[];
};
export type BattleParticipantUncheckedCreateNestedManyWithoutCharacterUsedInput = {
    create?: Prisma.XOR<Prisma.BattleParticipantCreateWithoutCharacterUsedInput, Prisma.BattleParticipantUncheckedCreateWithoutCharacterUsedInput> | Prisma.BattleParticipantCreateWithoutCharacterUsedInput[] | Prisma.BattleParticipantUncheckedCreateWithoutCharacterUsedInput[];
    connectOrCreate?: Prisma.BattleParticipantCreateOrConnectWithoutCharacterUsedInput | Prisma.BattleParticipantCreateOrConnectWithoutCharacterUsedInput[];
    createMany?: Prisma.BattleParticipantCreateManyCharacterUsedInputEnvelope;
    connect?: Prisma.BattleParticipantWhereUniqueInput | Prisma.BattleParticipantWhereUniqueInput[];
};
export type BattleParticipantUpdateManyWithoutCharacterUsedNestedInput = {
    create?: Prisma.XOR<Prisma.BattleParticipantCreateWithoutCharacterUsedInput, Prisma.BattleParticipantUncheckedCreateWithoutCharacterUsedInput> | Prisma.BattleParticipantCreateWithoutCharacterUsedInput[] | Prisma.BattleParticipantUncheckedCreateWithoutCharacterUsedInput[];
    connectOrCreate?: Prisma.BattleParticipantCreateOrConnectWithoutCharacterUsedInput | Prisma.BattleParticipantCreateOrConnectWithoutCharacterUsedInput[];
    upsert?: Prisma.BattleParticipantUpsertWithWhereUniqueWithoutCharacterUsedInput | Prisma.BattleParticipantUpsertWithWhereUniqueWithoutCharacterUsedInput[];
    createMany?: Prisma.BattleParticipantCreateManyCharacterUsedInputEnvelope;
    set?: Prisma.BattleParticipantWhereUniqueInput | Prisma.BattleParticipantWhereUniqueInput[];
    disconnect?: Prisma.BattleParticipantWhereUniqueInput | Prisma.BattleParticipantWhereUniqueInput[];
    delete?: Prisma.BattleParticipantWhereUniqueInput | Prisma.BattleParticipantWhereUniqueInput[];
    connect?: Prisma.BattleParticipantWhereUniqueInput | Prisma.BattleParticipantWhereUniqueInput[];
    update?: Prisma.BattleParticipantUpdateWithWhereUniqueWithoutCharacterUsedInput | Prisma.BattleParticipantUpdateWithWhereUniqueWithoutCharacterUsedInput[];
    updateMany?: Prisma.BattleParticipantUpdateManyWithWhereWithoutCharacterUsedInput | Prisma.BattleParticipantUpdateManyWithWhereWithoutCharacterUsedInput[];
    deleteMany?: Prisma.BattleParticipantScalarWhereInput | Prisma.BattleParticipantScalarWhereInput[];
};
export type BattleParticipantUncheckedUpdateManyWithoutCharacterUsedNestedInput = {
    create?: Prisma.XOR<Prisma.BattleParticipantCreateWithoutCharacterUsedInput, Prisma.BattleParticipantUncheckedCreateWithoutCharacterUsedInput> | Prisma.BattleParticipantCreateWithoutCharacterUsedInput[] | Prisma.BattleParticipantUncheckedCreateWithoutCharacterUsedInput[];
    connectOrCreate?: Prisma.BattleParticipantCreateOrConnectWithoutCharacterUsedInput | Prisma.BattleParticipantCreateOrConnectWithoutCharacterUsedInput[];
    upsert?: Prisma.BattleParticipantUpsertWithWhereUniqueWithoutCharacterUsedInput | Prisma.BattleParticipantUpsertWithWhereUniqueWithoutCharacterUsedInput[];
    createMany?: Prisma.BattleParticipantCreateManyCharacterUsedInputEnvelope;
    set?: Prisma.BattleParticipantWhereUniqueInput | Prisma.BattleParticipantWhereUniqueInput[];
    disconnect?: Prisma.BattleParticipantWhereUniqueInput | Prisma.BattleParticipantWhereUniqueInput[];
    delete?: Prisma.BattleParticipantWhereUniqueInput | Prisma.BattleParticipantWhereUniqueInput[];
    connect?: Prisma.BattleParticipantWhereUniqueInput | Prisma.BattleParticipantWhereUniqueInput[];
    update?: Prisma.BattleParticipantUpdateWithWhereUniqueWithoutCharacterUsedInput | Prisma.BattleParticipantUpdateWithWhereUniqueWithoutCharacterUsedInput[];
    updateMany?: Prisma.BattleParticipantUpdateManyWithWhereWithoutCharacterUsedInput | Prisma.BattleParticipantUpdateManyWithWhereWithoutCharacterUsedInput[];
    deleteMany?: Prisma.BattleParticipantScalarWhereInput | Prisma.BattleParticipantScalarWhereInput[];
};
export type BattleParticipantCreateNestedManyWithoutBattleInput = {
    create?: Prisma.XOR<Prisma.BattleParticipantCreateWithoutBattleInput, Prisma.BattleParticipantUncheckedCreateWithoutBattleInput> | Prisma.BattleParticipantCreateWithoutBattleInput[] | Prisma.BattleParticipantUncheckedCreateWithoutBattleInput[];
    connectOrCreate?: Prisma.BattleParticipantCreateOrConnectWithoutBattleInput | Prisma.BattleParticipantCreateOrConnectWithoutBattleInput[];
    createMany?: Prisma.BattleParticipantCreateManyBattleInputEnvelope;
    connect?: Prisma.BattleParticipantWhereUniqueInput | Prisma.BattleParticipantWhereUniqueInput[];
};
export type BattleParticipantUncheckedCreateNestedManyWithoutBattleInput = {
    create?: Prisma.XOR<Prisma.BattleParticipantCreateWithoutBattleInput, Prisma.BattleParticipantUncheckedCreateWithoutBattleInput> | Prisma.BattleParticipantCreateWithoutBattleInput[] | Prisma.BattleParticipantUncheckedCreateWithoutBattleInput[];
    connectOrCreate?: Prisma.BattleParticipantCreateOrConnectWithoutBattleInput | Prisma.BattleParticipantCreateOrConnectWithoutBattleInput[];
    createMany?: Prisma.BattleParticipantCreateManyBattleInputEnvelope;
    connect?: Prisma.BattleParticipantWhereUniqueInput | Prisma.BattleParticipantWhereUniqueInput[];
};
export type BattleParticipantUpdateManyWithoutBattleNestedInput = {
    create?: Prisma.XOR<Prisma.BattleParticipantCreateWithoutBattleInput, Prisma.BattleParticipantUncheckedCreateWithoutBattleInput> | Prisma.BattleParticipantCreateWithoutBattleInput[] | Prisma.BattleParticipantUncheckedCreateWithoutBattleInput[];
    connectOrCreate?: Prisma.BattleParticipantCreateOrConnectWithoutBattleInput | Prisma.BattleParticipantCreateOrConnectWithoutBattleInput[];
    upsert?: Prisma.BattleParticipantUpsertWithWhereUniqueWithoutBattleInput | Prisma.BattleParticipantUpsertWithWhereUniqueWithoutBattleInput[];
    createMany?: Prisma.BattleParticipantCreateManyBattleInputEnvelope;
    set?: Prisma.BattleParticipantWhereUniqueInput | Prisma.BattleParticipantWhereUniqueInput[];
    disconnect?: Prisma.BattleParticipantWhereUniqueInput | Prisma.BattleParticipantWhereUniqueInput[];
    delete?: Prisma.BattleParticipantWhereUniqueInput | Prisma.BattleParticipantWhereUniqueInput[];
    connect?: Prisma.BattleParticipantWhereUniqueInput | Prisma.BattleParticipantWhereUniqueInput[];
    update?: Prisma.BattleParticipantUpdateWithWhereUniqueWithoutBattleInput | Prisma.BattleParticipantUpdateWithWhereUniqueWithoutBattleInput[];
    updateMany?: Prisma.BattleParticipantUpdateManyWithWhereWithoutBattleInput | Prisma.BattleParticipantUpdateManyWithWhereWithoutBattleInput[];
    deleteMany?: Prisma.BattleParticipantScalarWhereInput | Prisma.BattleParticipantScalarWhereInput[];
};
export type BattleParticipantUncheckedUpdateManyWithoutBattleNestedInput = {
    create?: Prisma.XOR<Prisma.BattleParticipantCreateWithoutBattleInput, Prisma.BattleParticipantUncheckedCreateWithoutBattleInput> | Prisma.BattleParticipantCreateWithoutBattleInput[] | Prisma.BattleParticipantUncheckedCreateWithoutBattleInput[];
    connectOrCreate?: Prisma.BattleParticipantCreateOrConnectWithoutBattleInput | Prisma.BattleParticipantCreateOrConnectWithoutBattleInput[];
    upsert?: Prisma.BattleParticipantUpsertWithWhereUniqueWithoutBattleInput | Prisma.BattleParticipantUpsertWithWhereUniqueWithoutBattleInput[];
    createMany?: Prisma.BattleParticipantCreateManyBattleInputEnvelope;
    set?: Prisma.BattleParticipantWhereUniqueInput | Prisma.BattleParticipantWhereUniqueInput[];
    disconnect?: Prisma.BattleParticipantWhereUniqueInput | Prisma.BattleParticipantWhereUniqueInput[];
    delete?: Prisma.BattleParticipantWhereUniqueInput | Prisma.BattleParticipantWhereUniqueInput[];
    connect?: Prisma.BattleParticipantWhereUniqueInput | Prisma.BattleParticipantWhereUniqueInput[];
    update?: Prisma.BattleParticipantUpdateWithWhereUniqueWithoutBattleInput | Prisma.BattleParticipantUpdateWithWhereUniqueWithoutBattleInput[];
    updateMany?: Prisma.BattleParticipantUpdateManyWithWhereWithoutBattleInput | Prisma.BattleParticipantUpdateManyWithWhereWithoutBattleInput[];
    deleteMany?: Prisma.BattleParticipantScalarWhereInput | Prisma.BattleParticipantScalarWhereInput[];
};
export type BattleParticipantCreateWithoutUserInput = {
    battle: Prisma.BattleCreateNestedOneWithoutParticipantsInput;
    characterUsed: Prisma.UserCharacterCreateNestedOneWithoutBattlesInput;
};
export type BattleParticipantUncheckedCreateWithoutUserInput = {
    id?: number;
    battleId: number;
    userCharacterId: number;
};
export type BattleParticipantCreateOrConnectWithoutUserInput = {
    where: Prisma.BattleParticipantWhereUniqueInput;
    create: Prisma.XOR<Prisma.BattleParticipantCreateWithoutUserInput, Prisma.BattleParticipantUncheckedCreateWithoutUserInput>;
};
export type BattleParticipantCreateManyUserInputEnvelope = {
    data: Prisma.BattleParticipantCreateManyUserInput | Prisma.BattleParticipantCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type BattleParticipantUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.BattleParticipantWhereUniqueInput;
    update: Prisma.XOR<Prisma.BattleParticipantUpdateWithoutUserInput, Prisma.BattleParticipantUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.BattleParticipantCreateWithoutUserInput, Prisma.BattleParticipantUncheckedCreateWithoutUserInput>;
};
export type BattleParticipantUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.BattleParticipantWhereUniqueInput;
    data: Prisma.XOR<Prisma.BattleParticipantUpdateWithoutUserInput, Prisma.BattleParticipantUncheckedUpdateWithoutUserInput>;
};
export type BattleParticipantUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.BattleParticipantScalarWhereInput;
    data: Prisma.XOR<Prisma.BattleParticipantUpdateManyMutationInput, Prisma.BattleParticipantUncheckedUpdateManyWithoutUserInput>;
};
export type BattleParticipantScalarWhereInput = {
    AND?: Prisma.BattleParticipantScalarWhereInput | Prisma.BattleParticipantScalarWhereInput[];
    OR?: Prisma.BattleParticipantScalarWhereInput[];
    NOT?: Prisma.BattleParticipantScalarWhereInput | Prisma.BattleParticipantScalarWhereInput[];
    id?: Prisma.IntFilter<"BattleParticipant"> | number;
    battleId?: Prisma.IntFilter<"BattleParticipant"> | number;
    userId?: Prisma.IntFilter<"BattleParticipant"> | number;
    userCharacterId?: Prisma.IntFilter<"BattleParticipant"> | number;
};
export type BattleParticipantCreateWithoutCharacterUsedInput = {
    battle: Prisma.BattleCreateNestedOneWithoutParticipantsInput;
    user: Prisma.UserCreateNestedOneWithoutBattlesAsPlayerInput;
};
export type BattleParticipantUncheckedCreateWithoutCharacterUsedInput = {
    id?: number;
    battleId: number;
    userId: number;
};
export type BattleParticipantCreateOrConnectWithoutCharacterUsedInput = {
    where: Prisma.BattleParticipantWhereUniqueInput;
    create: Prisma.XOR<Prisma.BattleParticipantCreateWithoutCharacterUsedInput, Prisma.BattleParticipantUncheckedCreateWithoutCharacterUsedInput>;
};
export type BattleParticipantCreateManyCharacterUsedInputEnvelope = {
    data: Prisma.BattleParticipantCreateManyCharacterUsedInput | Prisma.BattleParticipantCreateManyCharacterUsedInput[];
    skipDuplicates?: boolean;
};
export type BattleParticipantUpsertWithWhereUniqueWithoutCharacterUsedInput = {
    where: Prisma.BattleParticipantWhereUniqueInput;
    update: Prisma.XOR<Prisma.BattleParticipantUpdateWithoutCharacterUsedInput, Prisma.BattleParticipantUncheckedUpdateWithoutCharacterUsedInput>;
    create: Prisma.XOR<Prisma.BattleParticipantCreateWithoutCharacterUsedInput, Prisma.BattleParticipantUncheckedCreateWithoutCharacterUsedInput>;
};
export type BattleParticipantUpdateWithWhereUniqueWithoutCharacterUsedInput = {
    where: Prisma.BattleParticipantWhereUniqueInput;
    data: Prisma.XOR<Prisma.BattleParticipantUpdateWithoutCharacterUsedInput, Prisma.BattleParticipantUncheckedUpdateWithoutCharacterUsedInput>;
};
export type BattleParticipantUpdateManyWithWhereWithoutCharacterUsedInput = {
    where: Prisma.BattleParticipantScalarWhereInput;
    data: Prisma.XOR<Prisma.BattleParticipantUpdateManyMutationInput, Prisma.BattleParticipantUncheckedUpdateManyWithoutCharacterUsedInput>;
};
export type BattleParticipantCreateWithoutBattleInput = {
    user: Prisma.UserCreateNestedOneWithoutBattlesAsPlayerInput;
    characterUsed: Prisma.UserCharacterCreateNestedOneWithoutBattlesInput;
};
export type BattleParticipantUncheckedCreateWithoutBattleInput = {
    id?: number;
    userId: number;
    userCharacterId: number;
};
export type BattleParticipantCreateOrConnectWithoutBattleInput = {
    where: Prisma.BattleParticipantWhereUniqueInput;
    create: Prisma.XOR<Prisma.BattleParticipantCreateWithoutBattleInput, Prisma.BattleParticipantUncheckedCreateWithoutBattleInput>;
};
export type BattleParticipantCreateManyBattleInputEnvelope = {
    data: Prisma.BattleParticipantCreateManyBattleInput | Prisma.BattleParticipantCreateManyBattleInput[];
    skipDuplicates?: boolean;
};
export type BattleParticipantUpsertWithWhereUniqueWithoutBattleInput = {
    where: Prisma.BattleParticipantWhereUniqueInput;
    update: Prisma.XOR<Prisma.BattleParticipantUpdateWithoutBattleInput, Prisma.BattleParticipantUncheckedUpdateWithoutBattleInput>;
    create: Prisma.XOR<Prisma.BattleParticipantCreateWithoutBattleInput, Prisma.BattleParticipantUncheckedCreateWithoutBattleInput>;
};
export type BattleParticipantUpdateWithWhereUniqueWithoutBattleInput = {
    where: Prisma.BattleParticipantWhereUniqueInput;
    data: Prisma.XOR<Prisma.BattleParticipantUpdateWithoutBattleInput, Prisma.BattleParticipantUncheckedUpdateWithoutBattleInput>;
};
export type BattleParticipantUpdateManyWithWhereWithoutBattleInput = {
    where: Prisma.BattleParticipantScalarWhereInput;
    data: Prisma.XOR<Prisma.BattleParticipantUpdateManyMutationInput, Prisma.BattleParticipantUncheckedUpdateManyWithoutBattleInput>;
};
export type BattleParticipantCreateManyUserInput = {
    id?: number;
    battleId: number;
    userCharacterId: number;
};
export type BattleParticipantUpdateWithoutUserInput = {
    battle?: Prisma.BattleUpdateOneRequiredWithoutParticipantsNestedInput;
    characterUsed?: Prisma.UserCharacterUpdateOneRequiredWithoutBattlesNestedInput;
};
export type BattleParticipantUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    battleId?: Prisma.IntFieldUpdateOperationsInput | number;
    userCharacterId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BattleParticipantUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    battleId?: Prisma.IntFieldUpdateOperationsInput | number;
    userCharacterId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BattleParticipantCreateManyCharacterUsedInput = {
    id?: number;
    battleId: number;
    userId: number;
};
export type BattleParticipantUpdateWithoutCharacterUsedInput = {
    battle?: Prisma.BattleUpdateOneRequiredWithoutParticipantsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutBattlesAsPlayerNestedInput;
};
export type BattleParticipantUncheckedUpdateWithoutCharacterUsedInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    battleId?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BattleParticipantUncheckedUpdateManyWithoutCharacterUsedInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    battleId?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BattleParticipantCreateManyBattleInput = {
    id?: number;
    userId: number;
    userCharacterId: number;
};
export type BattleParticipantUpdateWithoutBattleInput = {
    user?: Prisma.UserUpdateOneRequiredWithoutBattlesAsPlayerNestedInput;
    characterUsed?: Prisma.UserCharacterUpdateOneRequiredWithoutBattlesNestedInput;
};
export type BattleParticipantUncheckedUpdateWithoutBattleInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    userCharacterId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BattleParticipantUncheckedUpdateManyWithoutBattleInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    userCharacterId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BattleParticipantSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    battleId?: boolean;
    userId?: boolean;
    userCharacterId?: boolean;
    battle?: boolean | Prisma.BattleDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    characterUsed?: boolean | Prisma.UserCharacterDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["battleParticipant"]>;
export type BattleParticipantSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    battleId?: boolean;
    userId?: boolean;
    userCharacterId?: boolean;
    battle?: boolean | Prisma.BattleDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    characterUsed?: boolean | Prisma.UserCharacterDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["battleParticipant"]>;
export type BattleParticipantSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    battleId?: boolean;
    userId?: boolean;
    userCharacterId?: boolean;
    battle?: boolean | Prisma.BattleDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    characterUsed?: boolean | Prisma.UserCharacterDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["battleParticipant"]>;
export type BattleParticipantSelectScalar = {
    id?: boolean;
    battleId?: boolean;
    userId?: boolean;
    userCharacterId?: boolean;
};
export type BattleParticipantOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "battleId" | "userId" | "userCharacterId", ExtArgs["result"]["battleParticipant"]>;
export type BattleParticipantInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    battle?: boolean | Prisma.BattleDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    characterUsed?: boolean | Prisma.UserCharacterDefaultArgs<ExtArgs>;
};
export type BattleParticipantIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    battle?: boolean | Prisma.BattleDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    characterUsed?: boolean | Prisma.UserCharacterDefaultArgs<ExtArgs>;
};
export type BattleParticipantIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    battle?: boolean | Prisma.BattleDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    characterUsed?: boolean | Prisma.UserCharacterDefaultArgs<ExtArgs>;
};
export type $BattleParticipantPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BattleParticipant";
    objects: {
        battle: Prisma.$BattlePayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
        characterUsed: Prisma.$UserCharacterPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        battleId: number;
        userId: number;
        userCharacterId: number;
    }, ExtArgs["result"]["battleParticipant"]>;
    composites: {};
};
export type BattleParticipantGetPayload<S extends boolean | null | undefined | BattleParticipantDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BattleParticipantPayload, S>;
export type BattleParticipantCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BattleParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BattleParticipantCountAggregateInputType | true;
};
export interface BattleParticipantDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BattleParticipant'];
        meta: {
            name: 'BattleParticipant';
        };
    };
    findUnique<T extends BattleParticipantFindUniqueArgs>(args: Prisma.SelectSubset<T, BattleParticipantFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BattleParticipantClient<runtime.Types.Result.GetResult<Prisma.$BattleParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BattleParticipantFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BattleParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BattleParticipantClient<runtime.Types.Result.GetResult<Prisma.$BattleParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BattleParticipantFindFirstArgs>(args?: Prisma.SelectSubset<T, BattleParticipantFindFirstArgs<ExtArgs>>): Prisma.Prisma__BattleParticipantClient<runtime.Types.Result.GetResult<Prisma.$BattleParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BattleParticipantFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BattleParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BattleParticipantClient<runtime.Types.Result.GetResult<Prisma.$BattleParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BattleParticipantFindManyArgs>(args?: Prisma.SelectSubset<T, BattleParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BattleParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BattleParticipantCreateArgs>(args: Prisma.SelectSubset<T, BattleParticipantCreateArgs<ExtArgs>>): Prisma.Prisma__BattleParticipantClient<runtime.Types.Result.GetResult<Prisma.$BattleParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BattleParticipantCreateManyArgs>(args?: Prisma.SelectSubset<T, BattleParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BattleParticipantCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BattleParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BattleParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BattleParticipantDeleteArgs>(args: Prisma.SelectSubset<T, BattleParticipantDeleteArgs<ExtArgs>>): Prisma.Prisma__BattleParticipantClient<runtime.Types.Result.GetResult<Prisma.$BattleParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BattleParticipantUpdateArgs>(args: Prisma.SelectSubset<T, BattleParticipantUpdateArgs<ExtArgs>>): Prisma.Prisma__BattleParticipantClient<runtime.Types.Result.GetResult<Prisma.$BattleParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BattleParticipantDeleteManyArgs>(args?: Prisma.SelectSubset<T, BattleParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BattleParticipantUpdateManyArgs>(args: Prisma.SelectSubset<T, BattleParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BattleParticipantUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BattleParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BattleParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BattleParticipantUpsertArgs>(args: Prisma.SelectSubset<T, BattleParticipantUpsertArgs<ExtArgs>>): Prisma.Prisma__BattleParticipantClient<runtime.Types.Result.GetResult<Prisma.$BattleParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BattleParticipantCountArgs>(args?: Prisma.Subset<T, BattleParticipantCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BattleParticipantCountAggregateOutputType> : number>;
    aggregate<T extends BattleParticipantAggregateArgs>(args: Prisma.Subset<T, BattleParticipantAggregateArgs>): Prisma.PrismaPromise<GetBattleParticipantAggregateType<T>>;
    groupBy<T extends BattleParticipantGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BattleParticipantGroupByArgs['orderBy'];
    } : {
        orderBy?: BattleParticipantGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BattleParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBattleParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BattleParticipantFieldRefs;
}
export interface Prisma__BattleParticipantClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    battle<T extends Prisma.BattleDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BattleDefaultArgs<ExtArgs>>): Prisma.Prisma__BattleClient<runtime.Types.Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    characterUsed<T extends Prisma.UserCharacterDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserCharacterDefaultArgs<ExtArgs>>): Prisma.Prisma__UserCharacterClient<runtime.Types.Result.GetResult<Prisma.$UserCharacterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BattleParticipantFieldRefs {
    readonly id: Prisma.FieldRef<"BattleParticipant", 'Int'>;
    readonly battleId: Prisma.FieldRef<"BattleParticipant", 'Int'>;
    readonly userId: Prisma.FieldRef<"BattleParticipant", 'Int'>;
    readonly userCharacterId: Prisma.FieldRef<"BattleParticipant", 'Int'>;
}
export type BattleParticipantFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BattleParticipantSelect<ExtArgs> | null;
    omit?: Prisma.BattleParticipantOmit<ExtArgs> | null;
    include?: Prisma.BattleParticipantInclude<ExtArgs> | null;
    where: Prisma.BattleParticipantWhereUniqueInput;
};
export type BattleParticipantFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BattleParticipantSelect<ExtArgs> | null;
    omit?: Prisma.BattleParticipantOmit<ExtArgs> | null;
    include?: Prisma.BattleParticipantInclude<ExtArgs> | null;
    where: Prisma.BattleParticipantWhereUniqueInput;
};
export type BattleParticipantFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BattleParticipantFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BattleParticipantFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BattleParticipantCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BattleParticipantSelect<ExtArgs> | null;
    omit?: Prisma.BattleParticipantOmit<ExtArgs> | null;
    include?: Prisma.BattleParticipantInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BattleParticipantCreateInput, Prisma.BattleParticipantUncheckedCreateInput>;
};
export type BattleParticipantCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BattleParticipantCreateManyInput | Prisma.BattleParticipantCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BattleParticipantCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BattleParticipantSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BattleParticipantOmit<ExtArgs> | null;
    data: Prisma.BattleParticipantCreateManyInput | Prisma.BattleParticipantCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BattleParticipantIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BattleParticipantUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BattleParticipantSelect<ExtArgs> | null;
    omit?: Prisma.BattleParticipantOmit<ExtArgs> | null;
    include?: Prisma.BattleParticipantInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BattleParticipantUpdateInput, Prisma.BattleParticipantUncheckedUpdateInput>;
    where: Prisma.BattleParticipantWhereUniqueInput;
};
export type BattleParticipantUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BattleParticipantUpdateManyMutationInput, Prisma.BattleParticipantUncheckedUpdateManyInput>;
    where?: Prisma.BattleParticipantWhereInput;
    limit?: number;
};
export type BattleParticipantUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BattleParticipantSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BattleParticipantOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BattleParticipantUpdateManyMutationInput, Prisma.BattleParticipantUncheckedUpdateManyInput>;
    where?: Prisma.BattleParticipantWhereInput;
    limit?: number;
    include?: Prisma.BattleParticipantIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BattleParticipantUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BattleParticipantSelect<ExtArgs> | null;
    omit?: Prisma.BattleParticipantOmit<ExtArgs> | null;
    include?: Prisma.BattleParticipantInclude<ExtArgs> | null;
    where: Prisma.BattleParticipantWhereUniqueInput;
    create: Prisma.XOR<Prisma.BattleParticipantCreateInput, Prisma.BattleParticipantUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BattleParticipantUpdateInput, Prisma.BattleParticipantUncheckedUpdateInput>;
};
export type BattleParticipantDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BattleParticipantSelect<ExtArgs> | null;
    omit?: Prisma.BattleParticipantOmit<ExtArgs> | null;
    include?: Prisma.BattleParticipantInclude<ExtArgs> | null;
    where: Prisma.BattleParticipantWhereUniqueInput;
};
export type BattleParticipantDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BattleParticipantWhereInput;
    limit?: number;
};
export type BattleParticipantDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BattleParticipantSelect<ExtArgs> | null;
    omit?: Prisma.BattleParticipantOmit<ExtArgs> | null;
    include?: Prisma.BattleParticipantInclude<ExtArgs> | null;
};
export {};
