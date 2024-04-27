import React, {useEffect, useState} from 'react';
import '../../stylesheets/theme.css'
import bg from '../../assets/bg.jpg';
import logo from '../../assets/logo.png';
import {Button, Image} from 'antd';
import {Link} from "react-router-dom";
import {DoubleRightOutlined} from "@ant-design/icons";

function Welcome() {

    return (
        <main className="bg-primary1 h-screen w-screen flex xl:flex-row items-center justify-center gap-5">

            <Image
                preview={false}
                src={bg}
                height={519}
                width={672}
            />
            <div>
                <div className="flex flex-col items-center justify-center">
                    <Link to="/login">
                        <Image width={200} height={200} preview={false} src={logo} />
                    </Link>
                </div>

                <h1 className="text-white text-5xl my-6 max-w-[500px]">
                   Expand your <span className="font-extrabold">knowledge</span> with ease
                </h1>
                <p className="text-white text-2xl font-medium max-w-[600px]">Take your quiz and test your insight on various topics</p>
                <div className="flex flex-row items-center justify-center">
                    <Link to="/register">
                        <Button
                            className="Button2"
                            size="large"
                            icon={<DoubleRightOutlined />}
                            type="primary"
                        >
                            Get started!
                        </Button>
                    </Link>
                    <Link to="/login">
                        <Button
                            className="ml-2"
                            size="large"
                        >
                            Log in! 🚀
                        </Button>
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default Welcome;