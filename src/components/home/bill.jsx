import React from 'react';

const Bill = ({ subtotal = 0, minOrder = 0, travelCosts = 0, directionsFree = 0, discount = 0, vat07 = 0, vat19 = 0, total = 0, isLoggedIn = false }) => {
    return (
        <div className='sticky top-20 mt-12 '>
            <h2 className=" p-3 text-white text-xl text-center font-semibold rounded-tl-xl  bg-[#367236] ">Order Overview</h2>
            <div className="bg-[#D2E6C9] rounded-br-xl p-4  shadow-md">

                <div className="flex justify-between mb-2">
                    <span>Subtotal</span>
                    <span>€ {subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between mb-2">
                    <span>Min. Order+</span>
                    <span>€ {minOrder.toFixed(2)}</span>
                </div>

                <div className="flex justify-between mb-2">
                    <span>Travel Costs+</span>
                    <span>€ {travelCosts.toFixed(2)}</span>
                </div>

                <div className="flex justify-between mb-2">
                    <span>Directions free from-</span>
                    <span>€ {directionsFree.toFixed(2)}</span>
                </div>

                <div className="flex justify-between mb-2">
                    <span>Discount 20%-</span>
                    <span>€ {discount.toFixed(2)}</span>
                </div>

                <div className="flex justify-between mb-2">
                    <span>VAT 07%+</span>
                    <span>€ {vat07.toFixed(2)}</span>
                </div>

                <div className="flex justify-between mb-2">
                    <span>VAT 19%+</span>
                    <span>€ {vat19.toFixed(2)}</span>
                </div>

                <div className="border-t border-gray-300 mt-4 mb-2"></div>

                <div className="flex justify-between mb-2 font-semibold">
                    <span>Total</span>
                    <span>€ {total.toFixed(2)}</span>
                </div>

                <div></div>
                <div className="flex justify-center mt-4">
                    <button className="w-full text-xl bg-gradient-to-r from-[#BCE158] to-[#387339] hover:from-[#387339] hover:to-[#BCE158] text-white font-semibold py-2 px-4 rounded-tl-xl rounded-br-xl transition duration-400 ease-in-out">
                        Order
                    </button>
                </div>

            </div>

        </div>

    );
};

export default Bill;
