import React from "react";
import { useNavigate } from "react-router-dom";
import "./Categories.css";

function Categories() {
  const navigate = useNavigate();

  const goToCategory = (categoryId) => {
    navigate(`/products#${categoryId}`);
  };

  return (
    <div className="categories-container">
      <h3 className="categories-title">Categories</h3>

      <div className="categories-grid">
        <div className="category-card" onClick={() => goToCategory("laptops")}>
          <img src="https://img.icons8.com/3d-fluency/94/laptop.png" width="45px" />
          <p>Laptop</p>
        </div>

        <div className="category-card" onClick={() => goToCategory("mobiles")}>
          <span className="emoji">📱</span>
          <p>Mobile</p>
        </div>

        <div className="category-card" onClick={() => goToCategory("headphones")}>
          <span className="emoji">🎧</span>
          <p>Headphone</p>
        </div>

        <div className="category-card" onClick={() => goToCategory("tv")}>
          <span className="emoji">📺</span>
          <p>TV</p>
        </div>

        <div className="category-card" onClick={() => goToCategory("otheraccessories")}>
          <span className="emoji">🖱️</span>
          <p>Accessories</p>
        </div>
      </div>
    </div>
  );
}

export default Categories;
