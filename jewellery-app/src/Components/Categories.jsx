import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import cat1 from "../assets/images/categories/category1.jpg";
import cat2 from "../assets/images/categories/category2.jpg";
import cat3 from "../assets/images/categories/category3.jpg";
import cat4 from "../assets/images/categories/category4.jpg";

function Categories() {
  return (
    <section className="categories container-fluid my-5 py-5">
      <div className="row g-3">
        <div className="col-lg-4 position-relative">
          <img src={cat1} className="img-fluid w-100" alt="Top Categories" />

          <div className="topCategory-content position-absolute top-50 start-50 translate-middle text-white">
            <h2 className="fw-bold display-5">TOP <br /> CATEGORIES</h2>
            <p className="mt-3 mb-0 snd-font fw-bold">
              <span>SHOP NOW</span>
              <i class="bi bi-chevron-double-right"></i>
            </p>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="row g-3">

            <div className="col-12">
              <div className="position-relative">
                <img src={cat2} className="img-fluid w-100" alt="Necklace" />
                <p className="category-content position-absolute text-white display-5 fw-bold">
                  Necklace
                </p>
              </div>
            </div>

            <div className="col-12">
              <div className="position-relative">
                <img src={cat3} className="img-fluid w-100" alt="Earrings" />
                <p className="category-content position-absolute text-white display-5 fw-bold">
                  Earrings
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
              <div className="position-relative h-100">
                <img src={cat4}
                  className="img-fluid w-100 h-100"
                  style={{ objectFit: "cover" }}
                  alt="Bracelets"
                />
                <p className="category-content position-absolute text-white fw-bold">
                  <span className="display-5 pe-2">Bracelets</span>
                  <i className="bi bi-plus-circle-dotted fs-3"></i>
                </p>
              </div>
            </div>
      </div>
    </section>
  );
}

export default Categories;
