import React, { useState, useEffect } from 'react';
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
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};


const CreateUser = () => {
    const [address, setAddress] = useState('');
    useEffect(() => {
        web3.eth.getAccounts().then(address => setAddress(address[0]))
        console.log(address);
    }, [address])

    const onFinish = async values => {
        jn.methods.createUser(values.username, values.email, new Date().toJSON()).send({ from: address });
        console.log('Success:', values);
        let allUsers = await jn.methods.getAllUsers().call();
        console.log(allUsers)
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}>

            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]} >
                <Input />
            </Form.Item>

            <Form.Item
                label="Email"
                name="email"
                rules={[
                    {
                        required: true,
                        type: "email",
                        message: 'Please input your email!',
                    },
                ]} >
                <Input />
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default CreateUser;