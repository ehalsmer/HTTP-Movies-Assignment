import React from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
export default class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
  }

  componentDidMount() {
    console.log('props in movie', this.state.props)

    this.fetchMovie(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.fetchMovie(newProps.match.params.id);
    }
  }

  fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(res => this.setState({ movie: res.data }))
      .catch(err => console.log(err.response));
  };

  

  saveMovie = (e) => {
    e.preventDefault();
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.state.movie);
  };

  updateMovie = (e) => {
    e.preventDefault();
    this.state.props.history.push(`/update-movie/${this.state.movie.id}`)
  }

  deleteMovie = (e) => {
    e.preventDefault();
    this.props.deleteMovie(this.state.movie.id)
    this.props.history.push('/')
    // .catch(err => console.log(err))
  }

  render() {

    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    }

    return (
      <div className="save-wrapper">
        <MovieCard movie={this.state.movie}/>
        <div className="save-button" onClick={this.saveMovie}>
          Save
        </div>
        <div className="edit-button" onClick={this.updateMovie}>
          Edit
        </div>
        <div className="delete-button" onClick={this.deleteMovie}>
          Delete
        </div>
      </div>
    );
  }
}
