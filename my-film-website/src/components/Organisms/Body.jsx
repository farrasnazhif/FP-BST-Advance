import React from "react";
import Carousel from "./Carousel";
import Button from "../Atoms/Button";

const slides = [
  "images/deadpool.jpg",
  "images/borderlands.jpg",
  "images/insideout.jpg",
  "images/despicable.jpg",
]

const Body = () => {
  return (
    <>
      <section className="bg-slate-700 text-white">
        <div className="container grid grid-cols-1 md:grid-cols-2
        min-h-[400px]">
          {/* description */}
          <div className="flex flex-col justify-center
          pt-14 md:py-0 xl:max-w-[500px]">
            <h1 className="text-3xl lg:text-5xl font-bold">
              Welcome
            </h1>
            <p className="text-sm mt-4 mb-4 leading-loose text-white/80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Expedita, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Expedita, voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Expedita, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Expedita, voluptate.
            </p>
          
              <Button >
                <a href="#list">
                View Movies
                </a>
           
              </Button>

            {/* <div className="flex gap-4 mt-4 justify-center"> 
              <AiFillInstagram/>
              <IoLogoWhatsapp/>
              <FaFacebook/>
            </div> */}

          </div>
          {/* image */}
          <div className="flex flex-col justify-end items-center">
            <div className="py-20 mb-8 md:pl-20
            xl:pl-20 
            w-[300px] md:w-[400px] xl:w-[400px]
            justify-self-center">
              <h2 className="text-xl font-semibold flex justify-center mb-4">
                ON TRENDING
              </h2>
              <Carousel>
                {slides.map((slide, id) => (
                  <img key={id} className="w-[300px] 
                   md:w-[400px] xl:w-[500px]" src={slide} />
                ))}
              </Carousel>
            </div>
          </div>
        
        </div>
      </section>
    </>
  );
};

export default Body;