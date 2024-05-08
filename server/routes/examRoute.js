const router = require('express').Router();
const Exam = require("../models/examModel");
const authenticate = require("../middlewares/authMiddleware");

// Add exam:

/*const validateExamData = (data) => {
    // Check if required fields are present
    if (!data.examName || !data.questions || !Array.isArray(data.questions)) {
        throw new Error("Invalid exam data: examName and questions are required.");
    }
};*/

router.post("/add", authenticate, async (req, res)=>{
    try{
        /*validateExamData(req.body);*/
        //check if exam already exist:
        const ExamExist = await Exam.findOne({examName: req.body.examName});
        if(ExamExist){
           return res.status(400).send({
               message: "Exam already exist!",
               success: false,
           });
        }
        req.body.questions = [];
        const newExam = new Exam(req.body);
        await newExam.save();
        res.status(201).send({
            message: "Added Exam successfully",
            success: true,
        });
    }catch(err){
        console.error("Error adding exam:", err);
        res.status(500).send({
            message: err.message,
            success: false,
            data: err,
        });
    }
});

module.exports = router;