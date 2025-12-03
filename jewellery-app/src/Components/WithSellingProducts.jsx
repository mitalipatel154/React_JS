import React from "react";

const WithSellingProducts = (WrappedComponent) => {
  return function SellingProductsGrid({ items }) {
    return (
      <div className="row g-4 justify-content-center">
        {items.map((item, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
            <WrappedComponent {...item} />
          </div>
        ))}
      </div>
    );
  };
};

export default WithSellingProducts;
