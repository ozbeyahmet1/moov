import { Movie } from "./movie";

export interface MovieCardProps {
  readonly movie: Pick<Movie, "id" | "title" | "poster_path">;
  readonly index: number;
}
