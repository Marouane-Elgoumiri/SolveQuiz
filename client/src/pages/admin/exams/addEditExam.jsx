import React from 'react';
import PageTitle from "../../../components/PageTitle";
import {Breadcrumb, Button, Col, Form, Input, InputNumber, message, Row, Select} from "antd";
import {BookOutlined, ClockCircleOutlined, HomeOutlined, NumberOutlined, UserOutlined} from "@ant-design/icons";
import {Link, useNavigate} from "react-router-dom";
import {addExam} from "../../../api/exams";
const { Option } = Select;

function AddEditExam(props) {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const handleSubmit = async (values) => {
        try {
            let response;
            response = await addExam(values);
            if(response.success){
                message.success(response.message);
                navigate("/admin/exams");
            }else{
                message.error(response.message);
            }
        }catch (e) {
            message.error(e.message);
        }
    };

    return (
        <div>
            <div>
                <PageTitle title="Add Exam" />
                <Breadcrumb
                    items={[
                        {
                            href: '/dashboard',
                            title: <HomeOutlined />,
                        },
                        {
                            href: '/admin/exams',
                            title: (
                                <>
                                    <UserOutlined />
                                    <span>Exams</span>
                                </>
                            ),
                        },
                        {
                            title: 'Add exams',
                        },
                    ]}
                />
            </div>
            <div className="divider"></div>
            <div className="mt-2 mr-2">
                <Form
                    form={form}
                    layout="vertical"
                    size="large"
                    onFinish={handleSubmit}
                >
                    <Form.Item
                        label="Exam name"
                        name="examName"
                        rules={[{required: true, message: 'Please input the exam name!'}]}
                        placeholder="Enter Exam"
                    >
                        <Input prefix={<BookOutlined className="site-form-item-icon"/>} placeholder="Exam name"/>
                    </Form.Item>
                        <Form.Item
                            label="Category"
                            name="category"
                            rules={[{required: true, message: 'Please select a category!'}]}
                        >
                            <Select
                                placeholder="Select a category"
                                allowClear
                            >
                                <Option value="math">Math</Option>
                                <Option value="science">Science</Option>
                                <Option value="development">Development</Option>
                                <Option value="software">IT Software</Option>
                                <Option value="security">Security & Network</Option>
                            </Select>
                        </Form.Item>
                    <Row gutter={9}>
                        <Col span={3}>
                            <Form.Item
                                label="Duration (in seconds)"
                                name="duration"
                                rules={[{required: true, message: 'Please input the duration!'}]}
                            >
                                <InputNumber min={1} max={3600}
                                             style={{ width: '100%' }}
                                             prefix={<ClockCircleOutlined className="site-form-item-icon"/>}
                                                placeholder="Duration (in seconds)"
                                />
                            </Form.Item>
                        </Col>
                        <Col span={3}>
                            <Form.Item
                                label="Total Marks"
                                name="totalMarks"
                                rules={[{required: true, message: 'Please input the total marks!'}]}
                            >
                                <InputNumber min={1}
                                             style={{ width: '100%' }}
                                             prefix={<NumberOutlined className="site-form-item-icon"/>} placeholder="enter the total marks"/>
                            </Form.Item>
                        </Col>
                        <Col span={3}>
                            <Form.Item
                                label="Passing Mark"
                                name="passingMark"
                                rules={[{required: true, message: 'Please input the passing mark!'}]}
                            >
                                <InputNumber min={1} prefix={<NumberOutlined className="site-form-item-icon"/>}
                                             style={{ width: '100%' }}
                                             placeholder="enter the passing marks"
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item>
                        <div className="mt-2">
                            <Button className="primary-contained-btn" type="primary" htmlType="submit">
                                Save
                            </Button>
                            <Button type="default" className="ml-2">
                                <Link to="/admin/exams">Back</Link>
                            </Button>
                        </div>

                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default AddEditExam;