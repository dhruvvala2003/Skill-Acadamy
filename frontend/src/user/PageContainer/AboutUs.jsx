
// import React from "react";
// import './AboutUsCss.css';
// import Header from "../Components/Common/Heading/Header";

// const AboutUs = () => {

//     return (

//         <>
//             <Header />

//             <div className="about-main">
//                 <div className="about-outer">
//                     <div className="about-container">
//                         <div className="about-left">
//                             <img src="https://img.freepik.com/free-vector/teamwork-concept-landing-page_52683-20165.jpg?w=740&t=st=1704906975~exp=1704907575~hmac=8a460b550de649ca36eb14c8b57be423600dafe05336ba718675f0ff5b2428fe" placeholder="About us Image"></img>
//                         </div>


//                         <div className="about-right">
//                             <h1>About Us</h1>
//                             <h2>Welcome to Skill Academy!</h2>
//                             <p>➢ Our Mission
//                                 At Skill Academy, is to empower college students like you to reach new heights through accessible, high-quality education. We believe that learning should be flexible, engaging, and tailored to your unique needs.</p>

//                             <div className="about-foot">
//                                 <h3>Follow Us On...</h3>
//                                 <a href="#">Instagram</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>

//     );
// }

// export default AboutUs;
import React from "react";
import Header from "../Components/Common/Heading/Header";

const AboutUs = () => {
    return (
        <>
            <div className='bg-gradient-to-r from-sky-900 via-teal-700 to-sky-900 w-screen font-medium absolute inset-x-0 top-0'>
                <Header />

                <div className="bg-gradient-to-r from-sky-900 via-teal-700 to-sky-900 h-screen flex items-center justify-center font-medium">
                    <div className="about-main">
                        <div className="about-outer bg-cyan-950 p-20 shadow-2xl">
                            <div className="about-container flex justify-between items-center max-w-5xl mx-auto">
                                <div className="about-left flex-1">
                                    <img
                                        src="https://img.freepik.com/free-vector/teamwork-concept-landing-page_52683-20165.jpg?w=740&t=st=1704906975~exp=1704907575~hmac=8a460b550de649ca36eb14c8b57be423600dafe05336ba718675f0ff5b2428fe"
                                        alt="About us Image"
                                        className="w-full h-full rounded-8"
                                    />
                                </div>

                                <div className="about-right flex-1 ml-12">
                                    <h1 className="text-3xl text-yellow-50 font-bold mb-4">About Us</h1>
                                    <h2 className="text-2xl text-cyan-300 font-bold mb-4">Welcome to Skill Academy!</h2>
                                    <p className="text-lg text-sky-100">
                                        ➢ Our Mission At Skill Academy is to empower college students like you to reach new heights through accessible, high-quality education. We believe that learning should be flexible, engaging, and tailored to your unique needs.
                                    </p>

                                    <div className="about-foot mt-4">
                                        <h3 className="text-2xl font-bold mb-2 text-blue-400">Follow Us On...</h3>
                                        <a href="#" className="text-blue-500 text-lg underline">
                                            Instagram
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutUs;

