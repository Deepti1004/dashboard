"use client"
import React from 'react'


const CourseCard = ({title, description, isCurrent, onContinue, onStartLearning}) => {
  return (
    <div className="card relative w-[250px] m-[40px] h-[320px] mt-[20px] rounded-2xl border-2 border-white shadow-lg hover:shadow-2xl transition-shadow duration-400 hover:border-blue-300 focus-within:border-blue">
        <div className="card-content p-[20px] border-2 h-full flex flex-col items-center mb-[10px] rounded-2xl ">
        <img
            src={"/assets/courseimg.png"}
            alt={title}
            className="card-image w-[250px] h-[150px] mb-[20px] object-cover rounded-t-lg"
        />
            <h2 className="card-title text-center font-bold text-1xl">{title}</h2>
            <p className="card-description text-center text-sm ">{description}</p>

            {isCurrent ? (
          <button 
            className="mt-[10px] bg-black text-white px-[20px] py-[5px] rounded-md hover:bg-gray-500 transition-colors duration-200 text-lg"
            onClick={onContinue}
          >
            Continue
          </button>
        ) : (
          <button 
            className="mt-[10px] bg-black text-white px-[15px] py-[5px] rounded-md hover:bg-gray-500 transition-colors duration-200 text-lg"
            onClick={onStartLearning}
          >
            Start Learning
          </button>
        )}
        </div>
    </div>   
  )
}

export default CourseCard;
