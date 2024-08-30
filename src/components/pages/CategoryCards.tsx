import { useNavigate } from "react-router-dom";

const categories = [
  {
    title: "Mountain-Bikes",
    image: "https://images-cdn.ubuy.co.in/64f74323af127836734c1bb7-hiland-2627-5-inch-mountain-bike-shimano.jpg",
  },
  {
    title: "Road-Bikes",
    image: "https://d2d22nphq0yz8t.cloudfront.net/4190f681-07cb-43aa-92d2-6096b01e7b62/https://www.ribblecycles.co.uk/img/705/705/resize/catalog/product/u/l/ultraslr_dura-acedi2_bultslr9200d_hero_1_.png/mxw_640,f_auto",
  },
  {
    title: "Electric-Bikes",
    image: "https://img.etimg.com/thumb/width-640,height-480,imgsize-61724,resizemode-75,msid-83681307/industry/renewables/companies-line-up-affordable-electric-bikes-post-fame-ii-subsidy-hike/ev-two-wheeler.jpg",
  },
  {
    title: "City-Bikes",
    image: "https://files.prokerala.com/bikes/images/photo/full/tvs-star-city-plus-584/tvs-star-city-plus-side-view.jpg",
  },
];

const CategoryCards = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category: string ) => {
    navigate(`/searchByCategory?category=${encodeURIComponent(category)}`);
  };

  return (
    <div className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          Explore Our Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg transition transform hover:scale-105 hover:shadow-xl cursor-pointer"
              onClick={() => handleCategoryClick(category.title)}
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold">
                  {category.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryCards;
