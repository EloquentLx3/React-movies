import React, { Component } from "react";
import { Movies } from "../Components/Movies";
import { Preloader } from "../Components/Preloader";
import { Search } from "../Components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends Component {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  }

  searchMovies = (str) => {
    this.setState({ loading: true });
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  };

  filterMovies = (str, type) => {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}&type=${type}`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  };

  render() {
    const { movies, loading } = this.state;

    return (
      <main className="container content">
        <Search
          filterMovies={this.filterMovies}
          searchMovies={this.searchMovies}
        />
        {loading ? <Preloader /> : <Movies movies={movies} />}
      </main>
    );
  }
}

export { Main };
