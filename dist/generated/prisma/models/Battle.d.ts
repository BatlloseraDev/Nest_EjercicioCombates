import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BattleModel = runtime.Types.Result.DefaultSelection<Prisma.$BattlePayload>;
export type AggregateBattle = {
    _count: BattleCountAggregateOutputType | null;
    _avg: BattleAvgAggregateOutputType | null;
    _sum: BattleSumAggregateOutputType | null;
    _min: BattleMinAggregateOutputType | null;
    _max: BattleMaxAggregateOutputType | null;
};
export type BattleAvgAggregateOutputType = {
    id: number | null;
    winnerId: number | null;
};
export type BattleSumAggregateOutputType = {
    id: number | null;
    winnerId: number | null;
};
export type BattleMinAggregateOutputType = {
    id: number | null;
    status: $Enums.BattleStatus | null;
    winnerId: number | null;
    createdAt: Date | null;
    finishedAt: Date | null;
};
export type BattleMaxAggregateOutputType = {
    id: number | null;
    status: $Enums.BattleStatus | null;
    winnerId: number | null;
    createdAt: Date | null;
    finishedAt: Date | null;
};
export type BattleCountAggregateOutputType = {
    id: number;
    status: number;
    winnerId: number;
    createdAt: number;
    finishedAt: number;
    _all: number;
};
export type BattleAvgAggregateInputType = {
    id?: true;
    winnerId?: true;
};
export type BattleSumAggregateInputType = {
    id?: true;
    winnerId?: true;
};
export type BattleMinAggregateInputType = {
    id?: true;
    status?: true;
    winnerId?: true;
    createdAt?: true;
    finishedAt?: true;
};
export type BattleMaxAggregateInputType = {
    id?: true;
    status?: true;
    winnerId?: true;
    createdAt?: true;
    finishedAt?: true;
};
export type BattleCountAggregateInputType = {
    id?: true;
    status?: true;
    winnerId?: true;
    createdAt?: true;
    finishedAt?: true;
    _all?: true;
};
export type BattleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BattleWhereInput;
    orderBy?: Prisma.BattleOrderByWithRelationInput | Prisma.BattleOrderByWithRelationInput[];
    cursor?: Prisma.BattleWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BattleCountAggregateInputType;
    _avg?: BattleAvgAggregateInputType;
    _sum?: BattleSumAggregateInputType;
    _min?: BattleMinAggregateInputType;
    _max?: BattleMaxAggregateInputType;
};
export type GetBattleAggregateType<T extends BattleAggregateArgs> = {
    [P in keyof T & keyof AggregateBattle]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBattle[P]> : Prisma.GetScalarType<T[P], AggregateBattle[P]>;
};
export type BattleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BattleWhereInput;
    orderBy?: Prisma.BattleOrderByWithAggregationInput | Prisma.BattleOrderByWithAggregationInput[];
    by: Prisma.BattleScalarFieldEnum[] | Prisma.BattleScalarFieldEnum;
    having?: Prisma.BattleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BattleCountAggregateInputType | true;
    _avg?: BattleAvgAggregateInputType;
    _sum?: BattleSumAggregateInputType;
    _min?: BattleMinAggregateInputType;
    _max?: BattleMaxAggregateInputType;
};
export type BattleGroupByOutputType = {
    id: number;
    status: $Enums.BattleStatus;
    winnerId: number | null;
    createdAt: Date;
    finishedAt: Date | null;
    _count: BattleCountAggregateOutputType | null;
    _avg: BattleAvgAggregateOutputType | null;
    _sum: BattleSumAggregateOutputType | null;
    _min: BattleMinAggregateOutputType | null;
    _max: BattleMaxAggregateOutputType | null;
};
type GetBattleGroupByPayload<T extends BattleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BattleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BattleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BattleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BattleGroupByOutputType[P]>;
}>>;
export type BattleWhereInput = {
    AND?: Prisma.BattleWhereInput | Prisma.BattleWhereInput[];
    OR?: Prisma.BattleWhereInput[];
    NOT?: Prisma.BattleWhereInput | Prisma.BattleWhereInput[];
    id?: Prisma.IntFilter<"Battle"> | number;
    status?: Prisma.EnumBattleStatusFilter<"Battle"> | $Enums.BattleStatus;
    winnerId?: Prisma.IntNullableFilter<"Battle"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Battle"> | Date | string;
    finishedAt?: Prisma.DateTimeNullableFilter<"Battle"> | Date | string | null;
    winner?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    participants?: Prisma.BattleParticipantListRelationFilter;
};
export type BattleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    winnerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    finishedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    winner?: Prisma.UserOrderByWithRelationInput;
    participants?: Prisma.BattleParticipantOrderByRelationAggregateInput;
};
export type BattleWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.BattleWhereInput | Prisma.BattleWhereInput[];
    OR?: Prisma.BattleWhereInput[];
    NOT?: Prisma.BattleWhereInput | Prisma.BattleWhereInput[];
    status?: Prisma.EnumBattleStatusFilter<"Battle"> | $Enums.BattleStatus;
    winnerId?: Prisma.IntNullableFilter<"Battle"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Battle"> | Date | string;
    finishedAt?: Prisma.DateTimeNullableFilter<"Battle"> | Date | string | null;
    winner?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    participants?: Prisma.BattleParticipantListRelationFilter;
}, "id">;
export type BattleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    winnerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    finishedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.BattleCountOrderByAggregateInput;
    _avg?: Prisma.BattleAvgOrderByAggregateInput;
    _max?: Prisma.BattleMaxOrderByAggregateInput;
    _min?: Prisma.BattleMinOrderByAggregateInput;
    _sum?: Prisma.BattleSumOrderByAggregateInput;
};
export type BattleScalarWhereWithAggregatesInput = {
    AND?: Prisma.BattleScalarWhereWithAggregatesInput | Prisma.BattleScalarWhereWithAggregatesInput[];
    OR?: Prisma.BattleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BattleScalarWhereWithAggregatesInput | Prisma.BattleScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Battle"> | number;
    status?: Prisma.EnumBattleStatusWithAggregatesFilter<"Battle"> | $Enums.BattleStatus;
    winnerId?: Prisma.IntNullableWithAggregatesFilter<"Battle"> | number | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Battle"> | Date | string;
    finishedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Battle"> | Date | string | null;
};
export type BattleCreateInput = {
    status?: $Enums.BattleStatus;
    createdAt?: Date | string;
    finishedAt?: Date | string | null;
    winner?: Prisma.UserCreateNestedOneWithoutBattlesWonInput;
    participants?: Prisma.BattleParticipantCreateNestedManyWithoutBattleInput;
};
export type BattleUncheckedCreateInput = {
    id?: number;
    status?: $Enums.BattleStatus;
    winnerId?: number | null;
    createdAt?: Date | string;
    finishedAt?: Date | string | null;
    participants?: Prisma.BattleParticipantUncheckedCreateNestedManyWithoutBattleInput;
};
export type BattleUpdateInput = {
    status?: Prisma.EnumBattleStatusFieldUpdateOperationsInput | $Enums.BattleStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    finishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    winner?: Prisma.UserUpdateOneWithoutBattlesWonNestedInput;
    participants?: Prisma.BattleParticipantUpdateManyWithoutBattleNestedInput;
};
export type BattleUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumBattleStatusFieldUpdateOperationsInput | $Enums.BattleStatus;
    winnerId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    finishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    participants?: Prisma.BattleParticipantUncheckedUpdateManyWithoutBattleNestedInput;
};
export type BattleCreateManyInput = {
    id?: number;
    status?: $Enums.BattleStatus;
    winnerId?: number | null;
    createdAt?: Date | string;
    finishedAt?: Date | string | null;
};
export type BattleUpdateManyMutationInput = {
    status?: Prisma.EnumBattleStatusFieldUpdateOperationsInput | $Enums.BattleStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    finishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type BattleUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumBattleStatusFieldUpdateOperationsInput | $Enums.BattleStatus;
    winnerId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    finishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type BattleListRelationFilter = {
    every?: Prisma.BattleWhereInput;
    some?: Prisma.BattleWhereInput;
    none?: Prisma.BattleWhereInput;
};
export type BattleOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BattleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    winnerId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    finishedAt?: Prisma.SortOrder;
};
export type BattleAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    winnerId?: Prisma.SortOrder;
};
export type BattleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    winnerId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    finishedAt?: Prisma.SortOrder;
};
export type BattleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    winnerId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    finishedAt?: Prisma.SortOrder;
};
export type BattleSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    winnerId?: Prisma.SortOrder;
};
export type BattleScalarRelationFilter = {
    is?: Prisma.BattleWhereInput;
    isNot?: Prisma.BattleWhereInput;
};
export type BattleCreateNestedManyWithoutWinnerInput = {
    create?: Prisma.XOR<Prisma.BattleCreateWithoutWinnerInput, Prisma.BattleUncheckedCreateWithoutWinnerInput> | Prisma.BattleCreateWithoutWinnerInput[] | Prisma.BattleUncheckedCreateWithoutWinnerInput[];
    connectOrCreate?: Prisma.BattleCreateOrConnectWithoutWinnerInput | Prisma.BattleCreateOrConnectWithoutWinnerInput[];
    createMany?: Prisma.BattleCreateManyWinnerInputEnvelope;
    connect?: Prisma.BattleWhereUniqueInput | Prisma.BattleWhereUniqueInput[];
};
export type BattleUncheckedCreateNestedManyWithoutWinnerInput = {
    create?: Prisma.XOR<Prisma.BattleCreateWithoutWinnerInput, Prisma.BattleUncheckedCreateWithoutWinnerInput> | Prisma.BattleCreateWithoutWinnerInput[] | Prisma.BattleUncheckedCreateWithoutWinnerInput[];
    connectOrCreate?: Prisma.BattleCreateOrConnectWithoutWinnerInput | Prisma.BattleCreateOrConnectWithoutWinnerInput[];
    createMany?: Prisma.BattleCreateManyWinnerInputEnvelope;
    connect?: Prisma.BattleWhereUniqueInput | Prisma.BattleWhereUniqueInput[];
};
export type BattleUpdateManyWithoutWinnerNestedInput = {
    create?: Prisma.XOR<Prisma.BattleCreateWithoutWinnerInput, Prisma.BattleUncheckedCreateWithoutWinnerInput> | Prisma.BattleCreateWithoutWinnerInput[] | Prisma.BattleUncheckedCreateWithoutWinnerInput[];
    connectOrCreate?: Prisma.BattleCreateOrConnectWithoutWinnerInput | Prisma.BattleCreateOrConnectWithoutWinnerInput[];
    upsert?: Prisma.BattleUpsertWithWhereUniqueWithoutWinnerInput | Prisma.BattleUpsertWithWhereUniqueWithoutWinnerInput[];
    createMany?: Prisma.BattleCreateManyWinnerInputEnvelope;
    set?: Prisma.BattleWhereUniqueInput | Prisma.BattleWhereUniqueInput[];
    disconnect?: Prisma.BattleWhereUniqueInput | Prisma.BattleWhereUniqueInput[];
    delete?: Prisma.BattleWhereUniqueInput | Prisma.BattleWhereUniqueInput[];
    connect?: Prisma.BattleWhereUniqueInput | Prisma.BattleWhereUniqueInput[];
    update?: Prisma.BattleUpdateWithWhereUniqueWithoutWinnerInput | Prisma.BattleUpdateWithWhereUniqueWithoutWinnerInput[];
    updateMany?: Prisma.BattleUpdateManyWithWhereWithoutWinnerInput | Prisma.BattleUpdateManyWithWhereWithoutWinnerInput[];
    deleteMany?: Prisma.BattleScalarWhereInput | Prisma.BattleScalarWhereInput[];
};
export type BattleUncheckedUpdateManyWithoutWinnerNestedInput = {
    create?: Prisma.XOR<Prisma.BattleCreateWithoutWinnerInput, Prisma.BattleUncheckedCreateWithoutWinnerInput> | Prisma.BattleCreateWithoutWinnerInput[] | Prisma.BattleUncheckedCreateWithoutWinnerInput[];
    connectOrCreate?: Prisma.BattleCreateOrConnectWithoutWinnerInput | Prisma.BattleCreateOrConnectWithoutWinnerInput[];
    upsert?: Prisma.BattleUpsertWithWhereUniqueWithoutWinnerInput | Prisma.BattleUpsertWithWhereUniqueWithoutWinnerInput[];
    createMany?: Prisma.BattleCreateManyWinnerInputEnvelope;
    set?: Prisma.BattleWhereUniqueInput | Prisma.BattleWhereUniqueInput[];
    disconnect?: Prisma.BattleWhereUniqueInput | Prisma.BattleWhereUniqueInput[];
    delete?: Prisma.BattleWhereUniqueInput | Prisma.BattleWhereUniqueInput[];
    connect?: Prisma.BattleWhereUniqueInput | Prisma.BattleWhereUniqueInput[];
    update?: Prisma.BattleUpdateWithWhereUniqueWithoutWinnerInput | Prisma.BattleUpdateWithWhereUniqueWithoutWinnerInput[];
    updateMany?: Prisma.BattleUpdateManyWithWhereWithoutWinnerInput | Prisma.BattleUpdateManyWithWhereWithoutWinnerInput[];
    deleteMany?: Prisma.BattleScalarWhereInput | Prisma.BattleScalarWhereInput[];
};
export type EnumBattleStatusFieldUpdateOperationsInput = {
    set?: $Enums.BattleStatus;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type BattleCreateNestedOneWithoutParticipantsInput = {
    create?: Prisma.XOR<Prisma.BattleCreateWithoutParticipantsInput, Prisma.BattleUncheckedCreateWithoutParticipantsInput>;
    connectOrCreate?: Prisma.BattleCreateOrConnectWithoutParticipantsInput;
    connect?: Prisma.BattleWhereUniqueInput;
};
export type BattleUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: Prisma.XOR<Prisma.BattleCreateWithoutParticipantsInput, Prisma.BattleUncheckedCreateWithoutParticipantsInput>;
    connectOrCreate?: Prisma.BattleCreateOrConnectWithoutParticipantsInput;
    upsert?: Prisma.BattleUpsertWithoutParticipantsInput;
    connect?: Prisma.BattleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BattleUpdateToOneWithWhereWithoutParticipantsInput, Prisma.BattleUpdateWithoutParticipantsInput>, Prisma.BattleUncheckedUpdateWithoutParticipantsInput>;
};
export type BattleCreateWithoutWinnerInput = {
    status?: $Enums.BattleStatus;
    createdAt?: Date | string;
    finishedAt?: Date | string | null;
    participants?: Prisma.BattleParticipantCreateNestedManyWithoutBattleInput;
};
export type BattleUncheckedCreateWithoutWinnerInput = {
    id?: number;
    status?: $Enums.BattleStatus;
    createdAt?: Date | string;
    finishedAt?: Date | string | null;
    participants?: Prisma.BattleParticipantUncheckedCreateNestedManyWithoutBattleInput;
};
export type BattleCreateOrConnectWithoutWinnerInput = {
    where: Prisma.BattleWhereUniqueInput;
    create: Prisma.XOR<Prisma.BattleCreateWithoutWinnerInput, Prisma.BattleUncheckedCreateWithoutWinnerInput>;
};
export type BattleCreateManyWinnerInputEnvelope = {
    data: Prisma.BattleCreateManyWinnerInput | Prisma.BattleCreateManyWinnerInput[];
    skipDuplicates?: boolean;
};
export type BattleUpsertWithWhereUniqueWithoutWinnerInput = {
    where: Prisma.BattleWhereUniqueInput;
    update: Prisma.XOR<Prisma.BattleUpdateWithoutWinnerInput, Prisma.BattleUncheckedUpdateWithoutWinnerInput>;
    create: Prisma.XOR<Prisma.BattleCreateWithoutWinnerInput, Prisma.BattleUncheckedCreateWithoutWinnerInput>;
};
export type BattleUpdateWithWhereUniqueWithoutWinnerInput = {
    where: Prisma.BattleWhereUniqueInput;
    data: Prisma.XOR<Prisma.BattleUpdateWithoutWinnerInput, Prisma.BattleUncheckedUpdateWithoutWinnerInput>;
};
export type BattleUpdateManyWithWhereWithoutWinnerInput = {
    where: Prisma.BattleScalarWhereInput;
    data: Prisma.XOR<Prisma.BattleUpdateManyMutationInput, Prisma.BattleUncheckedUpdateManyWithoutWinnerInput>;
};
export type BattleScalarWhereInput = {
    AND?: Prisma.BattleScalarWhereInput | Prisma.BattleScalarWhereInput[];
    OR?: Prisma.BattleScalarWhereInput[];
    NOT?: Prisma.BattleScalarWhereInput | Prisma.BattleScalarWhereInput[];
    id?: Prisma.IntFilter<"Battle"> | number;
    status?: Prisma.EnumBattleStatusFilter<"Battle"> | $Enums.BattleStatus;
    winnerId?: Prisma.IntNullableFilter<"Battle"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Battle"> | Date | string;
    finishedAt?: Prisma.DateTimeNullableFilter<"Battle"> | Date | string | null;
};
export type BattleCreateWithoutParticipantsInput = {
    status?: $Enums.BattleStatus;
    createdAt?: Date | string;
    finishedAt?: Date | string | null;
    winner?: Prisma.UserCreateNestedOneWithoutBattlesWonInput;
};
export type BattleUncheckedCreateWithoutParticipantsInput = {
    id?: number;
    status?: $Enums.BattleStatus;
    winnerId?: number | null;
    createdAt?: Date | string;
    finishedAt?: Date | string | null;
};
export type BattleCreateOrConnectWithoutParticipantsInput = {
    where: Prisma.BattleWhereUniqueInput;
    create: Prisma.XOR<Prisma.BattleCreateWithoutParticipantsInput, Prisma.BattleUncheckedCreateWithoutParticipantsInput>;
};
export type BattleUpsertWithoutParticipantsInput = {
    update: Prisma.XOR<Prisma.BattleUpdateWithoutParticipantsInput, Prisma.BattleUncheckedUpdateWithoutParticipantsInput>;
    create: Prisma.XOR<Prisma.BattleCreateWithoutParticipantsInput, Prisma.BattleUncheckedCreateWithoutParticipantsInput>;
    where?: Prisma.BattleWhereInput;
};
export type BattleUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: Prisma.BattleWhereInput;
    data: Prisma.XOR<Prisma.BattleUpdateWithoutParticipantsInput, Prisma.BattleUncheckedUpdateWithoutParticipantsInput>;
};
export type BattleUpdateWithoutParticipantsInput = {
    status?: Prisma.EnumBattleStatusFieldUpdateOperationsInput | $Enums.BattleStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    finishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    winner?: Prisma.UserUpdateOneWithoutBattlesWonNestedInput;
};
export type BattleUncheckedUpdateWithoutParticipantsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumBattleStatusFieldUpdateOperationsInput | $Enums.BattleStatus;
    winnerId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    finishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type BattleCreateManyWinnerInput = {
    id?: number;
    status?: $Enums.BattleStatus;
    createdAt?: Date | string;
    finishedAt?: Date | string | null;
};
export type BattleUpdateWithoutWinnerInput = {
    status?: Prisma.EnumBattleStatusFieldUpdateOperationsInput | $Enums.BattleStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    finishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    participants?: Prisma.BattleParticipantUpdateManyWithoutBattleNestedInput;
};
export type BattleUncheckedUpdateWithoutWinnerInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumBattleStatusFieldUpdateOperationsInput | $Enums.BattleStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    finishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    participants?: Prisma.BattleParticipantUncheckedUpdateManyWithoutBattleNestedInput;
};
export type BattleUncheckedUpdateManyWithoutWinnerInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumBattleStatusFieldUpdateOperationsInput | $Enums.BattleStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    finishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type BattleCountOutputType = {
    participants: number;
};
export type BattleCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    participants?: boolean | BattleCountOutputTypeCountParticipantsArgs;
};
export type BattleCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BattleCountOutputTypeSelect<ExtArgs> | null;
};
export type BattleCountOutputTypeCountParticipantsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BattleParticipantWhereInput;
};
export type BattleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    status?: boolean;
    winnerId?: boolean;
    createdAt?: boolean;
    finishedAt?: boolean;
    winner?: boolean | Prisma.Battle$winnerArgs<ExtArgs>;
    participants?: boolean | Prisma.Battle$participantsArgs<ExtArgs>;
    _count?: boolean | Prisma.BattleCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["battle"]>;
