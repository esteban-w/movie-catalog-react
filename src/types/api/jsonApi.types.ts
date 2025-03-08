export type JsonApiResourceItem = {
  id: string;
  type: string;
  attributes: {
    title: string;
    release_year: number;
    year: string;
    image: string | null;
  };
}

export type JsonApiErrorItem = {
  title: string;
  status?: number;
  detail?: string;
  meta: {
    url: string 
  };
}

export type JsonApiError = {
  errors: JsonApiErrorItem[];
}

export type JsonApiData = {
  data: JsonApiResourceItem[];
  meta?: {
    total: number;
  }
}