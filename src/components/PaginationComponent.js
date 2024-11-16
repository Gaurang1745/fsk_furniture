import React, { useEffect, useState } from "react";
import { products as p } from "../data";
const PaginationComponent = () => {
  // State to store products, current page, total pages
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); // If your API provides total pages
  const [loading, setLoading] = useState(false);

  // // Fetch products when the page changes
  // const fetchProducts = async (page) => {
  //   setLoading(true);
  //   try {
  //     // Make an API request with the `page` and `limit` query params
  //     const response = await axios.get(apiUrl, {
  //       params: {
  //         page: page,
  //         limit: itemsPerPage, // Limit the number of products per page
  //       },
  //     });

  //     // Assume the API returns the products and total number of pages
  //     setProducts(response.data.products); // Assuming `products` is the array of products
  //     setTotalPages(response.data.totalPages); // Assuming `totalPages` is returned by the API
  //   } catch (error) {
  //     console.error("Error fetching products:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  //Temporary fetch products function
  const fetchProducts = (currentPage) => {
    setProducts(p.pages[currentPage - 1].productList);
  };
  // Set total pages on initial render
  useEffect(() => {
    setTotalPages(p.pages.length); // Set totalPages only once, when component mounts
  }, []); // Empty dependency array ensures it runs only once
  // Fetch products when the component mounts or when `currentPage` changes
  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  // Handle page change (Next/Previous)
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div>
      {/* Display current products */}
      <div className="grid grid-cols-2 gap-x-5 md:grid-cols-3 lg:grid-cols-4 lg: gap-5 lg:gap-10">
        {products.map((product, index) => (
          <div
            key={index}
            className="max-w-[290px] max-h-[400px] w-full text-left"
          >
            <div className="border hover:border-golden w-full max-w-[285px] h-[292px] flex items-center justify-center relative transition rounded-lg hover:shadow-md hover:cursor-pointer hover:transition">
              <img src={product.image.type} alt={product.name} />
              {/* <div
									className='absolute right-3 bottom-3 border-spacing-1 
						border-2 p-0.5 rounded-full bg-gray-300 transition'
								>
									<HiPlus className='text-xl text-black' />
								</div> */}
            </div>
            <div className="px-1 py-3">
              <h3 className="font-semibold text-base lg:text-xl">
                {product.name}
              </h3>
              <div className="flex gap-x-5 text-sm">
                <p>{product.price} $</p>
                <p className="opacity-60 line-through">{product.oldPrice} $</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-10">
        {/* Previous button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-white text-black rounded-l-md border-gray-200 border-2 border-r-0"
        >
          Previous
        </button>

        {/* Page numbers */}
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 border-r-0 border-gray-200 border-2 ${
              currentPage === index + 1
                ? "bg-golden text-white "
                : "bg-white text-black"
            } border`}
          >
            {index + 1}
          </button>
        ))}

        {/* Next button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-white text-black rounded-r-md border-gray-200 border-2"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationComponent;
