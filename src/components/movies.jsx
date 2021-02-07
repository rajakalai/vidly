import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieservices';
import { Link } from 'react-router-dom';
import {getGenres} from '../services/fakeGenreService'
import {paginate} from '../utils/paginate';
import Pagination from '../common/pagination';
import ListGroup from '../common/listGroup';
import MoviesTable from './MoviesTable';
import _ from 'lodash';

class Movies extends Component {
    state = {
        movies: [],
        pageSize : 3,
        currentPage : 1,
		genres:[],
		sortColumn :{path:'title',order:'asc'}
      }
      componentDidMount() {
        const genres = [{_id :0,name: "All genres"},...getGenres()];
		this.setState({movies:getMovies(),genres});		
      }
      deleteMovie = (movieId) => {
        const movies = [...this.state.movies];
        const filterMovies = movies.filter(movie => movie !== movieId);
        this.setState({ movies : filterMovies  });
      }
      likeHandler = (movie) =>{
        const movies = [...this.state.movies];    
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
      }
      handlePageChange = (page) => {
        this.setState({ currentPage: page });
      }
      handleGenre = (genre) => {
        this.setState({ selectedGenre: genre,currentPage:1 });
	  }
	  handleSort = (sortColumn) => {		  
		  this.setState({sortColumn});
      }
      filterMovies = (selectedGenre,movies) => {
       return selectedGenre && selectedGenre._id ? movies.filter(m => m.genre._id === selectedGenre._id) : movies;
      }
    render() { 
        const {length: count} = this.state.movies;
        const {pageSize, currentPage, movies, genres , selectedGenre,sortColumn} = this.state;
        const filtered = this.filterMovies(selectedGenre,movies);
		const sorted = _.orderBy(filtered,[sortColumn.path], [sortColumn.order]);
		const moviesList = paginate(sorted, currentPage, pageSize,);
        if(count === 0) {
            return <p>No more movies to show</p>
        }else {
            return ( 
                <div>
                    <p> There are {filtered.length} in the databases</p> 
                    <div className="row">
                        <div className="col-3">
                            <ListGroup onSelectGenre = {this.handleGenre}
                              selectedItem = {this.state.selectedGenre} items={genres}/>
                        </div>
                        <div className="col-9">
                            <Link to="/movies/new" className="btn btn-primary" style={{marginBottom :20}}>Add new movie</Link>
                            <MoviesTable
								onSort = {this.handleSort}
                                moviesList = {moviesList}
                                onDelete={this.deleteMovie}
								onLike = {this.likeHandler}
								sortColumn = {this.state.sortColumn}
                            />
                        </div>
                    </div>                     
                        <Pagination 
                            itemsCount ={filtered.length} 
                            pageSize = {pageSize} 
                            onPageChange = {this.handlePageChange} 
                            currentPage = {currentPage} 
                        />                  
                </div>      
            );
        }        
    }
}
 
export default Movies;