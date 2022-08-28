import { Character } from "../types";

export interface ResponseSearch {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<Character>;
}
