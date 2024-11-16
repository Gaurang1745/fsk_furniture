import React from "react";
import { products } from "../data";
import PaginationComponent from "../components/PaginationComponent";
import { useParams } from "react-router-dom";
const ProductCatalogue = () => {
  // const { title, subtitle } = products;
  const { subtitle } = products;
  //get category from the params
  const { category } = useParams();
  return (
    <section className="section pt-[125px]">
      <div className="container mx-auto">
        <h1 className="title text-center capitalize">
          All {category} products
        </h1>
        <h3 className="subtitle text-center">{subtitle}</h3>

        {/* Products */}
        {/* <ProductSlider /> */}
        <PaginationComponent />
      </div>
    </section>
  );
};

export default ProductCatalogue;
