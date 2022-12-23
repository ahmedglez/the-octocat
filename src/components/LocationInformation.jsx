/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react';

import { Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import BusinessIcon from '@mui/icons-material/Business';

const LocationInformation = (props) => {
  const { user } = props;
  const { location, twitter_username, email, company } = user;
  return (
    <Grid
      container
      spacing={2}
      sx={{ marginTop: '15px', paddingBottom: '30px' }}
    >
      <Grid item xs={6} direction="row" spacing={2}>
        <Stack container direction="row" spacing={2}>
          <LocationOnIcon />
          <Typography>
            {location !== null ? location : 'not location added'}
          </Typography>
        </Stack>
      </Grid>
      <Grid container item xs={6} direction="row" spacing={2}>
        <Stack direction="row" spacing={2}>
          <TwitterIcon />
          <Typography>
            {twitter_username !== null ? twitter_username : 'not twitter added'}
          </Typography>
        </Stack>
      </Grid>
      <Grid container item xs={6} direction="row" spacing={2}>
        <Stack direction="row" spacing={2}>
          <EmailIcon />
          <Typography>{email !== null ? email : 'not email added'}</Typography>
        </Stack>
      </Grid>
      <Grid container item xs={6} direction="row" spacing={2}>
        <Stack direction="row" spacing={2}>
          <BusinessIcon />
          <Typography>
            {company !== null ? company : 'not company added'}
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default LocationInformation;
