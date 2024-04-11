import React from "react";
import "./BillingPage.css";

const BillingPage = ({
  cartItems,
  removeFromCart,
  closeBillingPage,
  handlePay,
}) => {
  const totalBill = cartItems.reduce(
    (acc, item) => acc + parseInt(item.newPrice),
    0
  );
  const discount = totalBill > 4000 ? totalBill * 0.1 : 0;
  const discountedTotal = totalBill - discount;

  return (
    <div className="billing-page">
      <div className="billing-header">
        <h1>Your Billing Information</h1>
        <button className="X-btn" onClick={closeBillingPage}>
          X
        </button>
      </div>

      <div className="items">
        {" "}
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.title} - ₹{item.newPrice}
              <button
                className="Rem-btn"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>

      <p className="pay">
        Total: ₹{totalBill}
        {discount > 0 && (
          <>
            <br />
            Discount: ₹{discount}
          </>
        )}
        <br />
        Discounted Total: ₹{discountedTotal}
      </p>
      <button className="pay-btn" onClick={handlePay}>
        Pay Now
      </button>
    </div>
  );
};

export default BillingPage;
