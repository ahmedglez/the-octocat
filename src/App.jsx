import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import Searcher from './components/Searcher';
import UserCart from './containers/UserCart';

const { fetchUsers } = require('./services/users.services');

const App = () => {
  const [inputUser, setInputUser] = useState('octocat');
  const [user, setUser] = useState(inputUser);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const data = await fetchUsers(inputUser);
      setUser(data);
      if (user === 'octocat') {
        localStorage.setItem('octocat', JSON.stringify(data));
      }
      if (notFound) {
        const octocat = localStorage.getItem('octocat');
        setInputUser('octocat');
        setUser(JSON.parse(octocat));
      }
      if (data.message === 'Not Found') {
        setNotFound(true);
        const octocat = localStorage.getItem('octocat');
        setInputUser('octocat');
        setUser(JSON.parse(octocat));
      } else {
        setNotFound(false);
        setUser(data);
      }
    };
    fetchUser();
  }, [inputUser, notFound, user]);

  return (
    <Container
      sx={{
        backgroundColor: '#21262d',
        color: '#c9d1d9',
        width: '100%',
        height: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyItems: 'center',
      }}
    >
      <Searcher inputUser={inputUser} setInputUser={setInputUser} />
      {notFound ? <h1>Not Found</h1> : <UserCart user={user} />}
    </Container>
  );
};

export default App;
