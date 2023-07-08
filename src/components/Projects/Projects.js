import React from 'react'
import Title from '../Home/Title'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    
    <div >
      <Title title="Recent" subTitle="Projects" />
      <div className='w-full grid-col-2 gap-10'>
        <div className='px-6'>
          <ProjectCard 
            title= "Project 1"
            category = "Website"
            image = {"put your image here"}
          />
        </div>
      </div>
    </div>
  )
}

export default Projects