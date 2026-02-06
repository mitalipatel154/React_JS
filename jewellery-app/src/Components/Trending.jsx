import React from "react";
import ProductCard from "../Components/ProductCard";
import WithProducts from "../Components/WithProducts";

import product1 from "../assets/images/products/product1.png";
import product2 from "../assets/images/products/product2.png";
import product3 from "../assets/images/products/product3.png";
import product4 from "../assets/images/products/product4.png";
import product5 from "../assets/images/products/product5.png";

const products = [
    {
        title: "Triumph Watch",
        price: 155,
        img: product1
    },
    {
        title: "Golden Line",
        price: 155,
        img: product2,
        isNew: true
    },
    {
        title: "Round Dial Semi",
        price: 155,
        img: product3
    },
    {
        title: "Black Dial Red",
        price: 155,
        img: product4
    },
    {
        title: "Black Dial Red",
        price: 155,
        img: product5
    }
];

const TrendingCarousel = WithProducts(ProductCard);

function Trending() {
    return (
        <section className="TrendingProduct pt-5">
            <div className="container my-5">
                <div className="row justify-content-between">
                    <div className="col-4">
                        <p className="text-danger fw-bold snd-font">FIND NEW-IN</p>
                        <h2 className="text-light fw-bold mb-4 display-5">TOP TRENDING</h2>
                    </div>


                    <div className="col-4">
                        <div className="carousel-buttons d-flex justify-content-end">
                            <button className="btn me-2 rounded-circle text-white" type="button" data-bs-target="#trendingCarousel" data-bs-slide="prev">
                                <i className="bi bi-chevron-left"></i>
                            </button>
                            <button className="btn rounded-circle text-white" type="button" data-bs-target="#trendingCarousel" data-bs-slide="next">
                            <i className="bi bi-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <TrendingCarousel items={products} id="trendingCarousel" />
            </div>
        </section>
    );
}

export default Trending;
