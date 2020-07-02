import React,{useState} from 'react';
import MoviesItem from './MoviesItem';
import data from './data';
import './MovieStyle.css';
const Movies = () => {
     let mappArray=data.map((el , id)=>{
        return <MoviesItem key={id} id={id+1}  title={el.title} director={el.director} year={el.year} genre={el.genre} rate={el.rate} duration={el.duration} />
    })
    return ( 
        <div>
            <main className="main" >
            {mappArray}
            </main>
        </div>
     );
}
export default Movies;