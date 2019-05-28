import React from 'react';
import styled from 'styled-components';

// Needs to be mocked, breaking test
// import {useTheme} from '@material-ui/styles';

import Homecard from '../Homecard/Homecard';
import Filters from '../Filters/Filters';

import useHomecardList from './useHomecardList';

const INITIAL_STATE = {
  isLoaded: false,
  isFetching: false,
  homecards: null,
  error: null,
  minimumPrice: 500,
};

function HomecardList () {
  const {state, fetchData} = useHomecardList (INITIAL_STATE);
  // const {header} = useTheme ();

  const Main = styled.main`
    position: relative;
    ${/* height: calc(100vh - ${header.height} - 120px); */ ''}
    height: calc(100vh - 60px - 120px);
    top: 60px;
    overflow: auto;
    padding: 0 30px;
  `;

  return (
    <React.Fragment>
      <Filters
        fetchData={fetchData}
        minimumPrice={state.minimumPrice}
      />
      <Main>
        {state.error
          ? <h1>{`Error: ${state.error.message}`}</h1>
          : state.isFetching
              ? <h1>Loading...</h1>
              : state.isLoaded
                  ? <section data-testid="homecards">
                      {state.homecards.map (homecard => (
                        <Homecard
                          key={homecard.id}
                          id={homecard.id}
                          title={homecard.title}
                          description={homecard.description}
                          currencySymbol={homecard.currencySymbol}
                          imgSrc={homecard.mainPhotoUrl}
                          pricePerMonth={homecard.pricePerMonth}
                        />
                      ))}
                    </section>
                  : ''}
      </Main>
    </React.Fragment>
  );
}

export default HomecardList;
