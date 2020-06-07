import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import UserCard from './userCard';
import jn from '../justnews';

const { Content } = Layout;

const UserList = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        async function getUsers() {
            let allUsers = await jn.methods.getAllUsers().call();
            setUsers(allUsers)
            console.log(allUsers);
        }
        getUsers();
    }, [])
    let showUsers = users.map((user, i) => {
        return <UserCard key={i} user={user} />
    })
    if (users.length !== 0)
        return (
            <Layout className="site-layout-background" style={{ padding: '24px 0', display: 'flex' }}>
                <Content style={{ padding: '0 24px', minHeight: 280 }}>
                    <h1 style={{ fontSize: "20px", marginBottom: "20px" }}><strong>ALL USERS</strong></h1>
                    {showUsers}
                </Content>
            </Layout>
        )
        else return (
            <div className="example">
                Loading ...
            </div>
        )
}

export default UserList;
