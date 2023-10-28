import React from "react";

const Navbar = ({ cartCount }) => {
    return (
        <nav>
            <div>Магазин</div>
            <div>Корзина ({cartCount})</div>
        </nav>
    );
};

export default Navbar;
