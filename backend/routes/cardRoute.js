import Cardcontroller from "../controller/Cardcontroller.js";
import express from "express";
const router = express.Router();

// GET all workouts
router.post('/', Cardcontroller.addcourse)

// GET a single workout
router.get('/get', Cardcontroller.getCard)

router.post('/payment-session', Cardcontroller.doPayment);
router.get("/getCourseUrl",Cardcontroller.getCourseUrl);

export default router;
