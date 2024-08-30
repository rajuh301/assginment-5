import { FaBicycle, FaUsers, FaClipboardList, FaChartLine, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center mb-8">BikeHat Admin Dashboard</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Bikes Management Section */}
                <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
                    <FaBicycle className="text-5xl text-blue-500 mb-4" />
                    <h2 className="text-xl font-semibold">Manage Bikes</h2>
                    <p className="text-gray-600">Create, update, and delete bikes</p>
                    <Link to='/admin/bikes' className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                        Manage Bikes
                    </Link>
                </div>

                {/* Rentals Management Section */}
                <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
                    <FaClipboardList className="text-5xl text-green-500 mb-4" />
                    <h2 className="text-xl font-semibold">Manage Rentals</h2>
                    <p className="text-gray-600">View and manage bike rentals</p>
                    <Link to='/admin/rentals' className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
                        Manage Rentals
                    </Link>
                </div>

                {/* Users Management Section */}
                <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
                    <FaUsers className="text-5xl text-purple-500 mb-4" />
                    <h2 className="text-xl font-semibold">Manage Users</h2>
                    <p className="text-gray-600">Manage user accounts and roles</p>
                    <Link to='/admin/users' className="mt-4 bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600">
                        Manage Users
                    </Link>
                </div>
                
                {/* Analytics Section */}
                <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
                    <FaChartLine className="text-5xl text-red-500 mb-4" />
                    <h2 className="text-xl font-semibold">Analytics</h2>
                    <p className="text-gray-600">View rental and revenue statistics</p>
                    <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
                        View Analytics
                    </button>
                </div>
                
                {/* Settings Section */}
                <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
                    <FaCog className="text-5xl text-yellow-500 mb-4" />
                    <h2 className="text-xl font-semibold">Settings</h2>
                    <p className="text-gray-600">Configure system settings</p>
                    <button className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">
                        Manage Settings
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
