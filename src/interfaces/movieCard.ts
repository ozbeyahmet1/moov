import { Movie } from "./movie";

export enum CardSize {
  SM,
  MD,
  LG,
}

export interface MovieCardProps {
  readonly movie: Pick<Movie, "id" | "title" | "poster_path">;
  readonly index: number;
  readonly size: CardSize;
}
