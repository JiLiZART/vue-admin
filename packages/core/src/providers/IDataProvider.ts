import {
    CreateParams, CreateResult, DeleteManyParams, DeleteManyResult, DeleteParams, DeleteResult,
    GetListParams,
    GetListResult, GetManyParams, GetManyReferenceParams, GetManyReferenceResult, GetManyResult,
    GetOneParams,
    GetOneResult,
    Record, UpdateManyParams, UpdateManyResult, UpdateParams, UpdateResult
} from "../../../../../react-admin/packages/ra-core/src";

export interface IDataProvider {
    getList: <RecordType extends Record = Record>(
        resource: string,
        params: GetListParams
    ) => Promise<GetListResult<RecordType>>;

    getOne: <RecordType extends Record = Record>(
        resource: string,
        params: GetOneParams
    ) => Promise<GetOneResult<RecordType>>;

    getMany: <RecordType extends Record = Record>(
        resource: string,
        params: GetManyParams
    ) => Promise<GetManyResult<RecordType>>;

    getManyReference: <RecordType extends Record = Record>(
        resource: string,
        params: GetManyReferenceParams
    ) => Promise<GetManyReferenceResult<RecordType>>;

    update: <RecordType extends Record = Record>(
        resource: string,
        params: UpdateParams
    ) => Promise<UpdateResult<RecordType>>;

    updateMany: (
        resource: string,
        params: UpdateManyParams
    ) => Promise<UpdateManyResult>;

    create: <RecordType extends Record = Record>(
        resource: string,
        params: CreateParams
    ) => Promise<CreateResult<RecordType>>;

    delete: <RecordType extends Record = Record>(
        resource: string,
        params: DeleteParams
    ) => Promise<DeleteResult<RecordType>>;

    deleteMany: (
        resource: string,
        params: DeleteManyParams
    ) => Promise<DeleteManyResult>;

    [key: string]: any;
}
