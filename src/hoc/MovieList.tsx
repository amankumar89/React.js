import AppLayout from "../AppLayout";
import withMovies from "./withMovies";

function MovieList({
  movies,
}: {
  movies: {
    title: string;
    id: number;
    vote_average: number;
  }[];
}) {
  return (
    <AppLayout title="Movies - HOC">
      <h2>Popular Movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id} className="flex gap-4 border-b w-fit">
            <h3>{movie.title}</h3>
            <p>⭐ {movie.vote_average}</p>
          </li>
        ))}
      </ul>
    </AppLayout>
  );
}

const MovieListHoc = withMovies(MovieList);
export default MovieListHoc;
