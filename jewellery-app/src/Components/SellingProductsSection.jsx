import React, { useState } from "react";
import SellingProductCard from "./SellingProductCard";
import WithSellingProducts from "./WithSellingProducts";

import product1 from "../assets/images/products/product1.png";
import product2 from "../assets/images/products/product2.png";
import product3 from "../assets/images/products/product3.png";
import product4 from "../assets/images/products/product4.png";
import product5 from "../assets/images/products/product5.png";
import product6 from "../assets/images/products/product6.png";
import product7 from "../assets/images/products/product7.png";
import product8 from "../assets/images/products/product8.png";

const SellingProductsGrid = WithSellingProducts(SellingProductCard);

const classicProducts = [
    {
        title: "Triumph Watch",
        price: 755,
        img: product1
    },
    {
        title: "Golden Line",
        price: 955, img: product2,
        isNew: true
    },
    {
        title: "Round Dial Semi",
        price: 555,
        img: product3
    },
    {
        title: "Black Dial Red",
        price: 355,
        img: product4
    },
    {
        title: "Black Dial Red",
        price: 745,
        img: product5
    },
    {
        title: "Black Dial Red",
        price: 185,
        img: product6
    },
    {
        title: "Black Dial Red",
        price: 155,
        img: product7
    },
    {
        title: "Black Dial Red",
        price: 355,
        img: product8
    },
];

const modernProducts = [
    { 
        title: "Modern Gold Ring",
        price: 650,
        img: product3
    },
    { 
        title: "Modern Necklace",
        price: 899,
        img: product5
    },
    {
        title: "Black Dial Red",
        price: 185,
        img: product6
    },
    {
        title: "Black Dial Red",
        price: 155,
        img: product7
    },
    {
        title: "Black Dial Red",
        price: 355,
        img: product8
    },
    {
        title: "Golden Line",
        price: 955, img: product2,
        isNew: true
    },
    {
        title: "Black Dial Red",
        price: 355,
        img: product4
    },
    {
        title: "Triumph Watch",
        price: 755,
        img: product1
    }
    
];

function SellingProductsSection() {
    const [activeTab, setActiveTab] = useState("classic");

    const products = activeTab === "classic" ? classicProducts : modernProducts;

    return (
        <section className="selling-section text-center my-5">
            <p className="fw-bold mb-1 text-danger fw-bold snd-font">BEST SELLING</p>
            <h1 className="text-light fw-bold mb-4 display-5">GRACEFUL EAR DROPS</h1>

            <div className="tabs mb-5 d-flex justify-content-center gap-3">
                <button
                    className={`tab-btn px-4 py-2 ${activeTab === "classic" ? "active btn-warning text-dark" : "btn-outline-light" }`} onClick={() => setActiveTab("classic")}>CLASSIC
                </button>

                <button
                    className={`tab-btn px-4 py-2 ${activeTab === "modern" ? "active btn-warning text-dark" : "btn-outline-light"}`} onClick={() => setActiveTab("modern")}>MODERN
                </button>
            </div>
            <div className="container">
            <SellingProductsGrid items={products} />
            </div>
        </section>
    );
}

export default SellingProductsSection;
