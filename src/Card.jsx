import React from "react";
import "./Card.css";

const Card = ({
  id,
  img,
  title,
  star,
  reviews,
  prevPrice,
  newPrice,
  addToCart,
}) => {
  const handleAddToCart = () => {
    addToCart(id);
  };

  return (
    <>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              ₹<del>{prevPrice}</del> {newPrice}
            </div>
            <div className="btn-add">
              <button onClick={handleAddToCart}>Add to cart</button>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
