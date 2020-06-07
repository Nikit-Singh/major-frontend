import React, {useState, useEffect} from 'react';
import { Card } from "antd";

import web3 from '../web3';
import jn from '../justnews';

const ConfirmRating = () => {
	const [articles, setArticles] = useState([]);
    let cards = [];

	useEffect(() => {
		async function getAllArticles() {
            let allArticles = await jn.methods.getAllArticles().call();
            setArticles(allArticles);
		}
         getAllArticles();
    }, []);

    const onClickHandler = (title, newsContent) => {
        console.log(newsContent);
        fetch("http://localhost:5000", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"news": title+". "+newsContent})
        })
        .then(response => response.text())
        .then(async (result) => {
            let decRating = result*100;
            let rating = Math.trunc(decRating);
            const address = await web3.eth.getAccounts();
            await jn.methods.assignMLRating(rating, title).send({ from: address[0] });
            window.location.reload()
        })
        .catch(error => console.log('error', error));
    }

    cards = articles.reverse().map((article, id) => {
        return (parseInt(article.finalResult) === 0 ? <div key={id} onClick={() => onClickHandler(article.title, article.newsContent)} className="site-card-border-less-wrapper">
                    <Card style={{ width: "100%", margin: "10px" }}>
                        <h3><strong>{article.title}</strong></h3>
                    </Card>
                </div> : null);
    })
   
    if (cards.length !== 0)
        return (
            <>
                {cards}
            </>
        );
    else return (
        <div className="example">
            Loading ...
        </div>
    )
}

export default ConfirmRating;
