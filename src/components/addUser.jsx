import React from 'react';
import { Form, Input, Button } from 'antd';

import web3 from '../web3';
import jn from '../justnews';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const AddUser = () => {
    const onFinish = async values => {
        const address = await web3.eth.getAccounts();
        console.log(address);
        console.log(values);
        jn.methods.createUser(values.username, values.email, new Date().toJSON()).send({ from: address[0] });
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <h1 style={{ marginTop: "30px" }}>Enter Your Details</h1>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}>

                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]} >
                    <Input placeholder="Enter your Username" />
                </Form.Item>

                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            type: "email",
                            message: 'Please input your email!',
                        },
                    ]} >
                    <Input placeholder="Enter your Email" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" size="large" htmlType="submit">
                        Create User
                </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default AddUser;