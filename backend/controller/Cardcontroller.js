// import express from 'express';
// import CardModel from "../models/Cardmodel.js"
// import Data from "../models/Usermodel.js"
// import cors from 'cors';
// // const mongoose = require("mongoose");
// // const bcrypt = require("bcryptjs");
// export const app = express();
// import card from "../models/Cardmodel.js";
// // const stripe = require("stripe")(process.env.sk_test_51OchNgSFA7o5v3rGzE68rauD2QUHGwc3AWnMp5Zip64GC97GFbubAC2valZI89HTZyIVk78DP1euCwnz8jeoqozK00pXK6aC8K);
// // const stripe = require("stripe")("sk_test_51OchNgSFA7o5v3rGzE68rauD2QUHGwc3AWnMp5Zip64GC97GFbubAC2valZI89HTZyIVk78DP1euCwnz8jeoqozK00pXK6aC8K");
// import stripe from "stripe";

// const stripeInstance = stripe("sk_test_51OchNgSFA7o5v3rGzE68rauD2QUHGwc3AWnMp5Zip64GC97GFbubAC2valZI89HTZyIVk78DP1euCwnz8jeoqozK00pXK6aC8K");



// app.use(express.json());
// app.use(cors());

// const addcourse = async (req, res) => {
//     const { coursename, coursediscription, mentorname, courseprice, courseimage } = req.body;


//     try {
//         console.log(req.body)
//         const data = new CardModel();
//         data.cousename = req.body.coursename;
//         data.cousediscription = req.body.coursediscription;
//         data.mentorname = req.body.mentorname;
//         data.couseprice = req.body.courseprice;
//         data.corseimage = req.body.couseimage;
//         data.save();
//         const data1 = { 'flag': null };
//         res.send(data1);
//     }
//     catch (error) {
//         console.log(error);
//     }

// }


// const getCard = async (req, res) => {
//     try {
//         const cards = await CardModel.find({});
//         res.status(200).json(cards);
//     } catch (error) {
//         console.error("Error getting cards:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// };

// const doPayment = async (req, res) => {
//     try {
//         console.log("enter to try block....");
//         const { carddatas, user } = req.body;
        
//         const lineItems = [
//             {
//                 price_data: {
//                     currency: "inr",
//                     product_data: {
//                         name: carddatas.cousename,
//                         // images: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//                     },
//                     unit_amount: carddatas.couseprice * 100,
//                 },
//                 quantity: 1,
//             }
//         ];


//         const session = await stripeInstance.checkout.sessions.create({
//             payment_method_types: ["card"],
//             billing_address_collection: 'required',
//             line_items: lineItems,
//             mode: "payment",
//             success_url: "http://localhost:5173/yourcourses",
//             cancel_url: "http://localhost:5173/home",
//         });
        
//         let userdata = await Data.findById(user._id)
//         userdata.subscripted_course.push(carddatas._id)
//         await userdata.save()

//         res.json({ id: session.id });
//     } catch (error) {
//         console.log("not payment enter to catch block");
//         console.error("Error creating checkout session:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// };



     


// const Cardcontroller = {
//     getCard,
//     addcourse,
//     doPayment,
// };

// export default Cardcontroller;


// ===============================================

import express from 'express';
import CardModel from "../models/Cardmodel.js"
import Data from "../models/Usermodel.js"
import cors from 'cors';

import UserModel from "../models/Usermodel.js"
// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
export const app = express();
// const stripe = require("stripe")(process.env.sk_test_51OchNgSFA7o5v3rGzE68rauD2QUHGwc3AWnMp5Zip64GC97GFbubAC2valZI89HTZyIVk78DP1euCwnz8jeoqozK00pXK6aC8K);
// const stripe = require("stripe")("sk_test_51OchNgSFA7o5v3rGzE68rauD2QUHGwc3AWnMp5Zip64GC97GFbubAC2valZI89HTZyIVk78DP1euCwnz8jeoqozK00pXK6aC8K");
import stripe from "stripe";

