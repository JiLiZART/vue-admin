import { IPaginationPayload, ISortPayload } from "./IPayload";
import { Identifier, IRecord } from "./IRecord";

// GET
export interface IGetListParams {
    pagination: IPaginationPayload;
    sort: ISortPayload;
    filter: unknown;
}

export interface IGetOneParams {
    id: Identifier;
}

export interface IGetManyParams {
    ids: Identifier[];
}

export interface IGetManyReferenceParams {
    target: string;
    id: Identifier;
    pagination: IPaginationPayload;
    sort: ISortPayload;
    filter: unknown;
}

// UPDATE
export interface IUpdateParams {
    id: Identifier;
    data: unknown;
    previousData: IRecord;
}

export interface IUpdateManyParams {
    ids: Identifier[];
    data: unknown;
}

//CREATE
export interface ICreateParams {
    data: unknown;
}

//DELETE
export interface IDeleteParams {
    id: Identifier;
    previousData: IRecord;
}

export interface IDeleteManyParams {
    ids: Identifier[];
}
