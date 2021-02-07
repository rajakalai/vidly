import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Movies from './components/movies'
import NavBar from './components/navbar';
import Rental from './components/Rental';
import Customer from './components/customer';
import NotFound from './components/notFound';
import MovieForm from './components/movieForm';
import Login from './components/login';
import AddMovie from './components/addmovie';
import './App.css';


function App() {
  return (
	<React.Fragment>
		<NavBar/>
		<main className='container'>
			<Switch>
				<Route path="/login" component={Login} />
				<Route path='/movies/:id' component={MovieForm}/>
				<Route path="/movies" exact component={Movies}></Route>
				<Route path="/rentals" component={Rental}></Route>
				<Route path="/customers" component={Customer}></Route>
				<Route path="/notfound" component={NotFound}></Route>
				<Route path="/new" component={AddMovie}></Route>
				<Redirect exact from="/" to ="/movies" />
				<Redirect to="/notfound" />
			</Switch>		
		</main>
	</React.Fragment>
  );
}

export default App;
