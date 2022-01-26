import React, { useEffect, useState } from "react";
import { staticMovies } from 'D:/Learning/React/Components/hookscheckpoint/src/MovieAPI.js';
import MovieList from './MovieList';
import './styles.css';
import AddMovie from './AddMovie'

export default function Filter() {
    const [search, setSearch] = useState("");
    const [rate, setRate] = useState(10);
    const [data, setData] = useState(staticMovies);
    const [filteredMovies, setFilteredMovies] = useState(staticMovies);

    useEffect(() => {
        const info = data.filter(
            (item) =>
            item.title.toLowerCase().includes(search.toLowerCase()) &&
            item.rate <= rate
        )
        setFilteredMovies(info)
    }, [search, rate, data])

    const addMovie = (movie) => {
        setData([...data, movie]);
        setSearch("");
        setRate(10);
    };

    return (
        
            <div className="continaer mt-5">
                <div className="row justify-content-center">
                    <input placeholder="Search" className="mr-5 input" value={search} type="text" onChange={(e)=>setSearch(e.target.value)} />

                    <input  className="mr-5 input" value={rate} type="Number" onChange={(e)=>setRate(e.target.value)} />
                    <AddMovie addMovie={addMovie} />
                </div>
                <MovieList movies={filteredMovies}/>

            </div>
 
    )
}