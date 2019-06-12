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
               
				</div>
                </div>
           );     
}
}
