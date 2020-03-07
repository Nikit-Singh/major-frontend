import React from 'react';
import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom';

import NavBar from './navBar';
import News from './news';
import Add from './add';
import ViewNews from './viewNews';
import UserList from './userList';
import Testing from './testing';
import AddUser from './addUser';

const { Content, Footer } = Layout;

const PageLayout = () => {
    return (
        <Layout>
            <NavBar />
            <Content style={{ padding: '0 50px' }}>
                <Switch>
                    <Route exact path="/">
                        <News />
                    </Route>
                    <Route exact path="/add">
                        <Add />
                    </Route>
                    <Route exact path="/news/:id">
                        <ViewNews />
                    </Route>
                    <Route exact path="/profile">
                        <UserList />
                    </Route>
                    <Route exact path="/profile/:id">
                        <UserList />
                    </Route>
                    <Route exact path="/testing">
                        <Testing />
                    </Route>
                    <Route exact path="/testing/addUser">
                        <AddUser />
                    </Route>
                </Switch>
            </Content>
            <Footer theme="dark" style={{ position: 'fixed', width: "100%", bottom: 0, left: 0, textAlign: 'center', backgroundColor: "#011429", color: "rgba(255, 255, 255, 0.65)" }}>JustNews ©2019-20 <br />Created by Rachana, Karan, Nikit and Aditya</Footer>
        </Layout>
    )
}

export default PageLayout;