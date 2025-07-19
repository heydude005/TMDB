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
    <div style={styles.page}>
      <h1 style={styles.heading}>🎬 OMDb Movie Search</h1>
      <div style={styles.searchBox}>
        <input
          type="text"
          placeholder="Search for movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={styles.input}
        />
        <button onClick={searchMovies} style={styles.button}>Search</button>
      </div>

      <div style={styles.movieGrid}>
        {movies.map((movie) => (
          <div key={movie.imdbID} style={styles.card}>
            {movie.Poster !== "N/A" ? (
              <img src={movie.Poster} alt={movie.Title} style={styles.poster} />
            ) : (
              <div style={styles.noPoster}>No Image</div>
            )}
            <div style={styles.cardContent}>
              <h3 style={styles.movieTitle}>{movie.Title}</h3>
              <p style={styles.movieYear}>{movie.Year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(to right, #ece9e6, #ffffff)",
    padding: "30px",
    fontFamily: "Poppins, sans-serif",
  },
  heading: {
    textAlign: "center",
    fontSize: "36px",
    marginBottom: "30px",
    color: "#333",
  },
  searchBox: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "40px",
  },
  input: {
    padding: "12px 15px",
    width: "320px",
    borderRadius: "8px 0 0 8px",
    border: "1px solid #ccc",
    outline: "none",
    fontSize: "16px",
  },
  button: {
    padding: "12px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    fontWeight: "bold",
    border: "none",
    borderRadius: "0 8px 8px 0",
    cursor: "pointer",
    fontSize: "16px",
    transition: "0.3s",
  },
  movieGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "25px",
    padding: "0 20px",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    transition: "transform 0.3s ease",
    cursor: "pointer",
  },
  poster: {
    width: "100%",
    height: "300px",
    objectFit: "cover",
  },
  noPoster: {
    width: "100%",
    height: "300px",
    backgroundColor: "#ccc",
    color: "#444",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
  cardContent: {
    padding: "15px",
    textAlign: "center",
  },
  movieTitle: {
    margin: "0 0 5px 0",
    fontSize: "18px",
    color: "#333",
  },
  movieYear: {
    margin: 0,
    color: "#666",
    fontSize: "14px",
  },
};

export default MovieSearch;
