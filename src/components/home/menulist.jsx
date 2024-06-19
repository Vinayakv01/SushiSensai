import React, { useState } from 'react';
import { FaInfo } from 'react-icons/fa6';
import { RxCross2 } from 'react-icons/rx';
import defaultImage from "../../assets/default.jpg"; // Import the fallback image

const MenuList = ({ menuItems }) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const fallbackImage = defaultImage; // Assign the imported fallback image

    // Handle image error by setting the source to the fallback image
    const handleError = (e) => {
        e.target.onerror = null; // Prevent infinite loop in case fallback image fails
        e.target.src = fallbackImage;
    };

    // Handle opening the modal
    const handleOpenModal = (item) => {
        setSelectedItem(item);
    };

    // Handle closing the modal
    const handleCloseModal = () => {
        setSelectedItem(null);
    };

    return (
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
            {menuItems.map((item, index) => (
                <div key={index} className="bg-[#D2E6C9] rounded-lg shadow-md h-56 flex">
                    <div className="p-4 flex w-full">
                        <img
                            src={item.image || fallbackImage} // Use the fallback image if item.image is not available
                            alt={item.name}
                            onError={handleError} // Attach the onError event handler
                            className="w-1/3 h-full object-contain rounded-md mr-4"
                        />
                        <div className="flex flex-col justify-between w-2/3">
                            <div className="flex justify-between mb-2">
                                <h2 className="text-lg font-bold">{item.name}</h2>
                                <button
                                    className="text-[#387339] hover:text-[#BCE158] bg-[#BCE158] hover:bg-[#387339] transition-colors px-1.5 rounded-full"
                                    onClick={() => handleOpenModal(item)}
                                >
                                    <FaInfo />
                                </button>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{item.description || "No description available"}</p>
                            <p className="text-lg font-semibold text-green-900 mb-2">{item.price} €</p>
                        </div>
                    </div>
                </div>
            ))}
            {selectedItem && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-[#D2E6C9] p-6 rounded-tr-3xl rounded-bl-3xl shadow-lg w-11/12 md:w-3/4 max-w-lg relative">
                        <button
                            className="absolute rounded-full p-1 top-4 right-4 bg-red-600 hover:bg-white text-white hover:text-[#387339] transition-colors"
                            onClick={handleCloseModal}
                        >
                            <RxCross2 size={24} />
                        </button>
                        <h2 className="text-2xl font-bold mb-4">{selectedItem.name}</h2>
                        <img
                            src={selectedItem.image || fallbackImage}
                            alt={selectedItem.name}
                            onError={handleError}
                            className="w-full h-48 object-contain rounded-md mb-4"
                        />
                        <h3 className="text-lg font-semibold mb-2">Allergy Information</h3>
                        <p className="mb-4">
                            {selectedItem.allergy_info.length > 0 ? (
                                selectedItem.allergy_info.map((allergy, index) =>
                                    index === selectedItem.allergy_info.length - 1 ?
                                        allergy.name :
                                        allergy.name + ", "
                                )
                            ) : (
                                <span className="text-gray-600">No allergy information available</span>
                            )}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MenuList;
