import { useEffect, useState, type ReactNode } from "react";

type MovieProps = {
  id: number;
  title: string;
  vote_average: number;
};

const moviesData = [
  {
    id: 1,
    title: "Inception",
    vote_average: 8.8,
  },
  {
    id: 2,
    title: "Interstellar",
    vote_average: 8.6,
  },
  {
    id: 3,
    title: "The Dark Knight",
    vote_average: 9.0,
  },
  {
    id: 4,
    title: "Avatar",
    vote_average: 7.9,
  },
];

function withMovies(WrappedComponent: any) {
  return function WithMoviesComponent(props: any) {
    const [movies, setMovies] = useState<MovieProps[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // simulate API delay
      setTimeout(() => {
        setMovies(moviesData);
        setLoading(false);
      }, 1000);
    }, []);

    if (loading) return <p>Loading movies...</p>;

    return <WrappedComponent {...props} movies={movies} />;
  };
}

export default withMovies;
