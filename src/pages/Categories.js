import React from "react";
import { categories } from "../data";
import CategorySlider from "../components/CategorySlider";

const Categories = () => {
  const { title, subtitle } = categories;
  return (
    <section className="section pt-[125px]">
      <div className="container mx-auto">
        <h1 className="title text-center">{title}</h1>
        <h3 className="subtitle text-center">{subtitle}</h3>

        {/* Products */}
        <CategorySlider />
      </div>
    </section>
  );
};

export default Categories;
