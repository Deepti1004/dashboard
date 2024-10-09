"use client"

import CourseCard  from '@/app/dashboard/(components)/CourseCard';
import SearchBar from '@/app/dashboard/(components)/SearchBar';
import MultipleCourses from '@/app/dashboard/(components)/MultipleCourses';
import LearningPath from './(components)/LearningPath';
import { Progress } from "@/components/ui/progress"

const Page = async() => {
  
  const currentCourse = {
    title: 'React for Beginners',
    description: 'An introduction to React.js fundamentals, JSX, components, and state.',
    progress: 30,
  };

  const handleContinue = () => {
    alert("Continue button clicked!");
  };

  const handleStartLearning = (courseTitle) => {
    alert(`Starting ${courseTitle}`);
  };


  return (
      <div>
        <div className="mt-[10px]">
            <h2 className="card-content text-left font-bold text-2xl m-[40px] mb-[10px] ">Continue Learning</h2>
          <CourseCard 
            title={currentCourse.title}
            description={currentCourse.description}
            onContinue={handleContinue}
            isCurrent={true}               
          />
        </div>
        <MultipleCourses handleStartLearning={handleStartLearning}/>

        <LearningPath
        title={currentCourse.title}
        description={currentCourse.description}
        progressValue={currentCourse.progress}
        />    
      </div>

    
  )
}

export default Page;