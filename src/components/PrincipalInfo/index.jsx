/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import { Stack, Typography } from '@mui/material';
import React, { Fragment } from 'react';

const PrincipalInfo = (props) => {
  const { user } = props;
  const { name, login, created_at } = user;
  return (
    <Fragment>
      <Stack>
        <Typography>Name: {name}</Typography>
        <Typography>
          Contribuiting since: {new Date(created_at).toLocaleDateString()}
        </Typography>
      </Stack>
      <Typography style={{ fontWeight: 'bold' }}>@{login}</Typography>
    </Fragment>
  );
};

export default PrincipalInfo;
