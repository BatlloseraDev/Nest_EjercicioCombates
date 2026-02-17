import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CharacterModel = runtime.Types.Result.DefaultSelection<Prisma.$CharacterPayload>;
export type AggregateCharacter = {
    _count: CharacterCountAggregateOutputType | null;
    _avg: CharacterAvgAggregateOutputType | null;
    _sum: CharacterSumAggregateOutputType | null;
    _min: CharacterMinAggregateOutputType | null;
    _max: CharacterMaxAggregateOutputType | null;
};
export type CharacterAvgAggregateOutputType = {
    id: number | null;
    baseHp: number | null;
    baseAttack: number | null;
    minLevel: number | null;
    special: number | null;
};
export type CharacterSumAggregateOutputType = {
    id: number | null;
    baseHp: number | null;
    baseAttack: number | null;
    minLevel: number | null;
    special: number | null;
};
export type CharacterMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    baseHp: number | null;
    baseAttack: number | null;
    minLevel: number | null;
    special: number | null;
    imageUrl: string | null;
};
export type CharacterMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    baseHp: number | null;
    baseAttack: number | null;
    minLevel: number | null;
    special: number | null;
    imageUrl: string | null;
};
export type CharacterCountAggregateOutputType = {
    id: number;
    name: number;
    baseHp: number;
    baseAttack: number;
    minLevel: number;
    special: number;
    imageUrl: number;
    _all: number;
};
export type CharacterAvgAggregateInputType = {
    id?: true;
    baseHp?: true;
    baseAttack?: true;
    minLevel?: true;
    special?: true;
};
export type CharacterSumAggregateInputType = {
    id?: true;
    baseHp?: true;
    baseAttack?: true;
    minLevel?: true;
    special?: true;
};
export type CharacterMinAggregateInputType = {
    id?: true;
    name?: true;
    baseHp?: true;
    baseAttack?: true;
    minLevel?: true;
    special?: true;
    imageUrl?: true;
};
export type CharacterMaxAggregateInputType = {
    id?: true;
    name?: true;
    baseHp?: true;
    baseAttack?: true;
    minLevel?: true;
    special?: true;
    imageUrl?: true;
};
export type CharacterCountAggregateInputType = {
    id?: true;
    name?: true;
    baseHp?: true;
    baseAttack?: true;
    minLevel?: true;
    special?: true;
    imageUrl?: true;
    _all?: true;
};
export type CharacterAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CharacterWhereInput;
    orderBy?: Prisma.CharacterOrderByWithRelationInput | Prisma.CharacterOrderByWithRelationInput[];
    cursor?: Prisma.CharacterWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CharacterCountAggregateInputType;
    _avg?: CharacterAvgAggregateInputType;
    _sum?: CharacterSumAggregateInputType;
    _min?: CharacterMinAggregateInputType;
    _max?: CharacterMaxAggregateInputType;
};
export type GetCharacterAggregateType<T extends CharacterAggregateArgs> = {
    [P in keyof T & keyof AggregateCharacter]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCharacter[P]> : Prisma.GetScalarType<T[P], AggregateCharacter[P]>;
};
export type CharacterGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CharacterWhereInput;
    orderBy?: Prisma.CharacterOrderByWithAggregationInput | Prisma.CharacterOrderByWithAggregationInput[];
    by: Prisma.CharacterScalarFieldEnum[] | Prisma.CharacterScalarFieldEnum;
    having?: Prisma.CharacterScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CharacterCountAggregateInputType | true;
    _avg?: CharacterAvgAggregateInputType;
    _sum?: CharacterSumAggregateInputType;
    _min?: CharacterMinAggregateInputType;
    _max?: CharacterMaxAggregateInputType;
};
export type CharacterGroupByOutputType = {
    id: number;
    name: string;
    baseHp: number;
    baseAttack: number;
    minLevel: number;
    special: number;
    imageUrl: string | null;
    _count: CharacterCountAggregateOutputType | null;
    _avg: CharacterAvgAggregateOutputType | null;
    _sum: CharacterSumAggregateOutputType | null;
    _min: CharacterMinAggregateOutputType | null;
    _max: CharacterMaxAggregateOutputType | null;
};
type GetCharacterGroupByPayload<T extends CharacterGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CharacterGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CharacterGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CharacterGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CharacterGroupByOutputType[P]>;
}>>;
export type CharacterWhereInput = {
    AND?: Prisma.CharacterWhereInput | Prisma.CharacterWhereInput[];
    OR?: Prisma.CharacterWhereInput[];
    NOT?: Prisma.CharacterWhereInput | Prisma.CharacterWhereInput[];
    id?: Prisma.IntFilter<"Character"> | number;
    name?: Prisma.StringFilter<"Character"> | string;
    baseHp?: Prisma.IntFilter<"Character"> | number;
    baseAttack?: Prisma.IntFilter<"Character"> | number;
    minLevel?: Prisma.IntFilter<"Character"> | number;
    special?: Prisma.FloatFilter<"Character"> | number;
    imageUrl?: Prisma.StringNullableFilter<"Character"> | string | null;
    instances?: Prisma.UserCharacterListRelationFilter;
};
export type CharacterOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    baseHp?: Prisma.SortOrder;
    baseAttack?: Prisma.SortOrder;
    minLevel?: Prisma.SortOrder;
    special?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    instances?: Prisma.UserCharacterOrderByRelationAggregateInput;
};
export type CharacterWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    name?: string;
    AND?: Prisma.CharacterWhereInput | Prisma.CharacterWhereInput[];
    OR?: Prisma.CharacterWhereInput[];
    NOT?: Prisma.CharacterWhereInput | Prisma.CharacterWhereInput[];
    baseHp?: Prisma.IntFilter<"Character"> | number;
    baseAttack?: Prisma.IntFilter<"Character"> | number;
    minLevel?: Prisma.IntFilter<"Character"> | number;
    special?: Prisma.FloatFilter<"Character"> | number;
    imageUrl?: Prisma.StringNullableFilter<"Character"> | string | null;
    instances?: Prisma.UserCharacterListRelationFilter;
}, "id" | "name">;
export type CharacterOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    baseHp?: Prisma.SortOrder;
    baseAttack?: Prisma.SortOrder;
    minLevel?: Prisma.SortOrder;
    special?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.CharacterCountOrderByAggregateInput;
    _avg?: Prisma.CharacterAvgOrderByAggregateInput;
    _max?: Prisma.CharacterMaxOrderByAggregateInput;
    _min?: Prisma.CharacterMinOrderByAggregateInput;
    _sum?: Prisma.CharacterSumOrderByAggregateInput;
};
export type CharacterScalarWhereWithAggregatesInput = {
    AND?: Prisma.CharacterScalarWhereWithAggregatesInput | Prisma.CharacterScalarWhereWithAggregatesInput[];
    OR?: Prisma.CharacterScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CharacterScalarWhereWithAggregatesInput | Prisma.CharacterScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Character"> | number;
    name?: Prisma.StringWithAggregatesFilter<"Character"> | string;
    baseHp?: Prisma.IntWithAggregatesFilter<"Character"> | number;
    baseAttack?: Prisma.IntWithAggregatesFilter<"Character"> | number;
    minLevel?: Prisma.IntWithAggregatesFilter<"Character"> | number;
    special?: Prisma.FloatWithAggregatesFilter<"Character"> | number;
    imageUrl?: Prisma.StringNullableWithAggregatesFilter<"Character"> | string | null;
};
export type CharacterCreateInput = {
    name: string;
    baseHp: number;
    baseAttack: number;
    minLevel?: number;
    special?: number;
    imageUrl?: string | null;
    instances?: Prisma.UserCharacterCreateNestedManyWithoutCharacterInput;
};
export type CharacterUncheckedCreateInput = {
    id?: number;
    name: string;
    baseHp: number;
    baseAttack: number;
    minLevel?: number;
    special?: number;
    imageUrl?: string | null;
    instances?: Prisma.UserCharacterUncheckedCreateNestedManyWithoutCharacterInput;
};
export type CharacterUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    baseHp?: Prisma.IntFieldUpdateOperationsInput | number;
    baseAttack?: Prisma.IntFieldUpdateOperationsInput | number;
    minLevel?: Prisma.IntFieldUpdateOperationsInput | number;
    special?: Prisma.FloatFieldUpdateOperationsInput | number;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    instances?: Prisma.UserCharacterUpdateManyWithoutCharacterNestedInput;
};
export type CharacterUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    baseHp?: Prisma.IntFieldUpdateOperationsInput | number;
    baseAttack?: Prisma.IntFieldUpdateOperationsInput | number;
    minLevel?: Prisma.IntFieldUpdateOperationsInput | number;
    special?: Prisma.FloatFieldUpdateOperationsInput | number;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    instances?: Prisma.UserCharacterUncheckedUpdateManyWithoutCharacterNestedInput;
};
export type CharacterCreateManyInput = {
    id?: number;
    name: string;
    baseHp: number;
    baseAttack: number;
    minLevel?: number;
    special?: number;
    imageUrl?: string | null;
};
export type CharacterUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    baseHp?: Prisma.IntFieldUpdateOperationsInput | number;
    baseAttack?: Prisma.IntFieldUpdateOperationsInput | number;
    minLevel?: Prisma.IntFieldUpdateOperationsInput | number;
    special?: Prisma.FloatFieldUpdateOperationsInput | number;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CharacterUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    baseHp?: Prisma.IntFieldUpdateOperationsInput | number;
    baseAttack?: Prisma.IntFieldUpdateOperationsInput | number;
    minLevel?: Prisma.IntFieldUpdateOperationsInput | number;
    special?: Prisma.FloatFieldUpdateOperationsInput | number;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CharacterCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    baseHp?: Prisma.SortOrder;
    baseAttack?: Prisma.SortOrder;
    minLevel?: Prisma.SortOrder;
    special?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
};
export type CharacterAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    baseHp?: Prisma.SortOrder;
    baseAttack?: Prisma.SortOrder;
    minLevel?: Prisma.SortOrder;
    special?: Prisma.SortOrder;
};
export type CharacterMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    baseHp?: Prisma.SortOrder;
    baseAttack?: Prisma.SortOrder;
    minLevel?: Prisma.SortOrder;
    special?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
};
export type CharacterMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    baseHp?: Prisma.SortOrder;
    baseAttack?: Prisma.SortOrder;
    minLevel?: Prisma.SortOrder;
    special?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
};
export type CharacterSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    baseHp?: Prisma.SortOrder;
    baseAttack?: Prisma.SortOrder;
    minLevel?: Prisma.SortOrder;
    special?: Prisma.SortOrder;
};
export type CharacterScalarRelationFilter = {
    is?: Prisma.CharacterWhereInput;
    isNot?: Prisma.CharacterWhereInput;
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type CharacterCreateNestedOneWithoutInstancesInput = {
    create?: Prisma.XOR<Prisma.CharacterCreateWithoutInstancesInput, Prisma.CharacterUncheckedCreateWithoutInstancesInput>;
    connectOrCreate?: Prisma.CharacterCreateOrConnectWithoutInstancesInput;
    connect?: Prisma.CharacterWhereUniqueInput;
};
export type CharacterUpdateOneRequiredWithoutInstancesNestedInput = {
    create?: Prisma.XOR<Prisma.CharacterCreateWithoutInstancesInput, Prisma.CharacterUncheckedCreateWithoutInstancesInput>;
    connectOrCreate?: Prisma.CharacterCreateOrConnectWithoutInstancesInput;
    upsert?: Prisma.CharacterUpsertWithoutInstancesInput;
    connect?: Prisma.CharacterWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CharacterUpdateToOneWithWhereWithoutInstancesInput, Prisma.CharacterUpdateWithoutInstancesInput>, Prisma.CharacterUncheckedUpdateWithoutInstancesInput>;
};
export type CharacterCreateWithoutInstancesInput = {
    name: string;
    baseHp: number;
    baseAttack: number;
    minLevel?: number;
    special?: number;
    imageUrl?: string | null;
};
export type CharacterUncheckedCreateWithoutInstancesInput = {
    id?: number;
    name: string;
    baseHp: number;
    baseAttack: number;
    minLevel?: number;
    special?: number;
    imageUrl?: string | null;
};
export type CharacterCreateOrConnectWithoutInstancesInput = {
    where: Prisma.CharacterWhereUniqueInput;
    create: Prisma.XOR<Prisma.CharacterCreateWithoutInstancesInput, Prisma.CharacterUncheckedCreateWithoutInstancesInput>;
};
export type CharacterUpsertWithoutInstancesInput = {
    update: Prisma.XOR<Prisma.CharacterUpdateWithoutInstancesInput, Prisma.CharacterUncheckedUpdateWithoutInstancesInput>;
    create: Prisma.XOR<Prisma.CharacterCreateWithoutInstancesInput, Prisma.CharacterUncheckedCreateWithoutInstancesInput>;
    where?: Prisma.CharacterWhereInput;
};
export type CharacterUpdateToOneWithWhereWithoutInstancesInput = {
    where?: Prisma.CharacterWhereInput;
    data: Prisma.XOR<Prisma.CharacterUpdateWithoutInstancesInput, Prisma.CharacterUncheckedUpdateWithoutInstancesInput>;
};
export type CharacterUpdateWithoutInstancesInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    baseHp?: Prisma.IntFieldUpdateOperationsInput | number;
    baseAttack?: Prisma.IntFieldUpdateOperationsInput | number;
    minLevel?: Prisma.IntFieldUpdateOperationsInput | number;
    special?: Prisma.FloatFieldUpdateOperationsInput | number;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CharacterUncheckedUpdateWithoutInstancesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    baseHp?: Prisma.IntFieldUpdateOperationsInput | number;
    baseAttack?: Prisma.IntFieldUpdateOperationsInput | number;
    minLevel?: Prisma.IntFieldUpdateOperationsInput | number;
    special?: Prisma.FloatFieldUpdateOperationsInput | number;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CharacterCountOutputType = {
    instances: number;
};
export type CharacterCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    instances?: boolean | CharacterCountOutputTypeCountInstancesArgs;
};
export type CharacterCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CharacterCountOutputTypeSelect<ExtArgs> | null;
};
export type CharacterCountOutputTypeCountInstancesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserCharacterWhereInput;
};
export type CharacterSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    baseHp?: boolean;
    baseAttack?: boolean;
    minLevel?: boolean;
    special?: boolean;
    imageUrl?: boolean;
    instances?: boolean | Prisma.Character$instancesArgs<ExtArgs>;
    _count?: boolean | Prisma.CharacterCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["character"]>;
