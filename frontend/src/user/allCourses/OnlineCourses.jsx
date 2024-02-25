import React from 'react'
import { online } from '../../dummydata'
// import Heading from "../common/heading/Heading"

// const OnlineCourses = () => {
//   return (
//     <>
//         <section className='online'>
//             <div className='container1'>
//                 {/* <Heading subtitle='COURSES' title='Browse Our Online Courses' /> */}
//                 <div className="content grid3">
//                     {online.map((val) => (
//                         <div className='box' key={val.id}>
//                             <div className='img'>
//                             <img src={val.cover} alt=''/>
//                             <img src={val.hoverCover} alt='' className='show'/>
//                             </div>
//                             <h1>{val.courseName}</h1>
//                             <span>{val.course}</span>
//                         </div>

//                     ))}
//                 </div>
//             </div>
//         </section>
//     </>
//   )
// }

// export default OnlineCourses

// Other imports...

const OnlineCourses = () => {
    return (
      <>
        <section className='online'>
          <div className='container1'>
            {/* <Heading subtitle='COURSES' title='Browse Our Online Courses' /> */}
            <div className="content grid3">
              {online.map((val, index) => (
                <div className='box' key={val.id || index}>
                  <div className='img'>
                    <img src={val.cover} alt=''/>
                    <img src={val.hoverCover} alt='' className='show'/>
                  </div>
                  <h1>{val.courseName}</h1>
                  <span>{val.course}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default OnlineCourses;
  