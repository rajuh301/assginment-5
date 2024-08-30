import Banner1 from "./Banner1";
import Banner2 from "./Banner2";
import Banner3 from "./Banner3";
import Banner4 from "./Banner4";
import CategoryCards from "./CategoryCards";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ShowBike from "./ShowBike";


const HomePage = () => {
  return (
    <div className="max-w-[1440px] mx-auto w-full">
      <Navbar />
      <Banner1 />
      {/* -------------- */}
      <CategoryCards/>
      <Banner3 />
      <ShowBike />
      <Banner2 />
      <Banner4 />
      {/* -------------- */}
      <Footer />
    </div>
  );
};

export default HomePage;
