
import React, { useState } from "react";
import { css } from "@emotion/react";

const Carousel = () => {
  const products = [
    { id: 1, title: "Product 1", description: "This is product 1 description", image: "/path-to-image1.png" },
    { id: 2, title: "Product 2", description: "This is product 2 description", image: "/path-to-image2.png" },
    { id: 3, title: "Product 3", description: "This is product 3 description", image: "/path-to-image3.png" },
    { id: 4, title: "Product 4", description: "This is product 4 description", image: "/path-to-image4.png" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  return (
    <div css={carouselContainer}>
      <div css={textSection}>
        <h2 css={title}>Our Products</h2>
        <p css={description}>Explore our premium collection</p>
      </div>
      <div css={controls}>
        <button onClick={handlePrev} css={[bubble, bubbleLeft]}>&#8592;</button>
        <button onClick={handleNext} css={[bubble, bubbleRight]}>&#8594;</button>
      </div>
      <div css={carousel}>
        {products.map((product, index) => (
          <div
            key={product.id}
            css={[
              slide,
              index === currentIndex ? activeSlide : inactiveSlide,
            ]}
          >
            <img src={product.image} alt={product.title} css={image} />
            <h3 css={productTitle}>{product.title}</h3>
            <p css={productDescription}>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

const carouselContainer = css`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  padding: 40px 20px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const textSection = css`
  margin-bottom: 20px;
`;

const title = css`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const description = css`
  font-size: 16px;
  color: #777;
`;

const controls = css`
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
`;

const bubble = css`
  background: #fff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  font-size: 24px;
  transition: background 0.3s ease;
  &:hover {
    background: #ff6347;
    color: #fff;
  }
`;

const bubbleLeft = css`
  position: absolute;
  left: 20px;
`;

const bubbleRight = css`
  position: absolute;
  right: 20px;
`;

const carousel = css`
  display: flex;
  overflow: hidden;
  position: relative;
  height: 300px;
  margin-top: 20px;
`;

const slide = css`
  flex: 0 0 100%;
  opacity: 0;
  transition: opacity 0.5s ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const activeSlide = css`
  opacity: 1;
  position: relative;
`;

const inactiveSlide = css`
  opacity: 0;
  position: absolute;
`;

const image = css`
  max-width: 100%;
  height: 200px;
  object-fit: contain;
`;

const productTitle = css`
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;
`;

const productDescription = css`
  font-size: 14px;
  color: #777;
`;
