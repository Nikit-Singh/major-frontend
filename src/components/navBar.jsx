import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const NavBar = () => {
    return (
        <Header className="header">
            <Link to="/"><h1 style={{float: "left", color: "#f1f2f5", fontSize: "26px"}}><b><i>JustNews</i></b></h1></Link>
            <Menu
                theme="dark"
                mode="horizontal"
                style={{ lineHeight: '64px', float: 'right' }}
            >
                <Menu.Item key="1"><Link to="/">News</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/add">Add Post</Link></Menu.Item>
                <Menu.Item key="3"><Link to="/profile">Profile</Link></Menu.Item>
                <Menu.Item key="4"><Link to="/testing">Testing</Link></Menu.Item>
            </Menu>
        </Header>
    )
}

export default NavBar;
