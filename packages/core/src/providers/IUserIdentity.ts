import { Identifier } from "./IRecord";

export interface IUserIdentity {
    id: Identifier;
    fullName?: string;
    avatar?: string;
    [key: string]: any;
}
