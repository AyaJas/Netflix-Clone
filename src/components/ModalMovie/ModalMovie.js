import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import {useRef} from 'react';
import './ModalMovie.css';


function ModalMovie({ movieInfo, add, handleClose }) {
    
    const commentInputRef = useRef("");


    //(title,release_date,poster_path,overview)
    const addToFavList = async ()=>{
        let comment = commentInputRef.current.value;
       let favarite = {title: movieInfo.title, release_date: movieInfo.release_date, poster_path: movieInfo.poster_path, overview :movieInfo.overview}
      
       await axios.post(`${process.env.REACT_APP_BASE_URL}/addMovie`,favarite)
                  .then(()=>{
                      console.log("Done :) ");
                  }).catch((err)=>{
                      console.log(err);
                  });
  
   }


return (
    <>
    <Modal show={add} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
            <Modal.Title>Add It To Favorite</Modal.Title>
        </Modal.Header>
        <Modal.Body className="body">
            <h3>{movieInfo.title}</h3>
            <img variant="top" src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movieInfo.poster_path}`} />
            <div>
                <label htmlFor="op">Write Your Opinion</label>
                <input placeholder="Write Your Opinion" type="text" id="op" />
            </div>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary"
            onClick={()=>{
                addToFavList();
                handleClose();
             }}
            > Add To Favorite </Button>
        </Modal.Footer>
    </Modal>
</>

);

}

export default ModalMovie;