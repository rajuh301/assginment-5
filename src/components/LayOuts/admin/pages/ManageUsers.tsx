import { FaUsers, FaUserEdit, FaUserMinus } from 'react-icons/fa';

const ManageUsers = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center mb-8">Manage Users</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* View All Users Section */}
                <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
                    <FaUsers className="text-5xl text-blue-500 mb-4" />
                    <h2 className="text-xl font-semibold">View All Users</h2>
                    <p className="text-gray-600">See all registered users</p>
                    <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                        View Users
                    </button>
                </div>

                {/* Update User Role Section */}
                <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
                    <FaUserEdit className="text-5xl text-yellow-500 mb-4" />
                    <h2 className="text-xl font-semibold">Update User Role</h2>
                    <p className="text-gray-600">Change user permissions</p>
                    <button className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">
                        Update Role
                    </button>
                </div>

                {/* Delete User Section */}
                <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
                    <FaUserMinus className="text-5xl text-red-500 mb-4" />
                    <h2 className="text-xl font-semibold">Delete User</h2>
                    <p className="text-gray-600">Remove a user from the system</p>
                    <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
                        Delete User
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;
