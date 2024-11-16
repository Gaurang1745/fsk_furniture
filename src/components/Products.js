import React from "react";
import { products } from "../data";
import ProductSlider from "./ProductSlider";
import PaginationComponent from "./PaginationComponent";

const Products = () => {
  const { title, subtitle } = products;
  return (
    <section className="section">
      <div className="container mx-auto">
        <h1 className="title text-center">{title}</h1>
        <h3 className="subtitle text-center">{subtitle}</h3>

        {/* Products */}
        {/* <ProductSlider /> */}
        <PaginationComponent />
      </div>
    </section>
  );
};

export default Products;
