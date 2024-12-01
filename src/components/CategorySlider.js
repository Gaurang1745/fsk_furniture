// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import preview from "../assets/images/preview.jpg"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../slider.css";

// Core modules imports are same as usual
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const CategorySlider = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  //fetch categories through api

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/categories`
        );
        // console.log(response.data);

        setCategories(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        // console.log("final", categories);
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  // console.log(loading);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <Swiper
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="productSlider relative"
    >
      <SwiperSlide key={0}>
        <div className="grid grid-cols-2 gap-x-5 md:grid-cols-3 lg:grid-cols-4 lg: gap-5 lg:gap-10">
          {categories && categories.length > 0 && categories.map((category, index) => (
            <Link
              to={`/categories/${category.urlName}`}
              key={index}
              className="max-w-[290px] max-h-[400px] w-full text-left  hover:text-golden"
            >
              <div className="border hover:border-2 hover:border-golden w-full max-w-[285px] h-[292px] flex items-center justify-center relative transition rounded-lg hover:shadow-md hover:cursor-pointer hover:transition">
                <img
                  src={category.image || preview}
                  alt={category.name}
                  className="w-full h-full object-contain rounded-md" // Ensures the image fits without distortion
                />
              </div>
              <div className="px-1 py-3 justify-items-center">
                <h3 className="font-semibold text-base lg:text-xl capitalize">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default CategorySlider;
