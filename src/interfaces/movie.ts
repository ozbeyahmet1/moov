import { Company } from "./company";
import { Genre } from "./genre";

export interface Movie {
  readonly id: number;
  readonly backdrop_path: string | null;
  readonly budget: number;
  readonly genres: ReadonlyArray<Genre>;
  readonly original_title: string;
  readonly overview: string | null;
  readonly poster_path: string | null;
  readonly production_companies: ReadonlyArray<Company>;
  readonly release_date: string;
  readonly revenue: number;
  readonly runtime: number | null;
  readonly title: string;
  readonly vote_average: number;
}
