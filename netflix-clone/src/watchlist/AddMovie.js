import React,{useState,useEffect} from 'react'
import './AddMovie.css'
import ResultCard from './ResultCard';

function AddMovie() {
    const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const API_KEY="33d6f4d2da86ff2803bb60658bb48436";
  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);
    //Search URL.
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };

    return (
        <div className="add-body">
        <div className="add-page">
        <div className="container">
          <div className="add-content">
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Search for a movie"
                value={query}
                onChange={onChange}
              />
            </div>
  
            {results.length > 0 && (
              <ul className="results">
                {results.map((movie) => (
                  <li key={movie.id}>
                    <ResultCard movie={movie} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      </div>
    )
}

export default AddMovie
