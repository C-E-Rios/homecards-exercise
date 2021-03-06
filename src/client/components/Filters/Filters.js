import React, {useReducer, useState} from 'react';
import propTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

const INITIAL_STATE = {
  minimumPrice: 500,
};

const Form = styled.form`
  text-align: right;
  position: relative;
  top: 60px;
  padding: 20px 30px;
`;

function Filters({fetchData}) {
  const [isDirty, setIsDirty] = useState (false);
  const [filters, setFilters] = useReducer (
    (previousState, newState) => ({...previousState, ...newState}),
    INITIAL_STATE
  );

  function handleChange (event) {
    setFilters ({minimumPrice: event.target.value});
    setIsDirty (true);
  }

  function handleBlur (event) {
    const {value: minimumPrice} = event.target;
    if (minimumPrice && isDirty) fetchData (parseInt (minimumPrice));
    setIsDirty (false);
  }

  function handleSubmit (event) {
    event.preventDefault ();
  }

  return (
    <Form name="filters" onSubmit={handleSubmit} noValidate>
      <TextField
        id="minimumPrice"
        data-testid="minimumPrice"
        label="Minimum price per month"
        value={filters.minimumPrice}
        onChange={handleChange}
        onBlur={handleBlur}
        type="number"
        margin="normal"
        variant="outlined"
        required
      />
    </Form>
  );
}

Filters.propTypes = {
  fetchData: propTypes.func.isRequired
};

export default Filters;
