// import React from "react";

// import Header from "../Components/Common/Heading/Header";
// import Home11 from "../Components/home/Home11";
// import About from "../Components/about/About";
// import HAbout from "../Components/home/HAbout";
// import './HomeCss.css'
// import CompanyLogo from "../PageContainer/CompanyLogo";
// import Footer from "../PageContainer/Footer";
// import CourseHome from "../allCourses/CourseHome";
// const Home=()=>{

//     return (
//     // <Head/>
//     <>
//     <div className="main-home">
//     <Header/>
//     <Home11/>
        
//     <div className="about-page">
//         <About/>
//         <hr/>
//     </div>
//     <div className="company-img">
//     <CompanyLogo/>
//     <hr/>
//     </div>
        
//         <div>
//         <HAbout/>
//         </div>
//     <hr></hr>
//         <div className="coursehome-style"> 
//         <div className="coursehome-header">
//             <h3>COURSES</h3>
//             <h1>Browse Our Online Courses</h1>
//         </div>   
//      <CourseHome/>
//         </div>

//      <Footer/>
//     </div>

        


//     {/* <div className="foo">
//         <Footer/>
//     </div> */}
//     </>
//     );



// }

// export default Home;

import React from "react";

import Header from "../Components/Common/Heading/Header";
import Home11 from "../Components/home/Home11";
import About from "../Components/about/About";
import HAbout from "../Components/home/HAbout";
import CompanyLogo from "../PageContainer/CompanyLogo";
import Footer from "../PageContainer/Footer";
import CourseHome from "../allCourses/CourseHome";


const Home = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-sky-900 via-teal-700 to-sky-900 w-screen font-medium absolute inset-x-0 top-0">
        <Header />
        
        <Home11 />

        

        <div className="about-page mt-vh-75">
          <About />
          <hr />
        </div>

        <div className="company-img mt-4">
          <CompanyLogo />
          <hr />
        </div>

        <div className="coursehome-style flex justify-center items-center flex-col mt-8">
          <div className="coursehome-header">
            <h3 className="text-center text-teal-500 text-2xl">COURSES</h3>
            <h1 className="text-center text-2xl font-bold">Browse Our Online Courses</h1>
          </div>
          <CourseHome />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
