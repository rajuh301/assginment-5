
const Banner3 = () => {
  return (
    <div className="relative bg-[url('https://www.cycleworld.com/resizer/iSfYUxDDdNa6rGX-e1wx1rU-pfE=/616x0/filters:focal(516x428:526x438)/cloudfront-us-east-1.images.arcpublishing.com/octane/UBJUFWEFDBCJPNWXXOZOUIUZLM.jpg')] bg-cover bg-center h-[400px] md:h-[500px] flex items-center justify-center">
      <div className="bg-blue-900 bg-opacity-60 p-6 md:p-12 text-center">
        <h2 className="text-3xl md:text-5xl text-white font-bold">
          Summer Sale: 30% Off All Rentals!
        </h2>
        <p className="text-white mt-4 md:mt-6">
          Rent your favorite bike today and enjoy exclusive discounts.
        </p>
        <button className="mt-6 bg-red-500 text-white py-2 px-6 rounded hover:bg-red-600">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Banner3;
