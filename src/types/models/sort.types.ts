import { JsonApiResourceItem } from "../api/jsonApi.types";

export type SortStrategy = (a: JsonApiResourceItem, b: JsonApiResourceItem) => number;