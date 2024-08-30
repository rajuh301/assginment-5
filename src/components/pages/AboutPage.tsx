import Navbar from './Navbar';

const AboutPage = () => {
    return (
        <div>
<Navbar/>
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center mb-8">About Us</h1>

            {/* Introduction Section */}
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
                <p className="text-gray-600">
                    Welcome to BikeShop! We are a passionate team dedicated to providing the best bikes for your adventures. Whether you're an experienced rider or just starting out, we have the perfect bike for you. Our mission is to inspire a love of cycling by offering top-quality bikes and exceptional customer service.
                </p>
            </div>

            {/* Mission, Vision, and Values Section */}
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                    <p className="text-gray-600">
                        To provide high-quality bikes and gear that enhance the cycling experience for all types of riders.
                    </p>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                    <p className="text-gray-600">
                        To become a leader in the cycling industry by consistently innovating and exceeding customer expectations.
                    </p>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                    <p className="text-gray-600">
                        Integrity, customer satisfaction, and a commitment to promoting a healthy and active lifestyle.
                    </p>
                </div>
            </div>

            {/* Team Section */}
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Team Member 1 */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Team Member 1"
                            className="rounded-full w-32 h-32 mb-4"
                        />
                        <h3 className="text-xl font-semibold">John Doe</h3>
                        <p className="text-gray-600">Founder & CEO</p>
                    </div>

                    {/* Team Member 2 */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Team Member 2"
                            className="rounded-full w-32 h-32 mb-4"
                        />
                        <h3 className="text-xl font-semibold">Jane Smith</h3>
                        <p className="text-gray-600">Chief Marketing Officer</p>
                    </div>

                    {/* Team Member 3 */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Team Member 3"
                            className="rounded-full w-32 h-32 mb-4"
                        />
                        <h3 className="text-xl font-semibold">Mike Johnson</h3>
                        <p className="text-gray-600">Head of Operations</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AboutPage;
