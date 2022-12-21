/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import { Paper, Stack, Typography } from '@mui/material';
import React from 'react';

const PaperInformation = (props) => {
  const { user } = props;
  const { followers, following, public_repos } = user;
  return (
    <Paper
      elevation={3}
      sx={{
        marginTop: '30px',
        borderRadius: '5px',
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.95)',
      }}
    >
      <Stack
        spacing={2}
        direction="row"
        sx={{ justifyContent: 'space-evenly', p: 2 }}
        backgroundColor="#f0f6fc"
        borderRadius="20px"
      >
        <Stack>
          <Typography sx={{ fontWeight: 'bold' }}>Followers</Typography>
          <Typography>{followers}</Typography>
        </Stack>
        <Stack>
          <Typography sx={{ fontWeight: 'bold' }}>Following</Typography>
          <Typography>{following}</Typography>
        </Stack>
        <Stack>
          <Typography sx={{ fontWeight: 'bold' }}>Public Repos</Typography>
          <Typography>{public_repos}</Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default PaperInformation;
