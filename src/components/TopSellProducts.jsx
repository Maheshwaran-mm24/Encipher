import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import topsell1 from "../images/topsell1.jpg";
import topsell2 from "../images/topsell2.jpg";
import topsell3 from "../images/topsell3.jpg";
import topsell4 from "../images/topsell4.jpg";
import topsell5 from "../images/topsell5.jpg";
import topsell6 from "../images/topsell6.jpg";

function TopSellProducts() {
  const dispatch = useDispatch();

  const products = [
    { id: 101, name: "iphone 17 pro max", price: 100000, image: topsell1 },
    { id: 102, name: "Samsung S25 Ultra", price: 90999, image: topsell2 },
    { id: 103, name: "HP Victus Laptop", price: 80000, image: topsell3 },
    { id: 104, name: "Apple MacBook Pro M5", price: 150999, image: topsell4 },
    { id: 105, name: "Samsung Smart TV", price: 39999, image: topsell5 },
    { id: 106, name: "Boult Mustang", price: 3999, image: topsell6 },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Top Selling Products</h2>

      <div style={styles.grid}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            <img src={product.image} alt={product.name} style={styles.image} />
            <h4>{product.name}</h4>
            <p style={styles.price}>₹{product.price}</p>
            <button
              style={styles.btn}
              onClick={() => dispatch(addToCart(product))}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { padding: "40px" },
  heading: { marginBottom: "20px" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "#fff",
    borderRadius: "12px",
    padding: "15px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  image: { width: "100%", height: "140px", objectFit: "contain" },
  price: { fontWeight: "bold", margin: "8px 0" },
  btn: {
    background: "#e91e63",
    color: "white",
    border: "none",
    padding: "8px 14px",
    borderRadius: "20px",
    cursor: "pointer",
  },
};

export default TopSellProducts;
