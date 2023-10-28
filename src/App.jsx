import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import ProductList from "./components/ProductList.jsx";
import Cart from "./components/Cart.jsx";
import productsData from "./products.json";

function App() {
    const [products, setProducts] = useState(productsData);
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <div>
            <Navbar cartCount={cart.length} />
            <ProductList products={products} addToCart={addToCart} />
            <Cart cartItems={cart} />
        </div>
    );
}

export default App;
