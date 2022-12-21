/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import { Stack, Typography } from '@mui/material';
import React from 'react';

const PrincipalInfo = (props) => {
  const { user } = props;
  const { name, login, created_at } = user;
  const createdDate = new Date(created_at);
  const dateString = `${createdDate.toLocaleDateString()}`;
  return (
    <Stack
      sx={{ justifyContent: 'space-between ' }}
      direction={{
        xs: 'column',
        sm: 'row',
      }}
    >
      <Stack>
        <Typography margin={0} variant="h4">
          {name}
        </Typography>
        <Typography v>
          <strong>{`@${login}`}</strong>
        </Typography>
      </Stack>
      <Typography>
        Contributing since:
        <strong> {dateString}</strong>
      </Typography>
    </Stack>
  );
};

export default PrincipalInfo;