export type CharacterSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    baseHp?: boolean;
    baseAttack?: boolean;
    minLevel?: boolean;
    special?: boolean;
    imageUrl?: boolean;
}, ExtArgs["result"]["character"]>;
export type CharacterSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    baseHp?: boolean;
    baseAttack?: boolean;
    minLevel?: boolean;
    special?: boolean;
    imageUrl?: boolean;
}, ExtArgs["result"]["character"]>;
export type CharacterSelectScalar = {
    id?: boolean;
    name?: boolean;
    baseHp?: boolean;
    baseAttack?: boolean;
    minLevel?: boolean;
    special?: boolean;
    imageUrl?: boolean;
};
export type CharacterOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "baseHp" | "baseAttack" | "minLevel" | "special" | "imageUrl", ExtArgs["result"]["character"]>;
export type CharacterInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    instances?: boolean | Prisma.Character$instancesArgs<ExtArgs>;
    _count?: boolean | Prisma.CharacterCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CharacterIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type CharacterIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $CharacterPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Character";
    objects: {
        instances: Prisma.$UserCharacterPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        baseHp: number;
        baseAttack: number;
        minLevel: number;
        special: number;
        imageUrl: string | null;
    }, ExtArgs["result"]["character"]>;
    composites: {};
};
export type CharacterGetPayload<S extends boolean | null | undefined | CharacterDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CharacterPayload, S>;
export type CharacterCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CharacterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CharacterCountAggregateInputType | true;
};
export interface CharacterDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Character'];
        meta: {
            name: 'Character';
        };
    };
    findUnique<T extends CharacterFindUniqueArgs>(args: Prisma.SelectSubset<T, CharacterFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CharacterClient<runtime.Types.Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CharacterFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CharacterFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CharacterClient<runtime.Types.Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CharacterFindFirstArgs>(args?: Prisma.SelectSubset<T, CharacterFindFirstArgs<ExtArgs>>): Prisma.Prisma__CharacterClient<runtime.Types.Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CharacterFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CharacterFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CharacterClient<runtime.Types.Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CharacterFindManyArgs>(args?: Prisma.SelectSubset<T, CharacterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CharacterCreateArgs>(args: Prisma.SelectSubset<T, CharacterCreateArgs<ExtArgs>>): Prisma.Prisma__CharacterClient<runtime.Types.Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CharacterCreateManyArgs>(args?: Prisma.SelectSubset<T, CharacterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CharacterCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CharacterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CharacterDeleteArgs>(args: Prisma.SelectSubset<T, CharacterDeleteArgs<ExtArgs>>): Prisma.Prisma__CharacterClient<runtime.Types.Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CharacterUpdateArgs>(args: Prisma.SelectSubset<T, CharacterUpdateArgs<ExtArgs>>): Prisma.Prisma__CharacterClient<runtime.Types.Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CharacterDeleteManyArgs>(args?: Prisma.SelectSubset<T, CharacterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CharacterUpdateManyArgs>(args: Prisma.SelectSubset<T, CharacterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CharacterUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CharacterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CharacterUpsertArgs>(args: Prisma.SelectSubset<T, CharacterUpsertArgs<ExtArgs>>): Prisma.Prisma__CharacterClient<runtime.Types.Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CharacterCountArgs>(args?: Prisma.Subset<T, CharacterCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CharacterCountAggregateOutputType> : number>;
    aggregate<T extends CharacterAggregateArgs>(args: Prisma.Subset<T, CharacterAggregateArgs>): Prisma.PrismaPromise<GetCharacterAggregateType<T>>;
    groupBy<T extends CharacterGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CharacterGroupByArgs['orderBy'];
    } : {
        orderBy?: CharacterGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CharacterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharacterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CharacterFieldRefs;
}
export interface Prisma__CharacterClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    instances<T extends Prisma.Character$instancesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Character$instancesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserCharacterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CharacterFieldRefs {
    readonly id: Prisma.FieldRef<"Character", 'Int'>;
    readonly name: Prisma.FieldRef<"Character", 'String'>;
    readonly baseHp: Prisma.FieldRef<"Character", 'Int'>;
    readonly baseAttack: Prisma.FieldRef<"Character", 'Int'>;
    readonly minLevel: Prisma.FieldRef<"Character", 'Int'>;
    readonly special: Prisma.FieldRef<"Character", 'Float'>;
    readonly imageUrl: Prisma.FieldRef<"Character", 'String'>;
}
export type CharacterFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CharacterSelect<ExtArgs> | null;
    omit?: Prisma.CharacterOmit<ExtArgs> | null;
    include?: Prisma.CharacterInclude<ExtArgs> | null;
    where: Prisma.CharacterWhereUniqueInput;
};
export type CharacterFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CharacterSelect<ExtArgs> | null;
    omit?: Prisma.CharacterOmit<ExtArgs> | null;
    include?: Prisma.CharacterInclude<ExtArgs> | null;
    where: Prisma.CharacterWhereUniqueInput;
};
export type CharacterFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CharacterSelect<ExtArgs> | null;
    omit?: Prisma.CharacterOmit<ExtArgs> | null;
    include?: Prisma.CharacterInclude<ExtArgs> | null;
    where?: Prisma.CharacterWhereInput;
    orderBy?: Prisma.CharacterOrderByWithRelationInput | Prisma.CharacterOrderByWithRelationInput[];
    cursor?: Prisma.CharacterWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CharacterScalarFieldEnum | Prisma.CharacterScalarFieldEnum[];
};
export type CharacterFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CharacterSelect<ExtArgs> | null;
    omit?: Prisma.CharacterOmit<ExtArgs> | null;
    include?: Prisma.CharacterInclude<ExtArgs> | null;
    where?: Prisma.CharacterWhereInput;
    orderBy?: Prisma.CharacterOrderByWithRelationInput | Prisma.CharacterOrderByWithRelationInput[];
    cursor?: Prisma.CharacterWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CharacterScalarFieldEnum | Prisma.CharacterScalarFieldEnum[];
};
export type CharacterFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CharacterSelect<ExtArgs> | null;
    omit?: Prisma.CharacterOmit<ExtArgs> | null;
    include?: Prisma.CharacterInclude<ExtArgs> | null;
    where?: Prisma.CharacterWhereInput;
    orderBy?: Prisma.CharacterOrderByWithRelationInput | Prisma.CharacterOrderByWithRelationInput[];
    cursor?: Prisma.CharacterWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CharacterScalarFieldEnum | Prisma.CharacterScalarFieldEnum[];
};
export type CharacterCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CharacterSelect<ExtArgs> | null;
    omit?: Prisma.CharacterOmit<ExtArgs> | null;
    include?: Prisma.CharacterInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CharacterCreateInput, Prisma.CharacterUncheckedCreateInput>;
};
export type CharacterCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CharacterCreateManyInput | Prisma.CharacterCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CharacterCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CharacterSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CharacterOmit<ExtArgs> | null;
    data: Prisma.CharacterCreateManyInput | Prisma.CharacterCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CharacterUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CharacterSelect<ExtArgs> | null;
    omit?: Prisma.CharacterOmit<ExtArgs> | null;
    include?: Prisma.CharacterInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CharacterUpdateInput, Prisma.CharacterUncheckedUpdateInput>;
    where: Prisma.CharacterWhereUniqueInput;
};
export type CharacterUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CharacterUpdateManyMutationInput, Prisma.CharacterUncheckedUpdateManyInput>;
    where?: Prisma.CharacterWhereInput;
    limit?: number;
};
export type CharacterUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CharacterSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CharacterOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CharacterUpdateManyMutationInput, Prisma.CharacterUncheckedUpdateManyInput>;
    where?: Prisma.CharacterWhereInput;
    limit?: number;
};
export type CharacterUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CharacterSelect<ExtArgs> | null;
    omit?: Prisma.CharacterOmit<ExtArgs> | null;
    include?: Prisma.CharacterInclude<ExtArgs> | null;
    where: Prisma.CharacterWhereUniqueInput;
    create: Prisma.XOR<Prisma.CharacterCreateInput, Prisma.CharacterUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CharacterUpdateInput, Prisma.CharacterUncheckedUpdateInput>;
};
export type CharacterDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CharacterSelect<ExtArgs> | null;
    omit?: Prisma.CharacterOmit<ExtArgs> | null;
    include?: Prisma.CharacterInclude<ExtArgs> | null;
    where: Prisma.CharacterWhereUniqueInput;
};
export type CharacterDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CharacterWhereInput;
    limit?: number;
};
export type Character$instancesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CharacterDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CharacterSelect<ExtArgs> | null;
    omit?: Prisma.CharacterOmit<ExtArgs> | null;
    include?: Prisma.CharacterInclude<ExtArgs> | null;
};
export {};
