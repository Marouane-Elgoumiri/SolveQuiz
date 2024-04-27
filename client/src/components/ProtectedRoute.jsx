import React from 'react';
import {getUserInfo} from "../api/users";
import {useEffect} from "react";
import {message} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {SetUser} from "../redux/usersSlice";

function ProtectedRoute({children}) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const getUserData = async () => {
        try {
            const response = await getUserInfo();
            console.log(response)
            if(response.success){
                message.success({
                    content: response.message,
                    style:{
                        fontSize: '16px',
                        padding: '10px',
                    }
                })
                dispatch(SetUser(response.data))
            }else{
                message.error(response.message)
            }
        }catch (e) {
            message.error(e.message );
        }
    }
    useEffect(()=>{
        getUserData();
    },[])
    return (
        <div>
            {user?.username}
            {user?.email}
            {children}

        </div>
    );
}

export default ProtectedRoute;