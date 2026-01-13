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
    <div>
      <h2>Popular Movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>⭐ {movie.vote_average}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

const MovieListHoc = withMovies(MovieList);
export default MovieListHoc;
