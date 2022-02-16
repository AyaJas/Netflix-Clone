import { useState, useEffect } from 'react';
import { Button, Container, Row,Card, Col } from 'react-bootstrap';
import axios from 'axios';
import './FavList.css';


function FavList() {


    const [data, setData] = useState([]);
    const [ele, setEle] = useState({});


    const getFavMovies = async () => {
        return await axios.get(`https://aya-movies.herokuapp.com/getMovies`)
            .then(result => {
                console.log(result.data);
                setData(result.data);
            }).catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getFavMovies();
    }, []);


    return (
         <>
            <Container className='div-container'>
                <Row md={3}>
                    {
                        data.length && data.map((ele) => (
                            <Col key={ele.id} md={4}>
                                <Card className='div-card'>
                                    <Card.Img className='div-card-img' variant="top" src={`https://www.themoviedb.org/t/p/w220_and_h330_face${ele.poster_path}`} />
                                        <Card.Body>
                                            <Card.Title className='div-card-title'>{ele.title}</Card.Title>
                                            <div>
                                                <Button className='div-card-button' variant="primary">Update</Button>
                                                <Button className='div-card-button' variant="danger">Delete</Button>

                                            </div>
                                        </Card.Body>
                                        </Card>
                            </Col>
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


export default FavList;