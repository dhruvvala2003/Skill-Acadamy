import React from 'react'
import SideBar from '../components/SideBar'
import AddCourse from '../components/AddCourse'

const AddCoursePage = () => {
  return (
    <div className='bg-gradient-to-r from-sky-900 via-teal-700 to-sky-900 w-screen h-screen flex font-medium items-center justify-center'>
        
        <SideBar/>
        <div className='w-auto p-10 shadow-lg bg-black bg-opacity-50 backdrop-blur-lg'><AddCourse/></div>
        
    </div>
  )
}

export default AddCoursePage