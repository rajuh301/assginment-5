import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Navbar from './Navbar';

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 ">
            <Navbar/>
            <h1 className="text-3xl font-bold text-center mb-8 mt-10">Contact Us</h1>

            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Contact Information */}
                    <div className="p-6">
                        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                        <p className="text-gray-600 mb-8">
                            If you have any questions or need further information, feel free to contact us.
                        </p>

                        <div className="flex items-center mb-4">
                            <FaPhoneAlt className="text-green-500 text-xl mr-3" />
                            <span className="text-gray-800">+1 234 567 890</span>
                        </div>

                        <div className="flex items-center mb-4">
                            <FaEnvelope className="text-blue-500 text-xl mr-3" />
                            <span className="text-gray-800">contact@bikeshop.com</span>
                        </div>

                        <div className="flex items-center">
                            <FaMapMarkerAlt className="text-red-500 text-xl mr-3" />
                            <span className="text-gray-800">123 Bike Lane, Motor City, USA</span>
                        </div>
                    </div>

                    {/* Google Map */}
                    <div className="h-64 md:h-auto">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093745!2d144.9537363153188!3d-37.81627917975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577e4b0f2a2e345!2sFlinders%20St%20Station%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1603107379599!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            loading="lazy"
                            title="Google Map"
                            className="w-full h-full border-0"
                        ></iframe>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg mt-8 p-6">
                <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="input input-bordered w-full"
                        required
                    />
                    <textarea
                        placeholder="Your Message"
                        className="textarea textarea-bordered w-full"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
