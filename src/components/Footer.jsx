import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <h3 style={styles.logo}>  <span style={{color:"red"}}>RCB</span> GADGETS</h3>

        <p style={styles.text}>
          Your one-stop shop for laptops, mobiles, accessories & more.
        </p>

        <div style={styles.links}>
          <span>Whatapp</span>
          <span>Twitter</span>
          <span>Facebook</span>
          <span>Instagram</span>
        </div>

        <p style={styles.copy}>© {2026} <span style={{color:"red"}}> RCB</span> GADGETS. All rights reserved.</p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: "#111827",
    color: "white",
    marginTop: "40px",
    padding: "30px 0",
  },
  container: {
    maxWidth: "1200px",
    margin: "auto",
    textAlign: "center",
    padding: "0 20px",
  },
  logo: {
    marginBottom: "10px",
  },
  text: {
    fontSize: "14px",
    color: "#9ca3af",
    marginBottom: "15px",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    fontSize: "14px",
    marginBottom: "15px",
    cursor: "pointer",
  },
  copy: {
    fontSize: "13px",
    color: "#6b7280",
  },
};

export default Footer;
