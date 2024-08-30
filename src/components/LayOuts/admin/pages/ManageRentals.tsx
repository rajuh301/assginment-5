import { FaEye, FaUndoAlt, FaHistory } from 'react-icons/fa';

const ManageRentals = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center mb-8">Manage Rentals</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* View All Rentals Section */}
                <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
                    <FaEye className="text-5xl text-blue-500 mb-4" />
                    <h2 className="text-xl font-semibold">View All Rentals</h2>
                    <p className="text-gray-600">Check all current bike rentals</p>
                    <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                        View Rentals
                    </button>
                </div>

                {/* Return Bike Section */}
                <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
                    <FaUndoAlt className="text-5xl text-green-500 mb-4" />
                    <h2 className="text-xl font-semibold">Return Bike</h2>
                    <p className="text-gray-600">Process a bike return</p>
                    <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
                        Return Bike
                    </button>
                </div>

                {/* Manage Rental History Section */}
                <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
                    <FaHistory className="text-5xl text-orange-500 mb-4" />
                    <h2 className="text-xl font-semibold">Rental History</h2>
                    <p className="text-gray-600">View and manage past rentals</p>
                    <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
                        Rental History
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ManageRentals;
