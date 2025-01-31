import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ratingImg from "../assets/Star.svg";
import products from "../product.json";

const Product = ({ cart, setCart, handleAddToCart }) => {
  const isItemInCart = (itemId) =>
    cart.some((product) => product.id === itemId);
  return (
    <>
      <main className="d-flex flex-wrap justify-content-between gap-4 pt-2">
        {products.map((product) => {
          const { image, id, title, price, discountPrice, rateCount, rating } =
            product;
          return (
            <Card className="card-container" key={id}>
              <Card.Img variant="" className="w-100 card-img" src={image} />
              <Card.Body>
                <Card.Title className="card-title">{title}</Card.Title>
                <div className="d-flex gap-1">
                  <div className="pt-1">
                    <img src={ratingImg} alt="rating-img" />
                    <img src={ratingImg} alt="rating-img" />
                    <img src={ratingImg} alt="rating-img" />
                    <img src={ratingImg} alt="rating-img" />
                    <img src={ratingImg} alt="rating-img" />
                  </div>
                  <div className="d-flex gap-2 pt-2">
                    <p>{rating}</p>
                    <p>({rateCount})</p>
                  </div>
                </div>
                <Card.Text className="d-flex align-items-center gap-2 pt-2">
                  <span className="card-price">#{price}</span>
                  <span className="card-discount-price text-decoration-line-through">
                    #{discountPrice}
                  </span>
                </Card.Text>
                <button
                  disabled={isItemInCart(id)}
                  onClick={() => handleAddToCart(product)}
                  className="add-to-cart-btn w-100"
                >
                  {" "}
                  {isItemInCart(id) ? "Added to Cart" : "Add to Cart"}
                </button>
              </Card.Body>
            </Card>
          );
        })}
      </main>
    </>
  );
};

export default Product;
