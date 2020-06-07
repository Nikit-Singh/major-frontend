import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const Testing = () => {
    return (
        <div>
            <Link to={`/testing/addUser`} className="site-card-border-less-wrapper">
                <Card style={{ width: "100%", margin: "10px" }}>
                    <h3><strong>ADD NEW USER</strong></h3>
                </Card>
            </Link>
            <Link to={`/testing/confirmRating`} className="site-card-border-less-wrapper">
                <Card style={{ width: "100%", margin: "10px" }}>
                    <h3><strong>CONFIRM ARTICLE RATINGS</strong></h3>
                </Card>
            </Link>
        </div>
    )
}

export default Testing;