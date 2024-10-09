'use client'
import React, { useState, useRef} from 'react';
import CourseCard from '@/app/dashboard/(components)/CourseCard';
import SearchBar from '@/app/dashboard/(components)/SearchBar';
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";

const MultipleCourses = ({handleStartLearning}) => {
    const [courses] = useState([
        { id: 1, title: 'HTML & CSS', description: 'Build responsive web pages.' },
        { id: 2, title: 'JavaScript Basics', description: 'Fundamentals of JavaScript.' },
        { id: 3, title: 'React for Beginners', description: 'An introduction to React.js.' },
        { id: 4, title: 'Python for Data Science', description: 'Python for ML.' },
        { id: 5, title: 'Fullstack Web Development', description: 'Learn MERN stack.' },
        { id: 6, title: 'Data Structures', description: 'Master data structures in JavaScript.' },
        { id: 7, title: 'GraphQL Basics', description: 'Understand GraphQL and its usage.' },
        { id: 8, title: 'DevOps for Beginners', description: 'Learn DevOps principles.' }
    ]);

    const [recommendedCourses] = useState([
        { id: 9, title: 'Advanced CSS', description: 'Master CSS Grid and Flexbox.' },
        { id: 10, title: 'Node.js Essentials', description: 'Learn back-end development with Node.js.' },
        { id: 11, title: 'Machine Learning with Python', description: 'Explore machine learning algorithms.' }
    ]);

    const [filteredCourses, setFilteredCourses] = useState(courses);
    const [searchNotFound, setSearchNotFound] = useState(false);
    const scrollRef = useRef(null);
   
    const handleSearch = (query) => {
        const filtered = courses.filter(course =>
            course.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredCourses(filtered);
        setSearchNotFound(filtered.length === 0);  
    };

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = scrollRef.current.clientWidth; 
            if (direction === 'left') {
                scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    
    
    return (
        <div className="course-list">
            <SearchBar onSearch={handleSearch} />
            {searchNotFound ? (
                <p className="text-red-500 m-[40px] text-xl font-bold">Course not found</p>
            ) : (
                <div className="relative flex item-center">
                    <button
                        className="absolute flex left-2 bottom-[180px] z-10 bg-gray-100 rounded-full w-15 h-15 flex items-center justify-center p-2"
                        onClick={() => scroll('left')}
                    >
                        <MdOutlineChevronLeft size={50} />
                    </button>
                    
                    <div className="overflow-hidden w-full">
                        <div
                            className="flex gap-1 overflow-x-hidden scroll-smooth"
                            style={{ scrollSnapType: 'x mandatory' }} 
                            ref={scrollRef}
                        >
                        
                            {filteredCourses.map((course) => (
                                <div
                                    key={course.id}
                                    className="flex-shrink-0 w-1/4" 
                                    style={{ scrollSnapAlign: 'start' }} 
                                >
                                    <CourseCard title={course.title} description={course.description} isCurrent={false} onStartLearning={() => handleStartLearning(course.title)}/> 
                                </div>
                            ))}
                        </div>
                    </div>
                    <button
                        className="absolute flex right-3 bottom-[180px] z-10 bg-gray-100 rounded-full w-15 h-15 flex items-center justify-center p-2"
                        onClick={() => scroll('right')}
                    >
                        <MdOutlineChevronRight size={50} />
                        </button>
                </div>
            )}

                       
            <h2 className="font-bold m-[40px] mb-[10px] text-2xl">Recommended Courses</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 m-[10px]">
                {recommendedCourses.map((course) => (
                        <CourseCard key={course.id} title={course.title} description={course.description} />
                ))}
            </div>
        </div>
    );
};

export default MultipleCourses;
