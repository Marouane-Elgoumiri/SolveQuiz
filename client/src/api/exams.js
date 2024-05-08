const {default: axiosInstance} = require('.');

//add Exam

export const addExam = async (payload) =>{
    try {
        const response = await axiosInstance.post("/api/exams/add", payload);
        return response.data;
    }catch(error){
        return error.response.data;
    }
};