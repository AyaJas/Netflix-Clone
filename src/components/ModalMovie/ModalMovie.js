import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';


function ModalMovie({ movieInfo, add, handleAdd }) {

return (
    <>
    <Modal show={add} onHide={handleAdd} animation={false}>
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
            <Button variant="primary"> Add To Favorite </Button>
        </Modal.Footer>
    </Modal>
</>

);

}

export default ModalMovie;