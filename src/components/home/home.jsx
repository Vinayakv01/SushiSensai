import React, { useState, useRef } from 'react';
import Banner from './banner';
import MenuHeadBar from './menuheadbar';
import MenuList from './menulist';
import menuData from '../../data/menuData.json';

function Home() {
    const menuHeads = menuData.MenuItem.MenuHead;
    const [activeMenuHead, setActiveMenuHead] = useState(menuData.MenuItem.MenuHead[0]);
    const menuListRef = useRef(null);

    // Retrieve all menu items from the JSON data
    const menuItems = menuData.MenuItem.MenuHead.reduce((acc, head) => {
        return acc.concat(head.category_products);
    }, []);

    // Click handler for menu head navigation
    const handleMenuHeadClick = (menuHead) => {
        setActiveMenuHead(menuHead); // Update state to reflect the selected menu head
        // Scroll to the respective section of the menu list
        const menuHeadElement = document.getElementById(menuHead.category);
        if (menuHeadElement) {
            menuHeadElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="">
            <Banner />
            <MenuHeadBar menuHeads={menuHeads} onMenuHeadClick={handleMenuHeadClick} className="" />
            <div className="flex-grow" ref={menuListRef}>
                <h1 className="text-2xl font-bold mb-4">Full Menu</h1>
                {menuHeads.map((head, index) => (
                    <div id={head.category} key={index}>
                        <h2 className="text-xl font-semibold mb-2">{head.category}</h2>
                        <MenuList menuItems={head.category_products} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
