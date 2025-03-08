import { SortStrategy } from "../types/models/sort.types";

export const SORT_OLDEST = 'OLDEST';
export const SORT_NEWEST = 'NEWEST';

export const sortOptions = {
  [SORT_OLDEST]: 'Oldest',
  [SORT_NEWEST]: 'Newest',
}

type SortStrategyMap = {
  [key: string]: SortStrategy;
}

export const sortStrategyMap: SortStrategyMap = {
  [SORT_OLDEST]: (a, b) => a.attributes.release_year - b.attributes.release_year,
  [SORT_NEWEST]: (a, b) => b.attributes.release_year - a.attributes.release_year,
}