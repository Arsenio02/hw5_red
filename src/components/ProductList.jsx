import React from "react";

const ProductList = ({ products, addToCart }) => {
    if (!Array.isArray(products) || products.length === 0) {
        return <div>Загрузка товаров...</div>;
    }

    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>Цена: {product.price}</p>
                    <button onClick={() => addToCart(product)}>Купить</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