export type BattleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    status?: boolean;
    winnerId?: boolean;
    createdAt?: boolean;
    finishedAt?: boolean;
    winner?: boolean | Prisma.Battle$winnerArgs<ExtArgs>;
}, ExtArgs["result"]["battle"]>;
export type BattleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    status?: boolean;
    winnerId?: boolean;
    createdAt?: boolean;
    finishedAt?: boolean;
    winner?: boolean | Prisma.Battle$winnerArgs<ExtArgs>;
}, ExtArgs["result"]["battle"]>;
export type BattleSelectScalar = {
    id?: boolean;
    status?: boolean;
    winnerId?: boolean;
    createdAt?: boolean;
    finishedAt?: boolean;
};
export type BattleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "status" | "winnerId" | "createdAt" | "finishedAt", ExtArgs["result"]["battle"]>;
export type BattleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    winner?: boolean | Prisma.Battle$winnerArgs<ExtArgs>;
    participants?: boolean | Prisma.Battle$participantsArgs<ExtArgs>;
    _count?: boolean | Prisma.BattleCountOutputTypeDefaultArgs<ExtArgs>;
};
export type BattleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    winner?: boolean | Prisma.Battle$winnerArgs<ExtArgs>;
};
export type BattleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    winner?: boolean | Prisma.Battle$winnerArgs<ExtArgs>;
};
export type $BattlePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Battle";
    objects: {
        winner: Prisma.$UserPayload<ExtArgs> | null;
        participants: Prisma.$BattleParticipantPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        status: $Enums.BattleStatus;
        winnerId: number | null;
        createdAt: Date;
        finishedAt: Date | null;
    }, ExtArgs["result"]["battle"]>;
    composites: {};
};
export type BattleGetPayload<S extends boolean | null | undefined | BattleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BattlePayload, S>;
export type BattleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BattleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BattleCountAggregateInputType | true;
};
export interface BattleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Battle'];
        meta: {
            name: 'Battle';
        };
    };
    findUnique<T extends BattleFindUniqueArgs>(args: Prisma.SelectSubset<T, BattleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BattleClient<runtime.Types.Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BattleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BattleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BattleClient<runtime.Types.Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BattleFindFirstArgs>(args?: Prisma.SelectSubset<T, BattleFindFirstArgs<ExtArgs>>): Prisma.Prisma__BattleClient<runtime.Types.Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BattleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BattleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BattleClient<runtime.Types.Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BattleFindManyArgs>(args?: Prisma.SelectSubset<T, BattleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BattleCreateArgs>(args: Prisma.SelectSubset<T, BattleCreateArgs<ExtArgs>>): Prisma.Prisma__BattleClient<runtime.Types.Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BattleCreateManyArgs>(args?: Prisma.SelectSubset<T, BattleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BattleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BattleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BattleDeleteArgs>(args: Prisma.SelectSubset<T, BattleDeleteArgs<ExtArgs>>): Prisma.Prisma__BattleClient<runtime.Types.Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BattleUpdateArgs>(args: Prisma.SelectSubset<T, BattleUpdateArgs<ExtArgs>>): Prisma.Prisma__BattleClient<runtime.Types.Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BattleDeleteManyArgs>(args?: Prisma.SelectSubset<T, BattleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BattleUpdateManyArgs>(args: Prisma.SelectSubset<T, BattleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BattleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BattleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BattleUpsertArgs>(args: Prisma.SelectSubset<T, BattleUpsertArgs<ExtArgs>>): Prisma.Prisma__BattleClient<runtime.Types.Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BattleCountArgs>(args?: Prisma.Subset<T, BattleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BattleCountAggregateOutputType> : number>;
    aggregate<T extends BattleAggregateArgs>(args: Prisma.Subset<T, BattleAggregateArgs>): Prisma.PrismaPromise<GetBattleAggregateType<T>>;
    groupBy<T extends BattleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BattleGroupByArgs['orderBy'];
    } : {
        orderBy?: BattleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BattleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBattleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BattleFieldRefs;
}
export interface Prisma__BattleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    winner<T extends Prisma.Battle$winnerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Battle$winnerArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    participants<T extends Prisma.Battle$participantsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Battle$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BattleParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BattleFieldRefs {
    readonly id: Prisma.FieldRef<"Battle", 'Int'>;
    readonly status: Prisma.FieldRef<"Battle", 'BattleStatus'>;
    readonly winnerId: Prisma.FieldRef<"Battle", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Battle", 'DateTime'>;
    readonly finishedAt: Prisma.FieldRef<"Battle", 'DateTime'>;
}
export type BattleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BattleSelect<ExtArgs> | null;
    omit?: Prisma.BattleOmit<ExtArgs> | null;
    include?: Prisma.BattleInclude<ExtArgs> | null;
    where: Prisma.BattleWhereUniqueInput;
};
export type BattleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BattleSelect<ExtArgs> | null;
    omit?: Prisma.BattleOmit<ExtArgs> | null;
    include?: Prisma.BattleInclude<ExtArgs> | null;
    where: Prisma.BattleWhereUniqueInput;
};
export type BattleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BattleSelect<ExtArgs> | null;
    omit?: Prisma.BattleOmit<ExtArgs> | null;
    include?: Prisma.BattleInclude<ExtArgs> | null;
    where?: Prisma.BattleWhereInput;
    orderBy?: Prisma.BattleOrderByWithRelationInput | Prisma.BattleOrderByWithRelationInput[];
    cursor?: Prisma.BattleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BattleScalarFieldEnum | Prisma.BattleScalarFieldEnum[];
};
export type BattleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BattleSelect<ExtArgs> | null;
    omit?: Prisma.BattleOmit<ExtArgs> | null;
    include?: Prisma.BattleInclude<ExtArgs> | null;
    where?: Prisma.BattleWhereInput;
    orderBy?: Prisma.BattleOrderByWithRelationInput | Prisma.BattleOrderByWithRelationInput[];
    cursor?: Prisma.BattleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BattleScalarFieldEnum | Prisma.BattleScalarFieldEnum[];
};
export type BattleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BattleSelect<ExtArgs> | null;
    omit?: Prisma.BattleOmit<ExtArgs> | null;
    include?: Prisma.BattleInclude<ExtArgs> | null;
    where?: Prisma.BattleWhereInput;
    orderBy?: Prisma.BattleOrderByWithRelationInput | Prisma.BattleOrderByWithRelationInput[];
    cursor?: Prisma.BattleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BattleScalarFieldEnum | Prisma.BattleScalarFieldEnum[];
};
export type BattleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BattleSelect<ExtArgs> | null;
    omit?: Prisma.BattleOmit<ExtArgs> | null;
    include?: Prisma.BattleInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.BattleCreateInput, Prisma.BattleUncheckedCreateInput>;
};
export type BattleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BattleCreateManyInput | Prisma.BattleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BattleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BattleSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BattleOmit<ExtArgs> | null;
    data: Prisma.BattleCreateManyInput | Prisma.BattleCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BattleIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BattleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BattleSelect<ExtArgs> | null;
    omit?: Prisma.BattleOmit<ExtArgs> | null;
    include?: Prisma.BattleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BattleUpdateInput, Prisma.BattleUncheckedUpdateInput>;
    where: Prisma.BattleWhereUniqueInput;
};
export type BattleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BattleUpdateManyMutationInput, Prisma.BattleUncheckedUpdateManyInput>;
    where?: Prisma.BattleWhereInput;
    limit?: number;
};
export type BattleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BattleSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BattleOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BattleUpdateManyMutationInput, Prisma.BattleUncheckedUpdateManyInput>;
    where?: Prisma.BattleWhereInput;
    limit?: number;
    include?: Prisma.BattleIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BattleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BattleSelect<ExtArgs> | null;
    omit?: Prisma.BattleOmit<ExtArgs> | null;
    include?: Prisma.BattleInclude<ExtArgs> | null;
    where: Prisma.BattleWhereUniqueInput;
    create: Prisma.XOR<Prisma.BattleCreateInput, Prisma.BattleUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BattleUpdateInput, Prisma.BattleUncheckedUpdateInput>;
};
export type BattleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BattleSelect<ExtArgs> | null;
    omit?: Prisma.BattleOmit<ExtArgs> | null;
    include?: Prisma.BattleInclude<ExtArgs> | null;
    where: Prisma.BattleWhereUniqueInput;
};
export type BattleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BattleWhereInput;
    limit?: number;
};
export type Battle$winnerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type Battle$participantsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BattleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BattleSelect<ExtArgs> | null;
    omit?: Prisma.BattleOmit<ExtArgs> | null;
    include?: Prisma.BattleInclude<ExtArgs> | null;
};
export {};
