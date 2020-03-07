import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import NewsCard from './newsCard';
import jn from '../justnews';

const { Content, Sider } = Layout;

const News = () => {
	const [articles, setArticles] = useState([]);
	useEffect(() => {
		async function getUsers() {
			let allArticles = await jn.methods.getAllArticles().call();
			setArticles(allArticles)
		}
		getUsers();
	}, [])
	let showArticle = articles.reverse().map((article, i) => {
		if (article.result)
			return <NewsCard key={i} news={article} />
		return null
	})
	return (
		<Layout className="site-layout-background" style={{ padding: '24px 0', display: 'flex' }}>
			<Content style={{ padding: '0 24px', minHeight: 280 }}>
				<h1><strong>Verified News</strong></h1>
				{showArticle}
			</Content>
			<Sider className="site-layout-background" width={500} style={{padding: "30px", overflow: "scroll"}}>
				<h1 style={{ color: "white", textAlign: "center", fontSize: "16px" }}><strong>Latest News</strong></h1>
				{showArticle}
			</Sider>
		</Layout>
	)
}

export default News
