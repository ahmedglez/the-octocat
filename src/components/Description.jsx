/* eslint-disable react/prop-types */
import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React, { Fragment } from 'react';
import PaperInformation from './PaperInformation';
import LocationInformation from './LocationInformation';

const Description = (props) => {
  const { user } = props;
  const { bio } = user;
  return (
    <Fragment >
      <Stack sx={{ justifyContent: 'center', alignItems: 'center' }}>
        {bio === null ? (
          <Typography>This profile has no description</Typography>
        ) : (
          <Typography variant="body1">{bio}</Typography>
        )}
      </Stack>
      <PaperInformation user={user} />
      <LocationInformation user={user} />
    </Fragment>
  );
};

export default Description;
