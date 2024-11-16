import { categories } from "../data";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../slider.css";

// Core modules imports are same as usual
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const CategorySlider = () => {
  const pages = [categories];

  const pageSlider = pages.map((page, index) => {
    return (
      <SwiperSlide key={index}>
        <div className="grid grid-cols-2 gap-x-5 md:grid-cols-3 lg:grid-cols-4 lg: gap-5 lg:gap-10">
          {page.products.map((product, index) => (
            <Link
              to={`/categories/${product.name}`}
              key={index}
              className="max-w-[290px] max-h-[400px] w-full text-left"
            >
              <div className="border hover:border-accent w-full max-w-[285px] h-[292px] flex items-center justify-center relative transition rounded-lg hover:shadow-md hover:cursor-pointer hover:transition">
                <img
                  src={product.image.type}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-lg" // Ensures the image fits without distortion
                />
              </div>
              <div className="px-1 py-3 justify-items-center">
                <h3 className="font-semibold text-base lg:text-xl capitalize">
                  {product.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="productSlider relative"
    >
      {pageSlider}
    </Swiper>
  );
};

export default CategorySlider;
