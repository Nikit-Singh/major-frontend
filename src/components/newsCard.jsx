import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const NewsCard = (props) => {
    if (props.news)
        return (
            <Link to={`/news/${props.news.id}`} className="site-card-border-less-wrapper">
                <Card title={props.news.title} bordered={true} style={{ width: "100%", padding: "0", marginTop: "10px", boxShadow: `inset 0px 0px 0px 2px ${parseInt(props.news.finalResult) === 0?"white":parseInt(props.news.finalResult) > 100?"green":"red"}`}}>
                    <strong>{props.news.sub_title}</strong>
                    <p style={{textAlign: "right"}}>-{`${props.news.author} (${props.news.journalistAddress})`}</p>
                </Card>
            </Link>
        )
    return null
}

export default NewsCard;
