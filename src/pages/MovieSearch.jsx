// src/pages/MovieSearch.jsx
import { useState } from "react";
import axios from "axios";

const apiKey = import.meta.env.VITE_OMDB_API_KEY;

function MovieSearch() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {
    if (!query) return;

    try {
      const response = await axios.get("https://www.omdbapi.com/", {
        params: {
          apikey: apiKey,
          s: query,
        },
      });

      if (response.data.Response === "True") {
        setMovies(response.data.Search);
      } else {
        setMovies([]);
        alert("No results found!");
      }
    } catch (error) {
      console.error("Failed to fetch movies:", error);
    }
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#e3f2fd", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>OMDb Movie Search</h1>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ padding: "10px", width: "300px", borderRadius: "5px", marginRight: "10px" }}
        />
        <button onClick={searchMovies} style={{ padding: "10px 15px", borderRadius: "5px", backgroundColor: "#007bff", color: "white", border: "none" }}>
          Search
        </button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
        {movies.map((movie) => (
          <div key={movie.imdbID} style={{ width: "200px", background: "#fff", padding: "10px", borderRadius: "8px", textAlign: "center", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
            <h4>{movie.Title}</h4>
            <p>{movie.Year}</p>
            {movie.Poster !== "N/A" && <img src={movie.Poster} alt={movie.Title} width="100%" />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieSearch;
