import { useState } from 'react';
import { FaPlusCircle, FaEdit, FaTrashAlt } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { useCreateBikeMutation } from '../../../../redux/features/bikes/bikeApi';
import axios from 'axios';
import { toast } from 'sonner';

const ManageBikes = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { register, handleSubmit, reset } = useForm();

    const [createBike] = useCreateBikeMutation(undefined)

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        reset();
    };

    const onSubmit = async (data: any) => {
        try {
            const formData = new FormData();
            formData.append('image', data.image[0]);
        
            const imgBBResponse = await axios.post(
                `https://api.imgbb.com/1/upload?key=6f87abdac0fb402333249a265cb47024`,
                formData
            );

            if (imgBBResponse.data.success) {
                const imageUrl = imgBBResponse.data.data.url;

                const bikeData = {
                    ...data,
                    image: imageUrl,
                };

                createBike(bikeData);
                toast.success('Bike added successfully', { duration: 2000 });


                handleModalClose();
            } else {
                console.error('Image upload failed');
            }
        } catch (error) {
            console.error('Error uploading image or creating bike:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center mb-8">Manage Bikes</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Add Bike Section */}
                <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
                    <FaPlusCircle className="text-5xl text-green-500 mb-4" />
                    <h2 className="text-xl font-semibold">Add Bike</h2>
                    <p className="text-gray-600">Add a new bike to the inventory</p>
                    <button
                        className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                        onClick={handleModalOpen}
                    >
                        Add Bike
                    </button>
                </div>

                {/* Update Bike Section */}
                <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
                    <FaEdit className="text-5xl text-blue-500 mb-4" />
                    <h2 className="text-xl font-semibold">Update Bike</h2>
                    <p className="text-gray-600">Modify bike details</p>
                    <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                        Update Bike
                    </button>
                </div>

                {/* Delete Bike Section */}
                <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
                    <FaTrashAlt className="text-5xl text-red-500 mb-4" />
                    <h2 className="text-xl font-semibold">Delete Bike</h2>
                    <p className="text-gray-600">Remove a bike from the inventory</p>
                    <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
                        Delete Bike
                    </button>
                </div>
            </div>

            {/* Add Bike Modal */}
            {isModalOpen && (
                <div className="modal modal-open">
                    <div className="modal-box relative">
                        <button
                            className="btn btn-sm btn-circle absolute right-2 top-2"
                            onClick={handleModalClose}
                        >
                            ✕
                        </button>
                        <h3 className="text-lg font-bold mb-4">Add a New Bike</h3>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <input
                                type="text"
                                placeholder="Bike Name"
                                {...register('name', { required: true })}
                                className="input input-bordered w-full"
                            />
                            <select
                                {...register('category', { required: true })}
                                className="input input-bordered w-full"
                            >
                                <option value="" disabled selected>
                                    Select Bike Category
                                </option>
                                <option value="Mountain Bikes">Mountain Bikes</option>
                                <option value="Road Bikes">Road Bikes</option>
                                <option value="Electric Bikes">Electric Bikes</option>
                                <option value="City Bikes">City Bikes</option>
                            </select>

                            <input
                                type="text"
                                placeholder="Description"
                                {...register('description', { required: true })}
                                className="input input-bordered w-full"
                            />
                            <input
                                type="number"
                                placeholder="Price Per Hour"
                                {...register('pricePerHour', { required: true })}
                                className="input input-bordered w-full"
                            />
                            <input
                                type="number"
                                placeholder="CC"
                                {...register('cc', { required: true })}
                                className="input input-bordered w-full"
                            />
                            <input
                                type="number"
                                placeholder="Year"
                                {...register('year', { required: true })}
                                className="input input-bordered w-full"
                            />
                            <input
                                type="text"
                                placeholder="Model"
                                {...register('model', { required: true })}
                                className="input input-bordered w-full"
                            />
                            <input
                                type="text"
                                placeholder="Brand"
                                {...register('brand', { required: true })}
                                className="input input-bordered w-full"
                            />

                            <input
                                type="file"
                                placeholder="Image"
                                {...register('image', { required: true })}
                                className="input input-bordered w-full"
                            />

                            <div className="modal-action">
                                <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageBikes;
