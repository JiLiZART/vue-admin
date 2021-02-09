
export interface ISortPayload {
    field: string;
    order: string;
}

export interface IFilterPayload {
    [key: string]: any;
}

export interface IPaginationPayload {
    page: number;
    perPage: number;
}
