import React, { useState, useEffect } from 'react';
import { Alert, Button } from 'antd';
import { LikeOutlined, LikeFilled, DislikeOutlined, DislikeFilled } from '@ant-design/icons';

import web3 from "../web3";
import jn from '../justnews';

const ViewNews = () => {
    const [article, setArticle] = useState('');
    const [likeButtonState, setLikeButtonState] = useState(false);
    const [dislikeButtonState, setDislikeButtonState] = useState(false);
    useEffect(() => {
        async function getData() {
            let res = await jn.methods.getArticleByID((window.location.href).split("/").reverse()[0]).call();
            await setArticle(res);
            console.log(res.title);
            let vo = await jn.methods.voteType(res.title).call();
            console.log(vo);
            if(vo === 1) setLikeButtonState(true);
            else if (vo === 2) setDislikeButtonState(true);
        }
        getData();
    }, [])
    let date = new Date(article.date).toLocaleString()
    const like = async () => {
        const address = await web3.eth.getAccounts();
        jn.methods.vote(article.title, true).send({ from: address[0] });
        setLikeButtonState(true);
    }
    const dislike = async () => {
        const address = await web3.eth.getAccounts();
        jn.methods.vote(article.title, false).send({ from: address[0] });
        setDislikeButtonState(true);
    }
    if (article) {
        return (
            <>
                {parseInt(article.finalResult) !== 0 && parseInt(article.finalResult) > 100 && parseInt(article.finalResult) <= 200 ? <Alert message={`This is a community and ML Algorithm VERIFIED article. ML ratings - ${parseInt(article.mlRating)/100}`} type="success" showIcon closable style={{marginTop: "20px"}} /> : null }
                {parseInt(article.finalResult) !== 0 && parseInt(article.finalResult) > 0 && parseInt(article.finalResult) <= 100 ? <Alert message={`This article was marked as FAKE by the community and our ML Algorithm. ML ratings - ${parseInt(article.mlRating)/100}`} type="error" showIcon style={{marginTop: "20px"}} /> : null }
                <h1 style={{ margin: "20px 0 0 0", fontSize: "50px" }}><strong>{article.title}</strong></h1>
                <h2 style={{ marginTop: "0px", fontSize: "30px" }}>{article.sub_title}</h2>
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
                    <h3 style={{ marginTop: "0px", fontSize: "16px" }}>Source - {article ? article.sourcesList[0] : ""}</h3>
                    <h3 style={{ marginTop: "0px", fontSize: "16px" }}>Tag - {article ? article.tags[0] : ""}</h3>
                </div>
                <hr />
                <div style={{display: "flex", justifyContent:"space-between", marginTop: "20px" }} className="">
                    <div style={{display: "flex",flexDirection:"column", justifyContent:"left"}}>
                        <h3 style={{color:"#40a9ff"}}>{`${likeButtonState?parseInt(article.realCount)+1:parseInt(article.realCount)} people verified this article as legit`}</h3>
                        {parseInt(article.finalResult) === 0 ? <Button type={likeButtonState?"primary":"secondary"} disabled={likeButtonState||dislikeButtonState} icon={!likeButtonState?<LikeOutlined />:<LikeFilled />} style={{height: "46px", fontSize: "16px"}} onClick={like}>
                            {likeButtonState?"Classified As Legit Article": "Classify As Legit Article"}
                        </Button> : null }
                    </div>
                    <div style={{display: "flex", flexDirection:"column",justifyContent:"right"}}>
                        <h3 style={{color:"#ff4d4f"}}>{`${dislikeButtonState?parseInt(article.fakeCount)+1:parseInt(article.fakeCount)} people reported this article as fake yet`}</h3>
                        {parseInt(article.finalResult) === 0 ? <Button type={dislikeButtonState?"danger":"secondary"} disabled={likeButtonState||dislikeButtonState} icon={!dislikeButtonState?<DislikeOutlined />:<DislikeFilled />} style={{height: "46px", fontSize: "16px"}} onClick={dislike} >
                            {dislikeButtonState?"Reported As Fake Article": "Report As Fake Article"}
                        </Button> : null }
                    </div>
                </div>
                <div style={{margin: "0 0 200px 0"}}></div>
            </>
        )
    }
    else return (
        <div className="example">
            Loading ...
        </div>
    )
}

export default ViewNews;
