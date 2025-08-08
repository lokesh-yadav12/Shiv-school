import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../images/image7.webp";
import img2 from "../images/image2.webp";
import img3 from "../images/image3.webp";
import img4 from "../images/image4.webp";
import img5 from "../images/image5.webp";
import img6 from "../images/image6.webp";
const images = [img1, img2, img3, img4, img5, img6];

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="py-12 bg-gray-500 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl text-center font-bold mb-6 text-white">
          Shiv School Gallery
        </h2>
        <Slider {...settings}>
          {images.map((src, i) => (
            <div key={i} className="p-2 sm:p-3">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src={src}
                  alt={`gallery-${i}`}
                  className="w-full h-40 sm:h-56 md:h-64 object-cover"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;
