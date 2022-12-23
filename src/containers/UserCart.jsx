/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react';
import { CardMedia, Grid, Stack } from '@mui/material';
import PrincipalInfo from '../components/PrincipalInfo';
import Description from '../components/Description';

const UserCart = (props) => {
  const { user } = props;
  const { avatar_url } = user;

  return (
    <Grid
      container
      spacing={2}
      sx={{ marginTop: '20px' }}
      direction={{
        xs: 'column',
        sm: 'row',
      }}
    >
      <Grid
        item
        xs={3}
        width={{
          xs: '80%',
          sm: 'auto',
        }}
        margin={{
          xs: '0 auto',
          sm: '0px',
        }}
        justifyContent={{
          xs: 'center',
          sm: 'flex-start',
        }}
      >
        <CardMedia
          component="img"
          image={avatar_url}
          sx={{ borderRadius: '50%', marginLeft: 'auto' }}
          alt="Github User"
        />
      </Grid>
      <Grid item xs={9}>
        <Stack direction="column" spacing={3}>
          <PrincipalInfo user={user} />
          <Description marginTop="50px" user={user} />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default UserCart;
