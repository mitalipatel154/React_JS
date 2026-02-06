import React from "react";

const WithProducts = (WrappedComponent) => {
  return function CarouselWrapper({ items = [], id = "trendingCarousel" }) {
    if (!Array.isArray(items) || items.length === 0) return null;

    const perSlide = 4;
    const slides = [];
    for (let i = 0; i < items.length; i += perSlide) {
      const group = items.slice(i, i + perSlide);

      if (group.length < perSlide) {
        for (let j = 0; group.length < perSlide; j++) {
          group.push(items[j % items.length]);
        }
      }
      slides.push(group);
    }

    return (
      <>
        <div id={id} className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {slides.map((group, idx) => (
              <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
                <div className="container">
                  <div className="row gx-4 justify-content-center">
                    {group.map((item, cidx) => (
                      <div className="col-12 col-sm-6 col-md-3" key={cidx}>
                        <WrappedComponent data={item} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };
};

export default WithProducts;
