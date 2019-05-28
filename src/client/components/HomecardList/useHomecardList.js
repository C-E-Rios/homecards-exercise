import {useEffect, useReducer, useRef} from 'react';
import axios from 'axios';

function useHomecardList (INITIAL_STATE) {
  const [state, setState] = useReducer (
    (previousState, newState) => ({...previousState, ...newState}),
    INITIAL_STATE
  );

  async function fetchData (minimumPrice) {
    setState ({isFetching: true, error: null, minimumPrice});
    try {
      const result = await axios.get (
        `/api/v1/homecards?minimumPrice=${minimumPrice}`
      );
      setState ({
        homecards: result.data.homecards,
        isLoaded: true,
        error: null,
      });
    } catch (error) {
      setState ({error});
    }
    setState ({isFetching: false});
  }

  const ref = useRef ();
  useEffect (
    () => {
      if (ref.current) {
        ref.current = true;
      } else {
        fetchData (INITIAL_STATE.minimumPrice);
      }
    },
    [INITIAL_STATE.minimumPrice]
  );

  return {
    state,
    setState,
    fetchData,
  };
}

export default useHomecardList;
