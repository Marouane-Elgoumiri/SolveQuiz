const mongoose = require('mongoose');

const examSchema = new mongoose.Schema({
    examName: { type: String, required: true },
    duration: { type: Number, required: true },
    category: { type: String, required: true },
    totalMarks: { type: Number, required: true },
    passingMark: { type: Number, required: true },
    question: { type: [mongoose.Schema.Types.ObjectId], ref:"questions",required: false },
},{
    timestamps: true,
});

const Exam = mongoose.model("exams", examSchema);
module.exports = Exam;