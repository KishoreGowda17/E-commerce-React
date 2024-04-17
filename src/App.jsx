import React, { useState } from "react";
import Navigation from "./components/Navigation/Nav";
import Products from "./components/Products/Products";
import data from "./db/data";
import Recommended from "./components/Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./Card";
import BillingPage from "./BillingPage";
import "./App.css";


function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [showBilling, setShowBilling] = useState(false);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  const addToCart = (productId) => {
    const productToAdd = data.find((product) => product.id === productId);
    setCartItems([...cartItems, productToAdd]);
  };

  const goToBillingPage = () => {
    setShowBilling(true);
  };

  const closeBillingPage = () => {
    setShowBilling(false);
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  const handlePay = () => {
    // Handle payment logic here
    alert("Payment successful!");
  };

  const filteredItems = data.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredItems;
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ id, img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={id}
          id={id}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
          addToCart={addToCart}
        />
      )
    );
  }

  const result = filteredData(data, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation
        query={query}
        handleInputChange={handleInputChange}
        cartItems={cartItems}
        addToCart={addToCart}
        goToBillingPage={goToBillingPage} 
      />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
      {showBilling && (
        <BillingPage
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          closeBillingPage={closeBillingPage}
          handlePay={handlePay}
        />
      )}
    </>
  );
}

export default App;
