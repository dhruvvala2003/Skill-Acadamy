import SideBar from '../components/SideBar'
import React from 'react'

const Admin = () => {
    return (
        <>
            <div>
                <SideBar></SideBar>
            </div>

            <div style={{ fontFamily: 'Montserrat' }} className="bg-gradient-to-r from-sky-900 via-teal-700 to-sky-900 w-screen h-screen flex font-medium items-center justify-center">
                <section className="w-6/12 mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg  bg-black bg-opacity-50 backdrop-blur-lg">
                    <div className="text-white text-center">
                        <h1 className="text-4xl font-bold mb-4">Welcome, Admin!</h1>
                        {/* Add any additional welcome message or content here */}
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">admin profile</span>
                        <span className="text-emerald-400">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                            </svg> */}
                        </span>
                    </div>
                    <div className="mt-6 w-fit mx-auto">
                        <img src="./images/adminprofile/adminimage.jpg" className="rounded-full w-52" alt="profile picture" />
                    </div>

                    <div className="mt-8 ">
                        <h2 className="text-white font-bold text-2xl tracking-wide">Virani <br /> Meetkumar</h2>
                    </div>
                    <p className="text-emerald-400 font-semibold mt-2.5" >
                        Active
                    </p>

                    <div className="h-1 w-full bg-black mt-8 rounded-full">
                        <div className="h-1 rounded-full w-2/5 bg-yellow-500 "></div>
                    </div>
                    <div className="mt-3 text-white text-sm">
                        <span className="text-gray-400 font-semibold">Storage:</span>
                        <span>40%</span>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Admin
