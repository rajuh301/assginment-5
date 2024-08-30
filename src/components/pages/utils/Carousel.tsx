import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

const HomeCarousel = () => {
  // Data array for dynamic content
  const slides = [
    {
      imgSrc: "https://media.istockphoto.com/id/811967874/photo/couple-biker-riding-motorcycle.jpg?s=612x612&w=0&k=20&c=swbgNFkDbdj7RLr_kwm_j5F8gg26BQxvwaegWld6vtY=",
      caption: "Up to 10% off",
      linkText: "Explore",
      link: "/",
    },
    {
      imgSrc: "https://www.shutterstock.com/image-photo/man-motorcyclist-watching-valley-hill-600nw-2005361438.jpg",
      caption: "Up to 20% off",
      linkText: "Explore",
      link: "/shop",
    },
    {
      imgSrc: "https://imgeng.jagran.com/images/2022/oct/bike%20riding%20accessories1666954327916.jpg",
      caption: "Up to 6% off",
      linkText: "Explore",
      link: "/offer",
    },
    {
      imgSrc: "https://media.istockphoto.com/id/1521855861/video/low-angle-tracking-shot-of-a-man-driving-a-motorcycle-through-a-country-road.jpg?b=1&s=640x640&k=20&c=O-qgnNuWSMdUVIv2nw-Su2GpWx8yZmCBuUyefe5yKpM=",
      caption: "Up to 10% off",
      linkText: "Explore",
      link: "/offer",
    },
  ];

  return (
    <div className=" mx-auto">
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        showArrows={true}
        showStatus={false}
        autoPlay={true}
        interval={4000}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img
              className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover md:w-3/4 lg:w-full"
              src={slide.imgSrc}
              alt={`Slide ${index + 1}`}
            />
            <div className="absolute top-1/4 left-4 md:left-10 lg:left-20 text-white">
              <p className="text-sm md:text-2xl lg:text-4xl my-2 md:my-4 bg-black opacity-60 rounded p-1">{slide.caption}</p>
              <Link to={slide.link}>
                <p className="text-xs md:text-lg lg:text-xl  bg-yellow-700 opacity-60 rounded py-1 font-bold">{slide.linkText}</p>
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
