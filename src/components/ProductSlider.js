import { products } from "../data";

// Importing React Icons
// import { HiPlus } from "react-icons/hi";

//TODO : swiper wont work add normal pagination and navigation
const ProductSlider = () => {
  const { pages } = products;
  const page = pages[0];

  return (
    <div className="grid grid-cols-2 gap-x-5 md:grid-cols-3 lg:grid-cols-4 lg: gap-5 lg:gap-10">
      {page.productList.map((product, index) => (
        <div
          key={index}
          className="max-w-[290px] max-h-[400px] w-full text-left"
        >
          <div className="border hover:border-accent w-full max-w-[285px] h-[292px] flex items-center justify-center relative transition rounded-lg hover:shadow-md hover:cursor-pointer hover:transition">
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
  );
};

export default ProductSlider;
