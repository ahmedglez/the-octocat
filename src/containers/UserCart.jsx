/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react';
import { CardMedia, Grid } from '@mui/material';
import PrincipalInfo from '../components/PrincipalInfo';
import Description from '../components/Description';

const UserCart = (props) => {
  const { user } = props;
  const { avatar_url } = user;

  return (
    <Grid container spacing={2} padding={3}>
      <Grid item xs={3}>
        <CardMedia
          component="img"
          image={avatar_url}
          width="100px"
          alt="Github User"
        />
      </Grid>
      <Grid item xs={9}>
        <PrincipalInfo user={user} />
      </Grid>
      <Description user={user} />
    </Grid>
  );
};

export default UserCart;
