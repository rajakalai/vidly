import React , {Component} from 'react';
import { NavLink } from 'react-router-dom';
import Like from '../common/like';
import Table from './table'


class MoviesTable extends Component {
    columns = [
        {path : 'title', label : 'Title',content:movie=><NavLink to={`/movies/${movie._id}`}>{movie.title}</NavLink>},
        {path : 'genre.name', label : 'Genre'},
        {path : 'numberInStock', label : 'Stock'},
        {path : 'dailyRentalRate', label : 'Rate'},
        {key : 'like', content : movie => <Like liked = {movie.liked} onClick= {() => this.props.onLike(movie)}></Like>},
        {key : 'delete' , content : movie => <button className='btn btn-danger btn-sm' 
        onClick={ () => this.props.onDelete(movie)}>Delete</button>},
    ];

    render() { 
        const {moviesList, onSort,sortColumn} = this.props;
        return ( 
            <Table 
                data={moviesList} 
                onSort = {onSort}
                sortColumn = {sortColumn}     
                columns = {this.columns}           
            />
        );
    }
}

export default MoviesTable;