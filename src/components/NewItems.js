import React from "react";
import { newInStore } from "../data";
import NewItemsSlider from "./NewItemsSlider";
import { Link } from "react-router-dom";

const NewItems = () => {
  const { title, subtitle, link, icon } = newInStore;
  // return (
  //   <section className="section container mx-auto">
  //     <div className=" relative lg:py-[50px]">
  //       {/* text */}
  //       <div className="flex lg:gap-5 flex-col items-center lg:items-start">
  //         <h3 className="title lg:max-w-[245px] lg:mb-[50px] ">{title}</h3>
  //         <div className="flex flex-col items-center lg:items-start">
  //           <p className="subtitle lg:max-w-[245px] font-light text-xl text-center lg:text-start">
  //             {subtitle}
  //           </p>
  //           <div className="flex items-center">
  //             <Link
  //               className="font-medium transition-all lg:text-lg
  // 					hover:border-b hover:border-primary lg:items-center "
  //               to="/categories"
  //             >
  //               <span>{link}</span>
  //             </Link>
  //             <div className="text-3xl">{icon}</div>
  //           </div>
  //         </div>
  //       </div>
  //       {/* Slider */}
  //       <div className="lg:container lg:mx-auto lg:max-w-[880px] xl:max-w-[990px] lg:absolute lg:-right-24 lg:top-0 mt-4 lg:mt-0">
  //         <NewItemsSlider />
  //       </div>
  //     </div>
  //   </section>
  // );
  return (
    <section className="section container mx-auto overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 w-full justify-between lg:items-center">
        {/* text */}
        <div className="flex lg:gap-5 flex-col items-center lg:items-start">
          <h3 className="title lg:max-w-[245px] lg:mb-[50px] ">{title}</h3>
          <div className="flex flex-col items-center lg:items-start">
            <p className="subtitle lg:max-w-[245px] font-light text-xl text-center lg:text-start">
              {subtitle}
            </p>
            <div className="flex items-center">
              <Link
                className="font-medium transition-all lg:text-lg 
						hover:border-b hover:border-primary lg:items-center "
                to="/categories"
              >
                <span>{link}</span>
              </Link>
              <div className="text-3xl">{icon}</div>
            </div>
          </div>
        </div>
        {/* Slider */}
        <div className="lg:max-w-[880px] xl:max-w-[990px] mt-4 lg:mt-0">
          <NewItemsSlider />
        </div>
      </div>
    </section>
  );
};

export default NewItems;
