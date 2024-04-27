const {default: axiosInstance} = require('.');

export const registerUser = async (payload) => {
    try {
        const response = await axiosInstance.post('api/users/register',payload);
        return response.data;
    }catch(err) {
       return err.response.data;
    }
}
export const loginUser = async (payload) => {
    try {
        const response = await axiosInstance.post('api/users/login',payload);
        return response.data;
    }catch(err) {
        return err.response.data;
    }
}
export const logoutUser = () => {
    localStorage.removeItem("token");
}

export const getUserInfo = async ()=> {
    try {
        const response = await axiosInstance.post("api/users/get-user-info");
        return response.data;
    }catch (e) {
        return e.response.data;
    }
}