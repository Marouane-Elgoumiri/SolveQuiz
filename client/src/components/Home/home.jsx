import React from 'react';
import {Breadcrumb} from "antd";
import {HomeOutlined, UserOutlined} from "@ant-design/icons";
import PageTitle from "../PageTitle";

function Home() {
    return (
        <div>
            <div>
                <PageTitle title="Home Page" />
                <Breadcrumb
                    items={[
                        {
                            href: '/dashboard',
                            title: <HomeOutlined />,
                        },

                        {
                            title: 'Home',
                        },
                    ]}
                />
            </div>
                <div className="divider"></div>
        </div>
    );
}

export default Home;