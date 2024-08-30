
const Footer = () => {
    return (
        <div>
           <footer className="bg-black text-white py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    {/* Exclusive */}
                    <div className="mb-8 sm:mb-0">
                        <h4 className="font-semibold text-lg mb-4">BikeHat</h4>
                        <p className="mb-2">Subscribe</p>
                        <p className="mb-4 text-gray-400">Get 10% off your first order</p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="p-2 rounded-l bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
                            />
                            <button className="p-2 bg-gray-600 rounded-r hover:bg-gray-700">
                                &gt;
                            </button>
                        </div>
                    </div>

                    {/* Support */}
                    <div className="mb-8 sm:mb-0">
                        <h4 className="font-semibold text-lg mb-4">Support</h4>
                        <p className="mb-2 text-gray-400">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                        <p className="mb-2 text-gray-400">exclusive@gmail.com</p>
                        <p className="text-gray-400">+88015-88888-9999</p>
                    </div>

                    {/* Account */}
                    <div className="mb-8 sm:mb-0">
                        <h4 className="font-semibold text-lg mb-4">Account</h4>
                        <ul>
                            <li className="mb-2"><a href="#" className="hover:underline text-gray-400">My Account</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline text-gray-400">Login / Register</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline text-gray-400">Cart</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline text-gray-400">Wishlist</a></li>
                            <li><a href="#" className="hover:underline text-gray-400">Shop</a></li>
                        </ul>
                    </div>

                    {/* Quick Link */}
                    <div className="mb-8 sm:mb-0">
                        <h4 className="font-semibold text-lg mb-4">Quick Link</h4>
                        <ul>
                            <li className="mb-2"><a href="#" className="hover:underline text-gray-400">Privacy Policy</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline text-gray-400">Terms Of Use</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline text-gray-400">FAQ</a></li>
                            <li><a href="#" className="hover:underline text-gray-400">Contact</a></li>
                        </ul>
                    </div>

                    {/* Download App */}
                    <div className="lg:col-span-1">
                        <h4 className="font-semibold text-lg mb-4">Download App</h4>
                        <p className="mb-4 text-gray-400">Save $3 with App New User Only</p>
                        <div className="flex items-center gap-4 mb-4">
                            <img
                                src="path/to/qr-code.png" // Replace with actual QR code image
                                alt="QR Code"
                                className="w-16 h-16"
                            />
                            <div className="flex flex-col">
                                <a href="#" className="mb-2"><img src="path/to/google-play-badge.png" alt="Google Play" /></a>
                                <a href="#"><img src="path/to/app-store-badge.png" alt="App Store" /></a>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-gray-400"><i className="fab fa-facebook"></i></a>
                            <a href="#" className="hover:text-gray-400"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="hover:text-gray-400"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="hover:text-gray-400"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center text-gray-500">
                    © Copyright Rimel 2022. All rights reserved.
                </div>
            </div>
        </footer>
        </div>
    );
};

export default Footer;