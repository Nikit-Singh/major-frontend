import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import jn from './justnews'
import PageLayout from './components/pageLayout'

import 'antd/dist/antd.css';

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
