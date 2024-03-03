import React from "react";
import { Movies } from "../components/Movies";
import { Search } from "../components/search";
import { Preloader } from "../components/preloader";

class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    };
    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=e6283665&s=matrix')
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.Search, loadin: false}));
    }

    searchMovies = (str, type = 'all') => {
        this.setState({ loading: true });
        fetch(
            `http://www.omdbapi.com/?apikey=e6283665&s=${str}${
                type !== "all" ? `&type=${type}` : ""
            }`
        )
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.Search, loading: false}));
    };

    render() {
        const { movies, loading } = this.state;

        return (
            <main className="container content">
                <Search searchMovies={this.searchMovies} />
                <div className="preload">
                {loading ? < Preloader />: <Movies movies={this.state.movies} />}
            </div>
            </main>
        )
            
    }
}

export { Main };