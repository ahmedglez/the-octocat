import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import Searcher from './components/Searcher';

const { fetchUsers } = require('./services/users.services');

const App = () => {
  const [inputUser, setInputUser] = useState('octocat');
  const [user, setUser] = useState(null);


  useEffect(() => {
    const fetchUser = async () => {
      const data = await fetchUsers(inputUser);
      setUser(data);
    };
    fetchUser();
  }, [inputUser]);



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
    </Container>
  );
};

export default App;
