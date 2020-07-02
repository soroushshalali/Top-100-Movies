import React from 'react';
const MoviesItem = (props) => {
    return ( 
        <section  className="sec-Item">
            <h5>{props.id}</h5>
            <h1>{props.title}</h1>
            <h2>{props.year}</h2>
            <h2>{props.director}</h2>
            <h3>{props.duration}</h3>
            <h3>{props.rate}</h3>
            <h4>{props.genre}</h4>
            <a href={`https://en.wikipedia.org/wiki/${props.link}`}>More</a>
        </section>
     );
}
export default MoviesItem;