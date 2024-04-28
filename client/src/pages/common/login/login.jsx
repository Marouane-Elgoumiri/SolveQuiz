import React from 'react'
import {Form, Input, message} from "antd";
import {Button} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone, LockOutlined, LoginOutlined} from "@ant-design/icons";
import {loginUser} from "../../../api/users";

const Login = () => {

    const onFinish = async (values) => {
        try {
            const response = await loginUser(values);
            console.log(values)
            if (response.success) {
                message.success({
                    content: 'User logged in successfully!',
                    style: {
                        fontSize: '16px',
                        padding: '10px',
                    }
                });
                localStorage.setItem("token", response.data);
                window.location.href = "/dashboard";
                console.log("user logged in!")
            }else{
                message.info({
                    content: response.message,
                    style: {
                        fontSize: '16px',
                        padding: '10px',
                    }
                });
                console.log("inside else")
            }
        } catch (error) {
            message.error({
                content: 'Inputs missing or incorrect!',
                style: {
                    fontSize: '16px',
                    padding: '10px',
                }
            });
        }
    }

    return (
        <div className="flex justify-center items-center h-screen w-screen bg-primary">
            <div className="card w-400 p-3 bg-white">
                <div className="flex flex-col">
                    <div className="flex">
                        <h1 className="text-2xl">SolveQuiz Login </h1>

                    </div>
                    <div className="divider"></div>
                    <Form layout="vertical" className="mt-2" onFinish={onFinish}>
                        <Form.Item name="email" label="Email">
                            <Input type="text" suffix={<LockOutlined />} placeholder="Email" />
                        </Form.Item>
                        <Form.Item name="password" label="Password">
                            <Input.Password
                                placeholder="input password"
                                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                        </Form.Item>

                        <div className="flex flex-col gap-2">
                            <Button
                                className="mt-1 Button"
                                type="primary"
                                htmlType="submit"
                            >
                                <LoginOutlined />Login  🚀
                            </Button>
                            <div>
                                New to SolveQuiz? <a href={"/register"}>Register here!</a>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}
export default Login