import React from 'react';
import {Nav,Navbar, Row} from 'react-bootstrap';
import Header from './Header.js';
import Leftmenu from './Leftmenu.js';
import Search from './Search.js';


export default class Homepage extends React.Component
{
    render() {
		return (
			<div>
				<Leftmenu/>
                <div className="container-fluid" id="home">
                    <Header/>
                <div className="mt-4">
				<Search callback={this.searchItems} />
				</div>
                 
                <div id="movies-menu">
						<Navbar>
						      <Nav.Link href="/">POPULAR</Nav.Link>
						      <Nav.Link href="/">TOP RATED</Nav.Link>
						      <Nav.Link href="/">UPCOMING</Nav.Link>
						      <Nav.Link href="/">NOW PLAYING</Nav.Link>
						</Navbar>
                 </div>       
				</div>
                </div>
           );     
}
}
