import React from 'react';
import PageTitle from "../../../components/PageTitle";
import {Breadcrumb, Button} from "antd";
import "../../../stylesheets/form-elements.css";
import {useNavigate} from "react-router-dom";
import {HomeOutlined} from "@ant-design/icons";

function Exams() {
    const navigate = useNavigate();
    return (
        <div>
            <div className="flex justify-between">
                <PageTitle title="Exams"/>
                <Button className="primary-outlined-btn flex items-center mt-2"
                        onClick={() => {
                            navigate("/admin/exams/add")
                        }}>
                    <i className="ri-add-circle-line "></i>
                    Add Exam
                </Button>
            </div>
            <div>
                <Breadcrumb
                    items={[
                        {
                            href: '/dashboard',
                            title: <HomeOutlined/>,
                        },

                        {
                            title: 'Exams',
                        },
                    ]}
                />
            </div>
            <div className="divider"></div>
        </div>
    );
}

export default Exams;