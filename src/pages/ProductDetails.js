import React, { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import ProductGallery from "../components/ProductGallery";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { IoChevronBack } from "react-icons/io5"; // Chevron icon from React Icons
import axios from "axios";
// const product = {
//   _id: { $oid: "6734e25504320fbc43b7c835" },
//   name: "Pinto accent & Dining Chair in Blue Blend",
//   has_variants: false,
//   price: "$299",
//   description:
//     '\nThe sloped back and seamless organic silhouette of this chair reflects the bold design breakthroughs of the mid\\-twentieth century, while the button tufting recalls the classic luxury of an earlier age. Upholstered in a subtle, multi\\-toned blue\\-grey, this is an eye\\-catching and comfortable addition to your living room, study or bedroom.\n\n\n* Textured, multi\\-toned fabric with button\\-tufted back\n* Removable seat cushion for easy cleaning\n* Solid rubberwood legs in a walnut finish\n* Medium\\-firm polyester foam cushion\n* Approximate weight capacity is 300 lbs; seat height is 17\\.75"\n* Contemporary design with timeless appeal\n* Perfect for both modern and traditional interiors\n* Elegant stitching for added durability and style\n* Available in a variety of fabric colors and textures\n* Easy assembly with minimal tools required\n* Dimensions: 32" W x 30" D x 35" H\n\n\nWhether you are relaxing after a long day or hosting guests, this chair combines comfort with style. Its versatile design makes it a great addition to any room, complementing a wide range of décor styles from mid\\-century modern to contemporary. The plush seat and back cushion provide optimal support, ensuring you can enjoy hours of sitting in comfort. Add this exquisite piece to your home and experience the perfect blend of design and function.',
//   img_paths: [
//     "https://res.cloudinary.com/dmhl8fnda/image/upload/v1731515937/fw/chairs/70431c71-fbfd-4671-9a1e-40bae012f619/0.jpg",
//     "https://res.cloudinary.com/dmhl8fnda/image/upload/v1731515939/fw/chairs/70431c71-fbfd-4671-9a1e-40bae012f619/1.jpg",
//     "https://res.cloudinary.com/dmhl8fnda/image/upload/v1731515941/fw/chairs/70431c71-fbfd-4671-9a1e-40bae012f619/2.jpg",
//     "https://res.cloudinary.com/dmhl8fnda/image/upload/v1731515943/fw/chairs/70431c71-fbfd-4671-9a1e-40bae012f619/3.jpg",
//     "https://res.cloudinary.com/dmhl8fnda/image/upload/v1731515946/fw/chairs/70431c71-fbfd-4671-9a1e-40bae012f619/4.jpg",
//     "https://res.cloudinary.com/dmhl8fnda/image/upload/v1731515950/fw/chairs/70431c71-fbfd-4671-9a1e-40bae012f619/5.jpg",
//     "https://res.cloudinary.com/dmhl8fnda/image/upload/v1731515951/fw/chairs/70431c71-fbfd-4671-9a1e-40bae012f619/6.jpg",
//     "https://res.cloudinary.com/dmhl8fnda/image/upload/v1731515937/fw/chairs/70431c71-fbfd-4671-9a1e-40bae012f619/0.jpg",
//     "https://res.cloudinary.com/dmhl8fnda/image/upload/v1731515939/fw/chairs/70431c71-fbfd-4671-9a1e-40bae012f619/1.jpg",
//     "https://res.cloudinary.com/dmhl8fnda/image/upload/v1731515941/fw/chairs/70431c71-fbfd-4671-9a1e-40bae012f619/2.jpg",
//     "https://res.cloudinary.com/dmhl8fnda/image/upload/v1731515943/fw/chairs/70431c71-fbfd-4671-9a1e-40bae012f619/3.jpg",
//     "https://res.cloudinary.com/dmhl8fnda/image/upload/v1731515946/fw/chairs/70431c71-fbfd-4671-9a1e-40bae012f619/4.jpg",
//     "https://res.cloudinary.com/dmhl8fnda/image/upload/v1731515950/fw/chairs/70431c71-fbfd-4671-9a1e-40bae012f619/5.jpg",
//     "https://res.cloudinary.com/dmhl8fnda/image/upload/v1731515951/fw/chairs/70431c71-fbfd-4671-9a1e-40bae012f619/6.jpg",
//   ],
//   c_id: "70431c71-fbfd-4671-9a1e-40bae012f619",
//   category: "chairs",
//   sub_category: "chairs",
// };

// const product = {
//   _id: { $oid: "6734e26004320fbc43b7c855" },
//   name: "Swivel, Rocker & Recliner Chair",
//   has_variants: true,
//   variants: [
//     { name: "Beige", price: "$599.00" },
//     { name: "Brown", price: "$499.00" },
//     { name: "Yellow", price: "$399.00" },
//     { name: "Black", price: "$199.00" },
//     { name: "Gaurang", price: "$99.00" },
//     { name: "Farhan", price: "Free" },
//   ],
//   description:
//     "\n**High\\-Quality Design at an Affordable Price!**\n\n\nWhen it comes to furnishing your home, you’re often left with two choices: beautifully designed pieces that are overpriced and far from comfortable, or soft, comfy chairs that start falling apart as soon as you bring them home.\n\n\nWith bold lines and a clean silhouette, these chairs capture the heart  \nof modern design. Paired with button tufting and welt trim, they also boast classic sophistication.  \n\n\n\nElegant design doesn’t mean we sacrifice function! Every chair features an enclosed ball bearing mechanism, allowing for smooth glide, gentle rocking and 360\\-degree rotation. With our built\\-in footrest and 135\\-degree recline, it’s a must\\-have for living rooms, nurseries or bedrooms. Finished with spring core foam, it delivers premium comfort, soothing support and unbridled relaxation.\n\n\nSoft, plush and incredibly smooth, choosing microfiber upholstery for our chairs was a no\\-brainer! With reliable, sturdy construction, your family can enjoy our recliner for years to come. \n\n\n**Why Choose Our Swivel Recliner?**\n\n\n* Modern, sophisticated design\n* Smooth glide, rock and rotation\n* Easy\\-to\\-use built\\-in footrest\n* Soft, comfortable and supportive\n* Premium, reliable craftsmanship\n\n\n",
//   img_paths: [
//     "https://res.cloudinary.com/dmhl8fnda/image/upload/v1731517469/fw/chairs/95e4175f-61a4-4880-a2c9-766664d33ea5/0.jpg",
//     "https://res.cloudinary.com/dmhl8fnda/image/upload/v1731517471/fw/chairs/95e4175f-61a4-4880-a2c9-766664d33ea5/1.jpg",
//     "https://res.cloudinary.com/dmhl8fnda/image/upload/v1731517472/fw/chairs/95e4175f-61a4-4880-a2c9-766664d33ea5/2.jpg",
//   ],
//   c_id: "95e4175f-61a4-4880-a2c9-766664d33ea5",
//   category: "chairs",
//   sub_category: "chairs",
// };
const ProductDetails = () => {
  const navigate = useNavigate();

  // Handle back navigation
  const handleBackClick = () => {
    if (window.history.length > 1) {
      navigate(-1); // Go back to the previous page
    } else {
      navigate("/"); // Go to the home page if no history is available
    }
  };
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [price, setPrice] = useState(null);
  const [quantity, setQuantity] = useState(0);  
  const [variants, setVariants] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);
  const handleVariantSelect = (variant) => {
    setSelectedVariant(variant);
    setPrice(variant.price);
    if(variant.images?.length>0) setGalleryImages(variant.images);
    if(variant.quantity) setQuantity(variant.quantity);
  };

  const { category, id } = useParams();

  useEffect(() => {
    const fetchSingleProduct = async (id) => {
      try {
        // console.log(`http://localhost:5000/api/products/singleProduct/${id}`);
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/products/singleProduct/${id}`
        );

        console.log(response.data);
        setProduct(response.data);
        setGalleryImages(response.data.img_paths);
        setQuantity(response.data.quantity);
        // setSelectedVariant(response.data.default_idx);
        if (response.data.variants?.length > 0) {
          setPrice(response.data.variants[response.data.default_idx].price);
          setSelectedVariant(response.data.variants[response.data.default_idx]);
          if(response.data.variants[response.data.default_idx].images?.length>0) setGalleryImages(
            response.data.variants[response.data.default_idx].images
          );
          if(response.data.variants[response.data.default_idx]?.quantity) setQuantity(
            response.data.variants[response.data.default_idx]?.quantity
          );
          // //filter variants to get only variants that have visibility true
          // const filteredVariants = response.data.variants.filter(
          //   (variant) => variant.visibility === true
          // );
          // setVariants(filteredVariants);
          setVariants(response.data.variants);
          
        } else {
          setPrice(response.data.price);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
        console.log(product);
      }
    };
    fetchSingleProduct(id);
  }, [id, category]);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <section className="section pt-[115px]">
      <div className="container mx-auto">
        <button
          onClick={handleBackClick}
          className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-all"
        >
          <IoChevronBack className="text-lg" />
          <span>Back</span>
        </button>

        <div className="grid gap-16 mt-8 xl:grid-cols-3 md:grid-cols-5 md:gap-16">
          <section className="order-last md:order-first xl:col-span-2 md:col-span-3">
            <ProductGallery images={galleryImages} />
            <hr className="my-12 border-t border-gray-200" />
            <p className="info text-xl font-bold">Description</p>
            <p className="desc text-base leading-8 max-w-prose">
              <Markdown className="markdown" remarkPlugins={[remarkGfm]}>
                {product.description}
              </Markdown>
            </p>
          </section>

          <section className="content md:sticky md:top-[172px] md:h-screen xl:col-span-1 md:col-span-2 ">
            <div className="flex flex-col gap-8">
              <h2 className="text-4xl leading-relaxed font-semibold">
                {product.name}
              </h2>
              <hr className="border-t border-gray-200" />
              <h5 className="text-2xl text-primary-500">
                Price :{" "}
                <span className="text-golden font-bold text-3xl">{price}</span>
              </h5>
              {/* If product has variants, render variant options */}
              {variants  && variants.length > 0 && (
                <div>
                  <p className="info text-xl font-bold mb-4">Variants :</p>
                  <div className="flex flex-wrap gap-4">
                    {variants.map((variant, index) => (
                      <button
                        key={index}
                        onClick={() => handleVariantSelect(variant)}
                        className={`block w-auto px-4 py-2 border rounded-lg ${
                          selectedVariant?.name === variant.name
                            ? "bg-golden text-white"
                            : "bg-white text-black border-primary-500"
                        } hover:border-golden transition-all`}
                      >
                        {variant.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <p className="info text capitalize grid grid-cols-[125px_1fr] gap-2">
                <span className="font-bold">Availibility: </span>
                {quantity > 0 ? "in stock" : "out of stock"}
              </p>
              <p className="info text capitalize grid grid-cols-[125px_1fr] gap-2">
                <span className="font-bold">SKU: </span>
                {product._id}
              </p>

              <hr className="border-t border-gray-200" />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};
export default ProductDetails;
