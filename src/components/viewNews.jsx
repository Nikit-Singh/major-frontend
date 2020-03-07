import React, { useState, useEffect } from 'react';
import jn from '../justnews';

const ViewNews = () => {
    const [article, setArticle] = useState('');
    // const [date, setDate] = useState('')
    useEffect(() => {
        async function getData() {
            let res = await jn.methods.getArticleByID((window.location.href).split("/").reverse()[0]).call();
            setArticle(res);
            // setDate(new Date(article.date));
        }
        getData();
    }, [])
    // console.log(date);
    let date = new Date(article.date).toLocaleString()
    return (
        <>
            <h1 style={{ margin: "20px 0 0 0", fontSize: "50px" }}><strong>{article.title}</strong></h1>
            <h2 style={{ marginTop: "0px", fontSize: "35px" }}>{article.sub_title}</h2>
            <hr />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3 style={{ marginTop: "0px", fontSize: "16px" }}>{date}</h3>
                <h3 style={{ marginTop: "0px", fontSize: "16px" }}>- By {article.author}</h3>
            </div>
            <hr />
            <div style={{ margin: "30px 30px" }} dangerouslySetInnerHTML={{ __html: article.newsContent }}>
            </div>
            <hr />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3 style={{ marginTop: "0px", fontSize: "16px" }}>Source - {article?article.sourcesList[0]:""}</h3>
                <h3 style={{ marginTop: "0px", fontSize: "16px" }}>Tag - {article?article.tags[0]:""}</h3>
            </div>
            <hr />
        </>

    )
}

export default ViewNews;
