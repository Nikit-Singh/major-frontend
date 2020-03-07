import React from 'react';
import ReactQuill from 'react-quill';
import { Button } from 'antd';
import { v4 as uuidv4 } from 'uuid';

import jn from '../justnews';
import web3 from '../web3';

import 'react-quill/dist/quill.snow.css';
import './add.css';


class Add extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            news: '',
            author: '',
            title: '',
            subtitle: '',
            tag: '',
            source: '',
        }
        this.newsChange = this.newsChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    newsChange(value) {
        this.setState({ news: value })
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    submitNews = async e => {
        e.preventDefault();
        console.log(this.state.news);
        const address = await web3.eth.getAccounts();
        jn.methods.createArticle(uuidv4(), this.state.title, this.state.subtitle, this.state.author, new Date().toJSON(), this.state.news, [this.state.source], [this.state.tag]).send({ from: address[0] });
    }

    render() {

        let styles = {
            margin: '20px 0 20px 0',
            height: '500px',
            paddingBotton: '200px'
        }
        return (
            <div style={{ margin: '20px 0 200px' }}>
                <Button type="primary" size="large" onClick={this.submitNews} style={{ float: "right" }}>
                    Submit Article
                </Button>
                <h1><strong>Write Your News Article</strong></h1>
                <input placeholder="Enter Name" name="author" type="text" value={this.state.author} onChange={this.handleChange} />
                <input placeholder="Enter Title" name="title" type="text" value={this.state.title} onChange={this.handleChange} />
                <input placeholder="Enter Sub-Title" name="subtitle" type="text" value={this.state.subtitle} onChange={this.handleChange} />
                <input placeholder="Enter Tag" name="tag" type="text" value={this.state.tag} onChange={this.handleChange} />
                <input placeholder="Enter Source For The Article" name="source" type="text" value={this.state.source} onChange={this.handleChange} />
                <ReactQuill style={styles} value={this.state.news} onChange={this.newsChange} />

            </div>
        )
    }
}

export default Add;
