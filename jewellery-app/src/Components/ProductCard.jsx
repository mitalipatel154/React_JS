import React from "react";

export default function ProductCard({ data }) {
  if (!data) return null;
  return (
    <section>
      <div className="product-card text-center">
        {data.isNew && <div className="new-badge">NEW</div>}
        <div className="img-wrap p-5">
          <img src={data.img} alt={data.title} className="product-img" />
        </div>
        <h5 className="product-title h3 fw-bolder">{data.title}</h5>
        <p className="product-price snd-font fw-bolder text-danger">${Number(data.price).toFixed(2)}</p>
      </div>
    </section>
  );
}
