import { Movie } from './Movie';

function Movies(props) {
    const { movies = [] } = props;

    return (
        <div className="movies">
            {movies.length ? (
                movies.map((movie) => <Movie key={movie.imbID} {...movie} />)
            ) : (
                <div> <h4>No movies found</h4> </div>
            )}
            {/* {movies.map((ovie) => (
                <Movie key={movies.imdID} {...Movie}/>
            ))} */}
        </div>
    );
}

export { Movies };