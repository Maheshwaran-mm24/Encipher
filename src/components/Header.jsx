import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <header style={styles.header}>
      {/* Logo */}
      <div style={styles.logo} onClick={() => navigate("/home")}>
        <span style={{color:"red"}}>RCB </span>GADGETS
      </div>

      {/* Search */}
      <div style={styles.searchBox}>
        <input
          type="text"
          placeholder="Search..."
          style={styles.searchInput}
        />
        <button style={styles.searchBtn}>Search</button>
      </div>

      {/* Navigation Buttons */}
      <nav style={styles.nav}>
        <button style={styles.navBtn} onClick={() => navigate("/home")}>Home</button>
        <button style={styles.navBtn} onClick={() => navigate("/products")}>Products</button>
        <button style={styles.navBtn} onClick={() => navigate("/cart")}>Cart</button>
        <button style={styles.navBtn} onClick={() => navigate("/payment")}>Payment</button>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    height: "70px",
    background: "#111",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 30px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
  },
  logo: {
    fontSize: "22px",
    fontWeight: "bold",
    letterSpacing: "1px",
    cursor: "pointer",
  },
  nav: {
    display: "flex",
    gap: "15px",
  },
  navBtn: {
    background: "transparent",
    border: "1px solid white",
    color: "white",
    padding: "6px 14px",
    borderRadius: "20px",
    cursor: "pointer",
  },
  searchBox: {
    display: "flex",
    gap: "5px",
    height: "36px",
  },
  searchInput: {
    padding: "6px 10px",
    borderRadius: "20px",
    border: "none",
    outline: "none",
    width: "400px",
  },
  searchBtn: {
    padding: "6px 14px",
    borderRadius: "20px",
    border: "none",
    background: "#e91e63",
    color: "white",
    cursor: "pointer",
    width: "80px",
  },
};

export default Header;
