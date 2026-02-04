import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import { increaseQty, decreaseQty, removeFromCart, clearCart } from "../../redux/cartSlice";
import Payment from "../payment";
import "./Cart.css";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <Header />
      <div style={styles.container}>
        <center><h2>Your Cart</h2></center>

        {cartItems.length === 0 ? (
          <center><p>Your cart is empty </p></center>
        ) : (
          <>
            {cartItems.map(item => (
              <div key={item.id} style={styles.card}>
                <img src={item.image} alt={item.name} style={styles.image} />
                <div style={styles.info}>
                  <h4>{item.name}</h4>
                 <p>₹{item.price}</p>

                  <div style={styles.qtyBox}>
                    <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
                  </div>

                  <button style={styles.removeBtn} onClick={() => dispatch(removeFromCart(item.id))}>
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <h3>Total Amount: ₹{totalPrice}</h3>
            <button className="clear-btn" onClick={() => dispatch(clearCart())}>
              Clear Cart
            </button>
            <button className="buyNow-btn" onClick={() => window.location.href = "/payment"}>BUY NOW</button>
          </>
        )}
      </div>
    </>
  );
}

const styles = {
  container: {
    padding: "20px",
  },
  card: {
    display: "flex",
    gap: "15px",
    padding: "12px",
    background: "white",
    borderRadius: "10px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    marginBottom: "15px",
  },
  image: {
    width: "80px",
    height: "80px",
    objectFit: "contain",
  },
  info: {
    flex: 1,
  },
  qtyBox: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginTop: "6px",
  },
  removeBtn: {
    marginTop: "8px",
    background: "#dc2626",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  
}
export default Cart;
