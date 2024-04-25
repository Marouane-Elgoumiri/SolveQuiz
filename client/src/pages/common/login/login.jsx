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
                message.success('User logged in successfully!');
                console.log("user logged in!")
            }else{
                message.info(response.message);
                console.log("inside else")
            }
        } catch (error) {
            message.error('Inputs missing or incorrect!');
        }
    }

    return (
        <div className="flex justify-center items-center h-screen w-screen bg-primary">
            <div className="card w-400 p-3 bg-white">
                <div className="flex flex-col">
                    <div className="flex">
                        <h1 className="text-2xl">SolveQuiz Login <i className="ri-login-circle-line"></i></h1>

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