import React, { Component } from "react";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      selectedOption: "all",
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }
  handleKey = (event) => {
    if (event.key === "Enter" && this.state.selectedOption !== "all") {
      this.props.filterMovies(this.state.search, this.state.selectedOption);
    } else if (event.key === "Enter" && this.state.selectedOption === "all") {
      this.props.searchMovies(this.state.search);
    }
  };

  onValueChange(event) {
    console.log(this.state.selectedOption);
    this.setState({
      selectedOption: event.target.value,
    });
  }

  formSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedOption);
  }

  render() {
    return (
      <div className="row">
        <div className="input-field">
          <input
            type="search"
            className="validate"
            placeholder="Search"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
          />
          <button
            onClick={() =>
              this.props.filterMovies(
                this.state.search,
                this.state.selectedOption
              )
            }
            className="btn search-btn"
          >
            SEARCH
          </button>
        </div>
        <form action="#" className="row__radio">
          <p>
            <label>
              <input
                name="group1"
                value="all"
                type="radio"
                checked={this.state.selectedOption === "all"}
                onChange={(e) =>
                  this.setState({
                    selectedOption: e.target.value,
                  })
                }
              />
              <span>All</span>
            </label>
          </p>
          <p>
            <label>
              <input
                name="group1"
                value="Series"
                type="radio"
                checked={this.state.selectedOption === "Series"}
                onChange={(e) =>
                  this.setState({
                    selectedOption: e.target.value,
                  })
                }
              />
              <span>Series</span>
            </label>
          </p>
          <p>
            <label>
              <input
                name="group1"
                value="Movie"
                type="radio"
                checked={this.state.selectedOption === "Movie"}
                onChange={(e) =>
                  this.setState({
                    selectedOption: e.target.value,
                  })
                }
              />
              <span>Movie</span>
            </label>
          </p>
        </form>
      </div>
    );
  }
}

export { Search };
