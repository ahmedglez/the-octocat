/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import { Paper, Stack, Typography } from '@mui/material';
import React from 'react';

const PaperInformation = (props) => {
  const { user } = props;
  const { followers, following, public_repos } = user;
  return (
    <Paper elevation={3}>
      <Stack>
        <Stack>
          <Typography>Followers</Typography>
          <Typography>{followers}</Typography>
        </Stack>
        <Stack>
          <Typography>Following</Typography>
          <Typography>{following}</Typography>
        </Stack>
        <Stack>
          <Typography>Public Repos</Typography>
          <Typography>{public_repos}</Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default PaperInformation;
