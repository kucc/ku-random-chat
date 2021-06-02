export interface UserModel {
    userId: string;
    email: string;
    password: string;
    sex: string;
    age: number;
    major: number;
    emailVerified: boolean;
    verificationCode: string;
    reportedCount: number;
    isBlocked: boolean;
    blockDuration: Date;
}

export interface EnterInfoModel {
    age: number;
    major: string;
    sex: string;
}

export interface ModifyPasswordModel {
    userId: string;
    password: string;
}