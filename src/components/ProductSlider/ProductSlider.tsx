import React from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ProductCardSmall from "../ProductCardSmall/ProductCardSmall";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const Responsive = {
  0: {
    items: 4,
    nav: true,
  },
  600: {
    items: 4,
    nav: true,
  },
  1000: {
    items: 7,

    nav: true,
  },
};

const ProductSlider: React.FC = ({ items }) => {
  return (
    <OwlCarousel responsive={Responsive}>
      {Array.isArray(items) && items.length > 0 ? (
        items.map((product) => (
          <div className="item bg-white" key={product.id}>
            <ProductCardSmall
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              category_name={product.category_name}
              description={product.description}
              salePrice={product.salePrice}
            />
          </div>
        ))
      ) : (
        <p>No products found</p>
      )}
    </OwlCarousel>
  );
};

export default ProductSlider;
