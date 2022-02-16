import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card, Col } from 'react-bootstrap';
import ModalMovie from '../ModalMovie/ModalMovie';


function Movie(props) {


    const [add, setAdd] = useState(false);
    const [movieInfo, setMovieInfo] = useState({});
    const handleAdd = () => setAdd(false);

    return (

        <>

            <Col key={props.ele.id} md={4}>
                <Card className='div-card'>
                    <Card.Img className='div-card-img' variant="top" src = {`https://www.themoviedb.org/t/p/w220_and_h330_face${props.ele.poster_path}`} />
                    <Card.Body>
                        <Card.Title className='div-card-title'>{props.ele.title}</Card.Title>
                        <Card.Link className='div-card-link'>
                            {props.ele.release_date}
                        </Card.Link>
                        <div>
                            <Button variant='primary'
                                onClick={() => {
                                    setMovieInfo(props.ele)
                                    setAdd(true)
                                }}>Add to Favorite</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>

                <ModalMovie movieInfo={movieInfo} add={add} handleAdd={handleAdd} />

        </>
    );
}

export default Movie;