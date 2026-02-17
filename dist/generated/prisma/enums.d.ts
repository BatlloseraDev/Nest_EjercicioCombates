export declare const BattleStatus: {
    readonly PENDING: "PENDING";
    readonly IN_PROGRESS: "IN_PROGRESS";
    readonly FINISHED: "FINISHED";
};
export type BattleStatus = (typeof BattleStatus)[keyof typeof BattleStatus];
