
const Banner2 = () => {
  return (
    <div className="relative bg-[url('https://cdn-fastly.motorcycle.com/media/2024/01/26/19561/2024-cfmoto-800nk-review.jpg?size=720x845&nocrop=1')] bg-cover bg-center h-[400px] md:h-[500px] flex items-center justify-center">
      <div className="bg-black bg-opacity-50 p-6 md:p-12 text-center">
        <h2 className="text-3xl md:text-5xl text-white font-bold">
          Featured Bikes
        </h2>
        <p className="text-white mt-4 md:mt-6">
          Discover our top-rated bikes handpicked just for you!
        </p>
        <button className="mt-6 bg-yellow-500 text-white py-2 px-6 rounded hover:bg-yellow-600">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default Banner2;
