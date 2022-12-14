/* eslint-disable react/prop-types */
/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Stack, TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const WhiteBorderTextField = styled(TextField)`
  .white-label {
    color: #afbbc7 !important;
  }
  .MuiOutlinedInput-root {
    &::placeholder {
      color: #c9d1d9;
    }

    fieldset {
      border-color: #c9d1d9;
      border-radius: 16px;
    }
    &:hover fieldset {
      border-color: #c9d1d9;
    }
  }

  & label.Mui-focused {
    color: #c9d1d9;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #c9d1d9;
    }
  }
`;

const Searcher = (props) => {
  const [valueInput, setValueInput] = useState('');
  const { setInputUser } = props;

  const handleChange = (e) => {
    setValueInput(e.target.value);
  };

  const handleSubmit = () => {
    setInputUser(valueInput);
  };

  return (
    <Stack
      direction="row"
      sx={{
        margin: '0 auto',
        marginTop: '30px',
        width: '100%',
        minWidth: '320px',
        height: '50px',
        color: '#c9d1d9',
      }}
    >
      <WhiteBorderTextField
        id="outlined-basic"
        label="github-username"
        placeholder="ahmedglez"
        variant="outlined"
        size="small"
        value={valueInput}
        onInput={handleChange}
        InputLabelProps={{
          className: 'white-label',
          style: { color: '#c9d1d9' },
        }}
        InputProps={{
          className: 'white-label',
          style: { width: '100%' },
        }}
        sx={{
          width: '90%',
          height: '50px',
        }}
      />
      <IconButton
        onClick={handleSubmit}
        sx={{
          width: '30px',
          height: '30px',
          left: '-40px',
          top: '10px',
          backgroundColor: 'transparent',
          color: '#c9d1d9',
        }}
      >
        <SearchIcon />
      </IconButton>
    </Stack>
  );
};

export default Searcher;
