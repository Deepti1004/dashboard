"use client"
import { useEffect } from "react"
import React from 'react'
import { Progress } from "@/components/ui/progress"


const LearningPath = ({title, description, progressValue}) => {

  return (
    <div>
        <h2 className="m-[40px] mt-[10px] text-2xl font-bold">Learning Path</h2>
    
        <div className="card relative w-[250px] m-[40px] h-[320px] mt-[20px] rounded-2xl border-3 border-white shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:border-blue-300 focus-within:border-blue">
            <div className="card-content p-[20px] border-2 h-full flex flex-col items-center mb-[10px] rounded-2xl">
                <img
                    src={"/assets/courseimg.png"}
                    alt={title}
                    className="card-image w-[250px] h-[150px] mb-[20px] object-cover rounded-t-lg"
                />
                <h2 className="card-title text-center font-bold text-1xl">{title}</h2>
                <p className="card-description text-center text-sm ">{description}</p>
                
                <div className="flex items-center justify-center w-full mt-[10px]">
                    <Progress value={progressValue} className="w-[150px]" />
                    <span className="ml-[10px] text-sm font-medium">{progressValue}%</span>
                </div>
            </div>
        </div>
    </div>
    )
}

export default LearningPath;