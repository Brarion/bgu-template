export type CatFact = {
  fact: string;
  length: number;
}

type CatLink = {
  url: string | null;
  label: string;
  active: boolean;
}

export type AllCatFacts = {
  current_page: number;
  data: CatFact[];
  first_page_url: string | null;
  from: number;
  last_page: number;
  last_page_url: string | null;
  links: CatLink[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}