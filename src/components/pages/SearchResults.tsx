import React from 'react';
import { useLocation } from 'react-router-dom';
import { Bike } from '../types/bike.type';
import {
    
    FaCalendarAlt,
    FaCheckCircle,
    FaTimesCircle,
    FaDollarSign,
    FaInfoCircle,
    FaCogs,
    FaIndustry,
} from 'react-icons/fa';
import { useGetSearchBikeQuery } from '../../redux/features/bikes/bikeApi';
import Navbar from './Navbar';

const SearchResults: React.FC = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query');
    const { data, isLoading, isFetching, error } = useGetSearchBikeQuery(query || '');

    if (isLoading || isFetching) {
        return <p className="text-center text-gray-600">Loading search results...</p>;
    }

    if (error) {
        return <p className="text-center text-red-600">Failed to load search results. Please try again later.</p>;
    }

    function handleSubmit(_id: string) {
        throw new Error('Function not implemented.');
    }

    return (
        <div>
<Navbar/>
<div className="p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data?.data?.map((bike: Bike) => (
                    <div key={bike._id} className="relative bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                        {/* Bike Image */}
                        <img
                            src={bike.image}
                            alt={bike.model}
                            className="w-full h-48 object-cover"
                        />

                        {/* Overlay Content */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75 text-white p-4 flex flex-col justify-end bg-black">
                            <h2 className="text-2xl font-bold mb-2">
                                {bike.name}
                            </h2>
                            <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                                <div className="flex items-center">
                                    <FaIndustry className="mr-2" /> {bike.brand}
                                </div>
                                <div className="flex items-center">
                                    <FaCogs className="mr-2" /> {bike.model}
                                </div>
                                <div className="flex items-center">
                                    <FaInfoCircle className="mr-2" /> {bike.cc} CC
                                </div>
                                <div className="flex items-center">
                                    <FaCalendarAlt className="mr-2" /> {bike.year}
                                </div>
                                <div className="flex items-center">
                                    {bike.isAvailable ? (
                                        <>
                                            <FaCheckCircle className="mr-2 text-green-500" /> Available
                                        </>
                                    ) : (
                                        <>
                                            <FaTimesCircle className="mr-2 text-red-500" /> Not Available
                                        </>
                                    )}
                                </div>
                                <div className="flex items-center">
                                    <FaDollarSign className="mr-2" /> ${bike.pricePerHour}/hour
                                </div>
                            </div>
                            <button
                          onClick={() => (document.getElementById('my_modal_3') as HTMLDialogElement)?.showModal()}

                                className={`py-2 px-4 font-semibold rounded-lg focus:outline-none transition-colors duration-300 ${
                                    bike.isAvailable
                                        ? 'bg-yellow-500 text-black hover:bg-yellow-600'
                                        : 'bg-gray-400 text-gray-700 cursor-not-allowed'
                                }`}
                                disabled={!bike.isAvailable}
                            >
                                Rent Now
                            </button>
                        </div>

                        {/* Modal */}
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <h3 className="font-bold text-lg">Rent {bike.name}</h3>
                                <p className="py-4">Are you sure you want to rent this bike?</p>
                                <button
                                    className="border rounded-lg shadow p-2 hover:text-white hover:bg-green-500"
                                    onClick={() => handleSubmit(bike._id)}
                                >
                                    Confirm
                                </button>
                            </div>
                        </dialog>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default SearchResults;
