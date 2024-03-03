import React from "react";

class Search extends React.Component {
    state = {
        search: '',
        type: 'all'
    };

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    };

    handleFilter = (event) => {
        this.setState(
            () => ({ type: event.target.dataset.type }),
            () => {
                this.props.searchMovies(this.state.search, this.state.type);
            }
        );
    };

    render() {
        return <div>
            <div className="row">
                <div className="col s12">
                    <div className="input-field">
                        <input
                            className="validate"
                            placeholder="Search"
                            type="search"
                            value={this.state.search}
                            onChange={(e) => this.setState({ search: e.target.value })}
                            onKeyDown={this.handleKey}
                        />
                        <button className="btn search-btn black" l
                            onClick={() =>
                                this.props.searchMovies(this.state.search, this.state.type)}>search</button>
                    </div>
                </div>
            </div>

            <div className="center" >
                <label className="col s2 offset-s3">
                    <input
                        className="with-gapS"
                        name="type"
                        type="radio"
                        data-type="all"
                        onChange={this.handleFilter}
                        checked={this.state.type === "all"}
                    />
                    <span>All</span>
                </label>
                <label className="col s2 offset-s5">
                    <input
                        className="with-gap"
                        name="type"
                        type="radio"
                        data-type="movie"
                        onChange={this.handleFilter}
                        checked={this.state.type === "movie"}
                    />
                    <span>Movies only</span>
                </label>
                <label className="col s2 offset-s7">
                    <input
                        className="with-gap"
                        name="type"
                        type="radio"
                        data-type="series"
                        onChange={this.handleFilter}
                        checked={this.state.type === "series"}
                    />
                    <span>Series only</span>
                </label>
            </div>
        </div>
    }
}

export { Search };