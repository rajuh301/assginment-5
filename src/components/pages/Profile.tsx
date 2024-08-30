import {  FaUserEdit } from 'react-icons/fa';
import { FaBoxesPacking } from 'react-icons/fa6';

const Profile = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center mb-8">Manage Users</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* View All Users Section */}
                <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
                    <FaBoxesPacking className="text-5xl text-blue-500 mb-4" />
                    <h2 className="text-xl font-semibold">My Bookings</h2>
                    <p className="text-gray-600">See all bookings</p>
                    <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                        View My bookings
                    </button>
                </div>
                {/* Update User Role Section */}
                <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
                    <FaUserEdit className="text-5xl text-yellow-500 mb-4" />
                    <h2 className="text-xl font-semibold">Update User Info</h2>
                    <p className="text-gray-600">Change user information </p>
                    <button className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">
                        Update User
                    </button>
                </div>

                

            </div>
        </div>
    );
};

export default Profile;