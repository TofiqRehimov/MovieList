import React from 'react';



const MovieList = (props) => {

    return (
        <div className='row'>
            <div className='col-md-12'>
                <button className='btn btn-md btn-outline-primary mb-4' onClick={props.addMovies} > Add Movie</button>
            </div>
            {props.movies.length === 0 ? (
                <div className='col-md-12'> <h1> Movies not found</h1>  </div>
            ) : (props.movies.map((movie,i) => (

                <div className='col-md-4' key={i}>
                    <div className='card mb-4 shadow-sm '>
                        <img src={movie.imageURL} className='card-img-top' alt="Semple Movie" />
                        <div className='card-body'>
                            <h5 className='card-title'>{movie.name} </h5>
                            <p className='card-text'> {movie.overview} </p>
                            <div className='d-flex justify-content-between align-items-center'>
                            <button className='btn btn-md btn-outline-danger' onClick={() => props.deleteMovie(movie)} > Delete</button>
                                <button className='btn btn-md btn-outline-primary ' onClick={()=> props.updateMovie(movie)} > Update Movie</button>

                                <h2> <span className='badge badge-info' > {movie.rating} </span> </h2>
                            </div>
                        </div>
                    </div>

                </div>
            )))}

        </div>
    );
};

export default MovieList;