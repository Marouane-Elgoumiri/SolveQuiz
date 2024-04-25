import React from 'react'
import {Form, Input, message} from "antd";
import {Button} from "antd";
import {
    EyeInvisibleOutlined,
    EyeTwoTone,
    LockOutlined,
    LoginOutlined,
    UserAddOutlined,
} from "@ant-design/icons";
import {registerUser} from "../../../api/users";

const Register = () => {

    const onFinish = async (values) => {
        try {
            const response = await registerUser(values);
            console.log(values)
            if (response.success) {
                message.success('User registered successfully!');
                console.log("user registered")
            }else{
                message.info(response.message);
                console.log("inside else")
            }
        } catch (error) {
            message.error('Inputs missing or incorrect!');
        }
    }

    return (
        <div className="flex justify-center items-center bg-primary h-screen w-screen ">
            <div className="card w-400 p-3 bg-white">
                <div className="flex flex-col">
                    <div className="flex">
                        <h1 className="text-2xl">Register to SolveQuiz<i className="ri-login-circle-line"></i></h1>

                    </div>
                    <div className="divider"></div>
                    <Form layout="vertical" className="mt-2" onFinish={onFinish}>
                        <Form.Item name="email" label="Email">
                            <Input type="text" suffix={<LockOutlined />} placeholder="Email" />
                        </Form.Item>
                        <Form.Item name="username" label="Username">
                            <Input type="text" suffix={<UserAddOutlined />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item name="password" label="Password">
                            <Input.Password
                                placeholder="input password"
                                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                        </Form.Item>

                        <div className="flex flex-col gap-2">
                            <Button
                                className="Button mt-1"
                                type="primary"
                                color="primary"
                                htmlType="submit"
                            >
                                <LoginOutlined/>Create an account! 🚀
                            </Button>
                            <div>
                                Already have an account? <a href={"/login"}>SignIn! </a>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}
export default Register;