import React, { useState, useEffect, useRef } from "react";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
  };

  // 🔁 Auto slide
  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
    }, 3000);
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div
      style={styles.sliderContainer}
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      <button
        style={styles.arrow}
        onClick={handlePrev}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
      >
        ◀
      </button>

      <div style={styles.sliderContent}>
        {currentSlide === 0 && (
          <div style={styles.slide1}>
            <div style={styles.left}>
              <img
                src="https://www.apple.com/newsroom/images/2024/10/new-macbook-pro/article/Apple-MacBook-Pro-M4-lineup_big.jpg.large.jpg"
                style={styles.image}
              />
            </div>
            <div style={styles.right}>
              <h2>Exclusive Offer available on RCB Gadgets</h2>
              Upgrade to the powerful Apple M4 and feel the difference! Designed
              for next-level performance and efficiency, the M4 chip delivers
              faster processing, smoother multitasking, and stunning graphics.
              Grab this exclusive offer today and bring home Apple’s latest
              innovation at a special price.
              <br />
              <br />
              <button style={styles.btn}>BUY NOW</button>
            </div>
          </div>
        )}

        {currentSlide === 1 && (
          <div style={styles.slide1}>
            <div style={styles.left}>
              <img
                src="https://www.livemint.com/lm-img/img/2025/04/15/600x338/iphone_16_pro_price_india_1725908169871_1744103352348_1744710701069.jpg"
                style={styles.image}
              />
            </div>
            <div style={styles.right}>
              <h2>Iphone 17 Pro Max</h2>
              Discover the power of the all-new iPhone 17 Pro! With a stunning
              display, advanced camera system, and next-generation performance,
              it delivers an unmatched premium experience. Upgrade now and enjoy
              exclusive offers for a limited time.
              <br />
              <br />
              <button style={styles.btn}>BUY NOW</button>
            </div>
          </div>
        )}

        {currentSlide === 2 && (
          <div style={styles.slide1}>
            <div style={styles.left}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj7EBMT5VWvs3FT5dd0tOVMTLKfqUGCyxeUQ&s"
                style={styles.image}
              />
            </div>
            <div style={styles.right}>
              <h2>Exclusive Hot Sales</h2>
              <b>Don’t miss our exclusive product offers!</b> Get your favorite
              gadgets at unbeatable prices with limited-time discounts. Upgrade
              your lifestyle today and enjoy premium quality for less.
              <br />
              <br />
              <button style={styles.btn}>BUY NOW</button>
            </div>
          </div>
        )}
      </div>

      <button
        style={styles.arrow}
        onClick={handleNext}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
      >
        ▶
      </button>
    </div>
  );
}

const styles = {
  sliderContainer: {
    margin: "20px",
    padding: "20px",
    borderRadius: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background:
      "radial-gradient(circle, rgba(238,174,202,1) 0%, rgb(233,223,148) 94%)",
    height: "340px",
  },
  sliderContent: {
    flex: 1,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  arrow: {
    background: "transparent",
    border: "none",
    fontSize: "28px",
    cursor: "pointer",
    transition: "transform 0.3s ease",
  },
  slide1: {
    display: "flex",
  },
  left: {
    width: "300px",
    height: "100%",
    marginLeft: "70px",
  },
  right: {
    textAlign: "center",
    marginTop: "20px",
  },
  image: {
    width: "300px",
    height: "250px",
    borderRadius: "40px",
    boxShadow: "30px 30px 30px rgba(57, 157, 152, 0.2)",
    transition: "transform 0.4s ease",
  },
  btn: {
    borderRadius: "20px",
    height: "40px",
    width: "120px",
    backgroundColor: "rgb(240, 8, 8)",
    borderColor: "rgb(188, 153, 233)",
    cursor: "pointer",
    fontWeight: "bold",
    color: "white",
    border: "none",
    transition: "all 0.3s ease",
  },
};

export default Slider;
