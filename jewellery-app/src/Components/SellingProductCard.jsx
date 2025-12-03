import React from "react";

function SellingProductCard({ title, price, img, isNew }) {
    return (
        <div className="selling-product-card text-center mb-5">
            {isNew && <span className="badge bg-danger new-badge">NEW</span>}

            <img src={img} alt={title} className="img-fluid product-image p-5" />

            <h5 className="product-title h3 fw-bolder">{title}</h5>
            <p className="product-price snd-font fw-bolder text-danger">${price}.00</p>
        </div>
    );
}

export default SellingProductCard;