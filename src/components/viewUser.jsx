import React, { useState, useEffect } from 'react';

import jn from '../justnews';

const ViewUser = () => {
    const [user, setUser] = useState('');
    useEffect(() => {
        async function getData() {
            let res = await jn.methods.getUserByEmail((window.location.href).split("/").reverse()[0]).call();
            setUser(res);
            console.log(res)
        }
        getData();
    }, [])
    let date = new Date(user.joinDate).toLocaleString()
    if (user)
        return (
            <>
                <h1 style={{ margin: "20px 0 0 0", fontSize: "50px" }}><strong>{user.name}</strong></h1>
                <h2 style={{ marginTop: "0px", fontSize: "25px" }}>{user.userAddress}</h2>
                <hr />
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <h3 style={{ marginTop: "0px", fontSize: "16px" }}>Joined On - {date}</h3>
                    <h3 style={{ marginTop: "0px", fontSize: "16px" }}>{user.emailID}</h3>
                </div>
                <hr />
                <div>
                    <h3 style={{ marginTop: "0px", fontSize: "16px" }}>Auth Score - {user.authScore}</h3>
                    <h3 style={{ marginTop: "0px", fontSize: "16px" }}>Authentic Rates - {user.authenticCount}</h3>
                    <h3 style={{ marginTop: "0px", fontSize: "16px" }}>Fake Rates - {user.unauthenticCount}</h3>
                </div>
                <hr />
            </>
        )
        else return (
            <div className="example">
                Loading ...
            </div>
        )
}

export default ViewUser;
