// import React from 'react'
// import {homeAbout} from "../../../dummydata"
// import Title from '../Common/title/Title';

// import './AboutCss.css';

// // const AboutCard = () => {
    
// //   return(
// //   <>
// //     <section className='aboutHome'>
// //         <div className='container1 '>
// //             <div className='abot-left'>
// //                 <img src='./images/about.webp' alt=''/>
// //             </div>
// //             <div className='about-right'>
// //                 {/* <Title subtitle="LEARN ANYTHING" title="Benefits About Online Learning Expertise"/> */}
// //                 <div className='right-items'>
// //                     {homeAbout.map((val) => (
// //                         <div className='about-item'>
// //                             <div className='imgg'>
// //                             <img src={val.cover} alt='img' />
// //                             </div>

// //                             <div className='text'>
// //                             <h4>{val.title}</h4>
// //                             <h4>{val.desc}</h4>
// //                             </div>
// //                         </div>
// //                     ))}
                
// //                 </div>
// //             </div>
// //         </div>

                        
// //     </section>
    
 
    
// // </>

// //   );
// // }

// // export default AboutCard


// // Other imports...

// const AboutCard = () => {
//     return (
//       <>
//         <section className='aboutHome'>
//           <div className='container1 '>
//             <div className='abot-left'>
//               <img src='./images/about.webp' alt='' />
//             </div>
//             <div className='about-right'>
//               {/* <Title subtitle="LEARN ANYTHING" title="Benefits About Online Learning Expertise"/> */}
//               <div className='right-items'>
//                 {homeAbout.map((val, index) => (
//                   <div className='about-item' key={index}>
//                     <div className='imgg'>
//                       <img src={val.cover} alt='img' />
//                     </div>
  
//                     <div className='text'>
//                       <h4>{val.title}</h4>
//                       <h4>{val.desc}</h4>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>
//       </>
//     );
//   };
  
//   export default AboutCard;
  
import React from 'react';
import { homeAbout } from '../../../dummydata';
import Title from '../Common/title/Title';

const AboutCard = () => {
  return (
    <>
      <section className="bg-teal-950	pt-10 pb-20">
        <div className="mx-auto flex flex-wrap items-center justify-center">
          <div className="w-full md:w-1/2">
            <img src="./images/about.webp" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="right-items">
              {homeAbout.map((val, index) => (
                <div className="about-item mb-8" key={index}>
                  <div className="imgg text-primary" style={{color: "white"}}>
                    <img src={val.cover} alt="img" className="w-14 h-14 object-cover mx-auto mb-4" style={{ color: 'white' }} />
                  </div>
                  <div className="text-center text-white">
                    <h4 className="text-xl font-semibold mb-2">{val.title}</h4>
                    <p>{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCard;
