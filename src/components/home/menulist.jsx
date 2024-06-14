import React from 'react';
import defaultImage from "../../assets/default.jpg"; // Import the fallback image

const MenuList = ({ menuItems }) => {
    const fallbackImage = defaultImage; // Assign the imported fallback image

    // Handle image error by setting the source to the fallback image
    const handleError = (e) => {
        e.target.onerror = null; // Prevent infinite loop in case fallback image fails
        e.target.src = fallbackImage;
    };

    return (
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {menuItems.map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                    <img
                        src={item.image || fallbackImage} // Use the fallback image if item.image is not available
                        alt={item.name}
                        onError={handleError} // Attach the onError event handler
                        className="w-full h-32 object-cover rounded-md mb-4"
                    />
                    <h2 className="text-lg font-bold mb-2">{item.name}</h2>
                    <p className="text-sm text-gray-600 mb-2">{item.description || "No description available"}</p>
                    <p className="text-lg font-semibold text-green-500">Price: ${item.price}</p>
                </div>
            ))}
        </div>
    );
};

export default MenuList;
