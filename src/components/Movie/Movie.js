
import { Button, Card, Col } from 'react-bootstrap';


function Movie(props) {


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
                                    props.movieInfo(props.ele)
                                    props.Add(true)
                                }}>Add to Favorite</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>

        </>
    );
}

export default Movie;