import React, { useState } from 'react';
import { Link as ScrollLink, Events, scrollSpy } from 'react-scroll';

const MenuHeadBar = ({ menuHeads, onMenuHeadClick }) => {
    const [activeCategory, setActiveCategory] = useState(menuHeads[0].category);

    const handleSetActive = (to) => {
        setActiveCategory(to);
    };

    return (
        <nav className="sticky top-0 bg-white py-2 shadow-lg max-w-full z-40">
            <div>
                <ul className="flex justify-center items-center space-x-5">
                    {menuHeads.map((menuHead, index) => (
                        <li
                            key={index}
                            className={`cursor-pointer pt-1 pb-1.5 pl-4 pr-4 rounded-full text-lg transition duration-300 ease-in-out ${activeCategory === menuHead.category ? 'bg-[#D2E7C9] text-black font-bold pt-1 pb-1.5 pl-4 pr-4' : 'bg-[#EFF7E7] hover:bg-[#D2E7C9] pt-1 pb-1.5 pl-4 pr-4'}`}
                        >
                            <ScrollLink
                                to={menuHead.category}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onSetActive={handleSetActive}
                                onClick={() => onMenuHeadClick(menuHead)}
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
