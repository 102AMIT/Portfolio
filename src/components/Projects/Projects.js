import React from 'react'
import Title from '../Home/Title'
import ProjectCard from './ProjectCard'
import {
  FoodMealApp,
  BlogApp,
  MusicPlayer,
  OTPLoginApp,
  VideoApp,
  CSVparser,
} from "../../assets/projectsImage/index.js"

const Projects = () => {
  return (
    
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className='w-full grid grid-cols-2 gap-10'>
        <div className='px-6'>
          <ProjectCard 
            title= "Food Meal App"
            category = "Website"
            image = {FoodMealApp}
          />
          <ProjectCard 
            title= "Music Player App"
            category = "Website"
            image = {MusicPlayer}
          />
          <ProjectCard 
            title= "My Blog App"
            category = "Blog Sharing Website"
            image = {BlogApp}
          />
        </div>
        
      <div className='px-6'>
          <ProjectCard 
            title= "My Video App"
            category = "Website"
            image = {VideoApp}
          />
          <ProjectCard 
            title= "CSV Parser"
            category = "Website"
            image = {CSVparser}
          />
 
          <ProjectCard 
            title= "OTP Login App"
            category = "Website"
            image = {OTPLoginApp}
          />
        </div>
      </div>
      <Title title="And many" subTitle="More .......!" />
    </div>
  )
}

export default Projects