import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart(product));
  };


  return (
    <div style={styles.card} id="cardbtn">
      <div style={styles.imageWrapper}>
        <img src={product.image} alt={product.name} style={styles.image} />
      </div>
      <h4 style={styles.name}>{product.name}</h4>
      <p style={styles.price}>₹{product.price}</p>
     <button style={styles.btn} onClick={handleAdd}>Add to Cart</button>

    </div>
  );
}

const styles = {
  card: {
    width: "180px",
    background: "white",
    borderRadius: "10px",
    padding: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  imageWrapper: {
    width: "100%",
    height: "120px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: "8px",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  name: {
    fontSize: "14px",
    margin: "8px 0 4px",
  },
  price: {
    fontSize: "14px",
    color: "#16a34a",
    fontWeight: "bold",
  },
  btn: {
    marginTop: "8px",
    padding: "6px 10px",
    border: "none",
    borderRadius: "6px",
    background: "#2563eb",
    color: "white",
    cursor: "pointer",
    fontSize: "13px",
  },
};

export default ProductCard;
