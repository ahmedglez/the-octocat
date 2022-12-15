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
      if (data.message === 'Not Found') {
        setNotFound(true);
        const octocat = localStorage.getItem('octocat');
        setInputUser('octocat');
        setUser(JSON.parse(octocat));
      } else {
        setUser(data);
      }
    };
    fetchUser();
  }, [inputUser, user]);

  return (
    <Container
      sx={{
        backgroundColor: '#21262d',
        color: '#c9d1d9',
        width: '100%',
        height: '500px',
        borderRadius: '16px',
        marginTop: '16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyItems: 'center',
      }}
    >
      <Searcher inputUser={inputUser} setInputUser={setInputUser} />
      <UserCart user={user} />
    </Container>
  );
};

export default App;
