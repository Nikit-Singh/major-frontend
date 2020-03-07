import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const UserCard = (props) => {
    if (props.user)
        return (
            <Link to={`/profile/${props.user.emailID}`} className="site-card-border-less-wrapper">
                <Card style={{ width: "100%", padding: "0", marginTop: "10px" }}>
                    <strong>{props.user.name}</strong>
                </Card>
            </Link>
        )
    return null
}

export default UserCard;
