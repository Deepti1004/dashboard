'use client'
import React, { useState } from "react";
import CourseCard from "@/app/dashboard/(components)/CourseCard";
import { IoIosSearch } from "react-icons/io";

const SearchBar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        if (onSearch) {
            onSearch(searchQuery);
        }
    };

    return (
        <div>
            <h2 className="font-bold text-center m-[40px] mb-[10px] text-2xl">All Courses</h2>
            <div className="relative flex justify-center text-center m-[40px] mt-[10px] mb-[20px]">               
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search courses"
                    className="border-2 p-2 rounded-l-lg focus:outline-none w-[500px] justify-center"
                />
                <button
                    onClick={handleSearch}
                    className="bg-blue-700 text-white px-4 py-3 rounded-r-lg flex items-center">
                    
                    <IoIosSearch className="text-white "/> {/* Search icon */}

                </button>
            </div>
        </div>
    );
};

export default SearchBar;