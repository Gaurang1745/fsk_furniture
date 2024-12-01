// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import data
import { newInStore } from "../data";

import preview from "../assets/images/preview.jpg";
import { Link } from "react-router-dom";
const NewItemsSlider = () => {
  const { products } = newInStore;
  return (
    <Swiper
      grabCursor={true}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 18,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
    >
      {products.map((product, index) => (
        
        <SwiperSlide key={index} className="max-w-[256px]">
        <Link to={product.link}>
          <div className="relative">
            <img src={product.image.type || preview} alt={product.name} />
            <div
              className="absolute text-white bottom-[20px] w-full text-center 
						text-[18px] capitalize lg:text-2xl font-medium"
            >
              {product.name}
            </div>
          </div>
          </Link>
        </SwiperSlide>
        
      ))}
    </Swiper>
  );
};

export default NewItemsSlider;
