import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const MenuHeadBar = ({ menuHeads, onMenuHeadClick }) => {
    return (
        <nav className="bg-white py-2 shadow-lg max-w-full">
            <div>
                <ul className=" flex justify-center items-center space-x-5">
                    {menuHeads.map((menuHead, index) => (
                        <li
                            key={index}
                            className="text-black cursor-pointer pt-1 pb-1.5 pl-4 pr-4 rounded-full text-lg bg-[#EFF7E7] hover:bg-[#D2E7C9] transition duration-300 ease-in-out space"
                        >
                            <ScrollLink
                                to={menuHead.category}
                                spy={true}
                                smooth={true}
                                offset={-70} // Adjust offset to align content properly
                                duration={500}
                                onClick={() => onMenuHeadClick(menuHead)} // Update state for active menu head
                            >
                                {menuHead.category}
                            </ScrollLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default MenuHeadBar;
