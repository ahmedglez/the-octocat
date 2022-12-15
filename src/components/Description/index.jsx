/* eslint-disable react/prop-types */
import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React, { Fragment } from 'react';
import PaperInformation from '../PaperInformation';

const Description = (props) => {
  const { user } = props;
  const { bio } = user;
  return (
    <Fragment>
      <Stack>
        {bio === null ? (
          <Typography>This profile has no description</Typography>
        ) : (
          <Typography>{bio}</Typography>
        )}
      </Stack>
      <PaperInformation user={user} />
    </Fragment>
  );
};

export default Description;
