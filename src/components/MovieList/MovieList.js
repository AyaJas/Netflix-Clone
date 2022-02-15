import { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from '../Movie/Movie';
import ModalMovie from '../ModalMovie/ModalMovie';



function MovieList({data}){
   
    const [Add, setAdd] = useState(false);
    const [movieInfo, setMovieInfo] = useState({});
    const handleAdd = () => setAdd(false);


    return (
        <>
            {
                data.length && data.map((ele ,idx) => (
                    <Movie key = {idx} ele={ele} movieInfo={setMovieInfo} Add={setAdd} />
                ))
            }


            {
                <ModalMovie movieInfo={movieInfo} Add={Add} handleAdd={handleAdd} />
            }
            {
                !data.length && <div><h2>No Such Results, Please try again later</h2></div>
            }
        </>

    );
}

export default MovieList;