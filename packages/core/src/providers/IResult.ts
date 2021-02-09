import { Identifier, IRecord } from "./IRecord";

export type ValidDate = Date;

export interface IGetListResult<RecordType = IRecord> {
    data: RecordType[];
    total: number;
    validUntilDate?: ValidDate;
}

export interface IGetOneResult<RecordType = IRecord> {
    data: RecordType;
    validUntilDate?: ValidDate;
}

export interface IGetManyResult<RecordType = IRecord> {
    data: RecordType[];
    validUntilDate?: ValidDate;
}

export interface IGetManyReferenceResult<RecordType = IRecord> {
    data: RecordType[];
    total: number;
    validUntilDate?: ValidDate;
}

export interface IUpdateResult<RecordType = IRecord> {
    data: RecordType;
    validUntilDate?: ValidDate;
}

export interface IUpdateManyResult {
    data?: Identifier[];
    validUntilDate?: ValidDate;
}

export interface ICreateResult<RecordType = IRecord> {
    data: RecordType;
    validUntilDate?: ValidDate;
}

export interface IDeleteResult<RecordType = IRecord> {
    data?: RecordType;
}

export interface IDeleteManyResult {
    data?: Identifier[];
}

export type DataProviderResult<RecordType = IRecord> =
    | ICreateResult<RecordType>
    | IDeleteResult<RecordType>
    | IDeleteManyResult
    | IGetListResult<RecordType>
    | IGetManyResult<RecordType>
    | IGetManyReferenceResult<RecordType>
    | IGetOneResult<RecordType>
    | IUpdateResult<RecordType>
    | IUpdateManyResult;
