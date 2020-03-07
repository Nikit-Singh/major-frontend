import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import web3 from './web3';
import jn from './justnews'
import PageLayout from './components/pageLayout'

import 'antd/dist/antd.css';
import './App.css';

function App() {
  useEffect(() => {
    async function getUsers() {
      let allUsers = await jn.methods.getAllUsers().call();
      let allArticles = await jn.methods.getAllArticles().call();
      // setUsers(allUsers);
      console.log(allUsers)
      console.log(allArticles)
    }
    getUsers();
  }, [])
  // web3.eth.getAccounts().then(console.log)

  return (
    <Router>
        <PageLayout />
    </Router>
  );
}

export default App;
