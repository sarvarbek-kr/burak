import { MemberStatus, MemberType } from "../enums/member.enum";


export interface Member {
    memberType: MemberType;
    memberStatus: MemberStatus;
    memberNick : string;
    memberPhone: string;
    memberPassword?: string;
    memberAddress?: string;
    memberDesc?: string;
    memberImage?: string;
    memberPoints: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface MemberInput {
    memberType?: MemberType;
    memberStatus?: MemberStatus;
    memberNick : string;
    memberPhone: string;
    memberPassword: string;
    memberAddress?: string;
    memberDesc?: string;
    memberImage?: string;
    memberPoints?: string;
}