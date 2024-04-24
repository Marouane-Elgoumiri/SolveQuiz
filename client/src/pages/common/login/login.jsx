import React from 'react'
import { Form, Input} from "antd";
import {Button} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone, LockOutlined, LoginOutlined} from "@ant-design/icons";

const Login = () => {
    return (
        <div className="flex justify-center items-center h-screen w-screen bg-primary">
            <div className="card w-400 p-3 bg-white">
                <div className="flex flex-col">
                    <div className="flex">
                        <h1 className="text-2xl">SolveQuiz Login <i className="ri-login-circle-line"></i></h1>

                    </div>
                    <div className="divider"></div>
                    <Form layout="vertical" className="mt-2" >
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