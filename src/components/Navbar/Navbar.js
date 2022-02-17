import React from 'react';
import {Navbar,Container,Nav} from "react-bootstrap"
import { Link } from 'react-router-dom';
import "./Navbar.css"

const navbarMovie = () => {

    return(
        
        <div>
            <Navbar bg = "dark" varient = "dark">
                <Container>
                    <Navbar.Brand to = "/" >Movies</Navbar.Brand>
                    <Nav className = "movie-auto">
                        <Link className ='link' to = "/"> Home </Link>
                        <Link className ='link' to = "/getMovies">Favorite List</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>

    );
};
export default navbarMovie;