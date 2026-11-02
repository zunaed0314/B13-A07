import React from 'react';
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
    return (
        <div className='flex flex-col justify-center items-center bg-green-950 w-full space-y-5 mt-8 p-4 md:px-10 lg:px-15 '>
            <p className='flex gap-0 text-4xl md:text-6xl text-white mt-13'>
                <span className='font-bold'>Keen</span>
                <span className='font-semibold'>Keeper</span>
            </p>
            <p className='text-gray-400 text-center'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            <p className='text-white text-3xl font-semibold'>Social Links</p>
            <div className='flex gap-4'>
                
                <div className='size-7 bg-white flex justify-center items-center rounded-full'>
                    <AiFillInstagram />
                </div>
                <div className='size-7 bg-white flex justify-center items-center rounded-full'>
                    <FaFacebookSquare />
                </div>
                <div className='size-7 bg-white flex justify-center items-center rounded-full'>
                    <BsTwitterX />
                </div>
            </div>
            <hr className="w-7/8 md:w-7/7 lg:7/8 border-gray-600" />
            <div className='flex flex-col lg:flex-row justify-center md:justify-between w-7/8 md:w-7/7 lg:7/8 mb-10 gap-4 md:gap-6'>
                <p className='text-gray-400 text-center lg:text-start'>© 2026 KeenKeeper. All rights reserved.</p>
                <div className='flex  gap-12 md:gap-10 lg:gap-18 justify-center items-center'>
                    <p className='text-gray-400'>Privacy policy</p>
                    <p className='text-gray-400'>Terms of service</p>
                    <p className='text-gray-400'>Cookies</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;