// for strip key ...
import dotenv from 'dotenv';
dotenv.config();


//for course..
import {emalIdForCourse} from './Logincontroller.js';

// for courseBuy by user ....



const stripeInstance = stripe(process.env.Stripe_secret_key);



app.use(express.json());
app.use(cors());



const addcourse = async (req, res) => {
    const { coursename, coursediscription, mentorname, courseprice, couseimage, courseUrls } = req.body;
    console.log("course url"+courseUrls)
    try {
        console.log("eneter to addcouses try block");
        const data = new CardModel({
            coursename,
            coursediscription,
            mentorname,
            courseprice,
            couseimage,
            courseUrls, // Assign the array of URLs directly to the courseUrls field
        });
        await data.save();
        const data1 = { 'flag': null };
        res.send(data1);
    } catch (error) {
        console.log("eneter to addcouses catch block");
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}





const getCard = async (req, res) => {
    try {
        const cards = await CardModel.find({});
        res.status(200).json(cards);
    } catch (error) {
        console.error("Error getting cards:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const doPayment = async (req, res) => {
    try {
        console.log("enter to try block....");
        const { carddatas, user } = req.body;
        
        const lineItems = [
            {
                price_data: {
                    currency: "inr",
                    product_data: {
                        name: carddatas.coursename,
                        // images: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    },
                    unit_amount: carddatas.courseprice * 100,
                },
                quantity: 1,
            }
        ];


        const session = await stripeInstance.checkout.sessions.create({
            payment_method_types: ["card"],
            billing_address_collection: 'required',
            line_items: lineItems,
            mode: "payment",
            success_url: "http://localhost:5173/yourcourses",
            cancel_url: "http://localhost:5173/home",
        });
        
        let userdata = await Data.findById(user._id)
        userdata.subscripted_course.push(carddatas._id)
        await userdata.save()

        res.json({ id: session.id });
    } catch (error) {
        console.log("not payment enter to catch block");
        console.error("Error creating checkout session:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


// =-=============================

const getCourseUrl=async(req,res)=>{

    try {
        

        console.log(emalIdForCourse);

        const user = await UserModel.findOne({ email:emalIdForCourse });
         // console.log(" user found :"  ,user)

        // const card_UserDetails = await CardModel.find({emalIdForCourse});
        // console.log("suiii use found :"  ,card_UserDetails)

      
       
        const subscripted_course_IdArr=user.subscripted_course;
        console.log("course id : ", subscripted_course_IdArr);

        // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
          // Fetch the details of the subscribed courses whose ids are in subscribedCourseIds array
          //const subscribedCourses = await CardModel.find({ _id: { $in: subscripted_course_IdArr } });

             // Fetch the details of all courses whose ids are in subscribedCourseIds array
        const subscribedCourses = await Promise.all(subscripted_course_IdArr.map(async courseId => {
            try {
                const course = await CardModel.findById(courseId);
                return course;
            } catch (error) {
                console.error(`Error fetching course with id ${courseId}:`, error);
                return null; // If the course is not found, return null
            }
        }));

        // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

        if(subscripted_course_IdArr.length==0)
        {
            res.send([]);
                

            

        }
        else{
            
            console.log("***********************************************************")
            // console.log("all course card res: " ,AllCoursesCardResponce);
            console.log("whoho  i find this : " ,subscribedCourses);
            console.log("***********************************************************")
            
            console.log("length1= " ,subscribedCourses.length)
            console.log("length2= " ,subscripted_course_IdArr.length)
        
     
    //     res.send({"coursename":"dhruv",
    //     "coursediscription":"dhruv",
    //     "mentorname":"dhruv",
    //     "couseimage":"dhruv",
    //     "couseUrls":"dhruv",

    // });
    
    console.log()
    res.send(subscribedCourses)
            
        }
            


    }
    catch(e){
        console.log(e);

    }



}
     


const Cardcontroller = {
    getCard,
    addcourse,
    doPayment,
    getCourseUrl,
};

export default Cardcontroller;