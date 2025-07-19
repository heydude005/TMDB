import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "karthi" && password === "codered") {
      navigate("/search");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.title}>🎬 Movie App Login</h2>
        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button}>Login</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins, sans-serif",
    padding: "20px",
  },
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    padding: "40px 30px",
    borderRadius: "16px",
    backdropFilter: "blur(10px)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
    textAlign: "center",
    width: "100%",
    maxWidth: "400px",
    border: "2px solid rgba(255, 255, 255, 0.25)",
    margin: "20px",
  },
  title: {
    color: "#fff",
    marginBottom: "25px",
    fontSize: "24px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px 15px",
    borderRadius: "8px",
    border: "1px solid rgba(255, 255, 255, 0.4)",
    outline: "none",
    fontSize: "16px",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    color: "#fff",
  },
  button: {
    padding: "12px",
    background: "linear-gradient(to right, #ff6a00, #ee0979)",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "0.3s ease",
  },
};

export default Login;
