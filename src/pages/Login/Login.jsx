import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Hardcoded credentials
  const hardcodedUsername = "admin";
  const hardcodedPassword = "12345";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === hardcodedUsername && password === hardcodedPassword) {
      navigate("/home");
    } else {
      setError("Invalid username or password ");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        {/* Left Side */}
        <div style={styles.left}>
          <h1 style={styles.brand}>RCB</h1>
          <h2 style={styles.subBrand}>GADGETS</h2>
          <div style={styles.icons}>📱 💻 ⌚</div>
        </div>

        {/* Right Side */}
        <div style={styles.right}>
          <h2 style={styles.loginTitle}>Login</h2>

          {error && <p style={styles.error}>{error}</p>}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={styles.input}
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />

            <button type="submit" style={styles.loginBtn}>
              Login →
            </button>

            <p style={styles.forgot}>Forgot password?</p>

            <div style={styles.social}>
              <button style={styles.socialBtn}>G</button>
              <button style={styles.socialBtn}>f</button>
              <button style={styles.socialBtn}>in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/background/20230714/pngtree-gadgets-on-a-moody-3d-backdrop-image_3859893.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  card: {
    width: "750px",
    height: "450px",
    background: "#ffffff",
    borderRadius: "15px",
    display: "flex",
    overflow: "hidden",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
  },
  left: {
    width: "50%",
    background: "#020617",
    color: "white",
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  brand: {
    fontSize: "48px",
    margin: 0,
    color: "#e11d48",
  },
  subBrand: {
    fontSize: "32px",
    margin: "10px 0",
  },
  icons: {
    fontSize: "32px",
    marginTop: "20px",
  },
  right: {
    width: "50%",
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    background: "#e5e5e5",
  },
  loginTitle: {
    fontSize: "28px",
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  loginBtn: {
    width: "100%",
    padding: "12px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
  },
  forgot: {
    marginTop: "10px",
    fontSize: "13px",
    color: "#2563eb",
    cursor: "pointer",
    textAlign: "right",
  },
  social: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginTop: "20px",
  },
  socialBtn: {
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    border: "1px solid #ccc",
    background: "white",
    cursor: "pointer",
    fontWeight: "bold",
  },
  error: {
    color: "red",
    marginBottom: "10px",
  },
};

export default Login;
