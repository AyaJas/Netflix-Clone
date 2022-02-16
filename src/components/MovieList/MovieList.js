import { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from '../Movie/Movie';



function MovieList({data}){
   
    // const [Add, setAdd] = useState(false);
    // const [movieInfo, setMovieInfo] = useState({});
    // const handleAdd = () => setAdd(false);


    return (
        <>
            {
                data.length && data.map((ele ,idx) => (
                    <Movie key = {idx} ele={ele} />
                ))
            }

            {
                !data.length && <div><h2>No Such Results, Please try again later</h2></div>
            }
        </>

    );
}

export default MovieList;