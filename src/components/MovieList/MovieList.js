import Movie from '../Movie/Movie';
import { Button, Container, Card, Row, Col } from 'react-bootstrap';


function MovieList({ data }) {

    return (
        <>
            <Container className='div-container'>
                <Row md={3}>
                    {
                        data.length && data.map((ele, idx) => (
                            <Movie key={idx} ele={ele} />
                        ))
                    }
                </Row>
            </Container>
            {
                !data.length && <div><h2>No Such Results, Please try again later</h2></div>
            }

        </>

    );
}

export default MovieList;