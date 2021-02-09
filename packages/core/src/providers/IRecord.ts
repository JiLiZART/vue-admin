export type Identifier = string | number;

export interface IRecord {
    id: Identifier;
    [key: string]: any;
}

export interface IRecordMap<RecordType = IRecord> {
    // Accept strings and numbers as identifiers
    [id: string]: RecordType;
    [id: number]: RecordType;
}
