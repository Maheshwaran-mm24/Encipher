import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import ProductCard from "../../components/ProductCard";
import TopSellProducts from "../../components/TopSellProducts";
import Footer from "../../components/Footer";

const productData = [
  {
    category: "Laptops",
    items: [
      { id: 1, name: "HP Pavilion", price: 55000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBn4dEKsf-lqbTizV_a5V3R8mtIJyz8YlLEw&s" },
      { id: 2, name: "Dell Inspiron", price: 60000, image: "https://m.media-amazon.com/images/I/71S8U9VzLTL._SX679_.jpg" },
      { id: 3, name: "Asus vivobook", price: 70000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWU-9YjhcM2BpBDZacc24IjQnb_DzHjuuYmQ&s" },
      { id: 4, name: "Asus ROG Strix", price: 150000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXnMe2Xyvx8i_PFsDXRTxiKcupV9X7XFHFVA&s" },
      { id: 5, name: "Lenovo LOQ", price: 45000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8m49bh28ItQuK9BoJ3VC0Z1wzhwO_Wdfydw&s" },
      { id: 6, name: "MSI Laptop", price: 65000, image: "https://www.shivamvideo.in/wp-content/uploads/2023/07/MSI-1-600x600.jpg" },
    ],
  },
  {
    category: "Mobiles",
    items: [
      { id: 7, name: "Moto edge 60 fusion", price: 22000, image: "https://notereview.in/wp-content/uploads/2025/11/motorola-edge-60-fusion.jpg" },
      { id: 8, name: "Samsung S24 Ultra", price: 80000, image: "https://bhatiamobile.com/wp-content/uploads/2024/02/SAMSUNG-Galaxy-S24-Ultra-5G-Titanium-Violet-1-600x600.jpg.webp" },
      { id: 9, name: "Iphone 15 Pro", price: 50000, image: "https://phoneprice.in/wp-content/uploads/2025/10/iPhone-15-Pro-Price-In-India-600x600.jpg" },
      { id: 10, name: "Redmi Note 14", price: 20000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNPDvljdmaocl8KxrxkptnbqVOyRQxdUDc_g&s" },
      { id: 11, name: "OnePlus Nord 5", price: 32000, image: "https://mobilesdetail.com/wp-content/uploads/2025/07/OnePlus-Nord-5-Dry_Ice.jpg" },
      { id: 12, name: "Oppo Reno 15 pro", price: 59000, image: "https://www.geekwills.com/media/catalog/product/cache/d368225e56c0af8fed569f12698f474d/o/p/oppo_reno_15-1_1.jpg" },
    ],
  },
  {
    category: "Headphones",
    items: [
      { id: 13, name: "Boat Rockerz", price: 1500, image: "https://m.media-amazon.com/images/I/61kWB+uzR2L._SX679_.jpg" },
      { id: 14, name: "Sony WH-1000XM4", price: 25000, image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._SX679_.jpg" },
      { id: 15, name: "JBL Tune", price: 3000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTJl54LOUh1jR92oWBlzY2Zih7H34-xMldjA&s" },
      { id: 16, name: "OnePlus Buds Pro 3", price: 3500, image: "https://www.geekwills.com/media/catalog/product/cache/d368225e56c0af8fed569f12698f474d/o/n/oneplus_buds_pro_3.png" },
      { id: 17, name: "Boat Earbuds", price: 4000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsKK1KZI2aEVMB8jSu1AlIw-K_ibAEL4xwwA&s" },
      { id: 18, name: "Realme Buds", price: 2000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXaozQocEE6oALXPfx6NkqYK0vchXQ-__-RQ&s" },
    ],
  },
  {
    category: "TV",
    items: [
      { id: 19, name: "LG Smart Tv", price: 40000, image: "https://www.lg.com/content/dam/channel/wcms/in/images/tvs/32lq640bpta_atrq_eail_in_c/gallery/32LQ640BPTA-D-1.jpg" },
      { id: 20, name: "Samsung Crystall", price: 30000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH2FjtUehh8AikeTtXa-V6VniaPXYIglhW3g&s" },
      { id: 21, name: "Haier Tv", price: 100000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhTfnM1jnFgfS8jT1ZN7ZYDDGQI1fjILOEOQ&s" },
      { id: 22, name: "Sony Bravia", price: 35000, image: "https://ecityuae.ae/cdn/shop/files/S400892726_1_60775f36-b8f7-48ac-98e7-60c3d6b5dfb3.jpg?v=1720544907" },
      { id: 23, name: "Philips tv", price: 29000, image: "https://m.media-amazon.com/images/I/71uW0NH6EUL.jpg" },
      { id: 24, name: "Xiaomi 4k Tv ", price: 32000, image: "https://mahajanelectronics.com/cdn/shop/files/81H18A8lmhL._SL1500.jpg?v=1748593214&width=600" },
    ],
  },
  {
    category: "Other Accessories",
    items: [
      { id: 25, name: "HP Pen Drive", price: 1500, image: "https://tiimg.tistatic.com/fp/1/005/116/64-gb-pen-drive-hp--369.jpg" },
      { id: 26, name: "Arctic fox Mouse", price: 2500, image: "https://m.media-amazon.com/images/I/61x-3W9fUDL._AC_UF1000,1000_QL80_.jpg" },
      { id: 27, name: "Razer Mouse pro", price: 3000, image: "https://electrocity.b-cdn.net/acd-cgi/img/v1/2024/07/razer-cobra-wired-rgb-gaming-mouse-black-electrocity.ie-00001-600x600.jpg?width=600" },
      { id: 28, name: "Noise Smartwatch", price: 3500, image: "https://www.shopyvision.com/wp-content/uploads/2024/02/Noise-Twist-Go-Bluetooth-Calling-Smart-Watch.jpg" },
      { id: 29, name: "RTX 3050 Gpu", price: 800, image: "https://m.media-amazon.com/images/I/51QaFKJf3+L.jpg" },
      { id: 30, name: "Samsung galaxy 7 watch", price: 2000, image: "https://vasanthandco.in/UploadedFiles/productimages/20241001125817-d.jpg" },
    ],
  },
];

function Products() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <Header />
      <TopSellProducts />
      <div style={styles.container}>
        {productData.map((category) => (
          <div
            key={category.category}
            id={category.category.toLowerCase().replace(/\s+/g, "")} // 👈 ID for scroll
            style={styles.categorySection}
          >
            <h2 style={styles.categoryTitle}>{category.category}</h2>

            <div style={styles.grid}>
              {category.items.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </>
  );
}

const styles = {
  container: {
    padding: "20px",
  },
  categorySection: {
    marginBottom: "40px",
  },
  categoryTitle: {
    marginBottom: "15px",
    borderBottom: "2px solid #2563eb",
    display: "inline-block",
    paddingBottom: "5px",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "space-around",
  },
};

export default Products;
