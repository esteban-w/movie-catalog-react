export type ResultsResposeItem = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export type ResultsResponse = {
  Search: ResultsResposeItem[];
  totalResults: string;
  Response: 'True';
}

export type NoResultsResponse = {
  Response: 'False';
  Error: string;
}