import type { Principal } from '@dfinity/principal';
export interface Entry { 'age' : bigint, 'school' : string, 'name' : string }
export type Id = string;
export interface _SERVICE {
  'createEntry' : (arg_0: Id, arg_1: Entry) => Promise<undefined>,
  'deleteEntry' : (arg_0: Id) => Promise<undefined>,
  'getEntries' : () => Promise<Array<[string, Entry]>>,
  'lookup' : (arg_0: Id) => Promise<[] | [Entry]>,
  'updateEntry' : (arg_0: Id, arg_1: Entry) => Promise<undefined>,
}
