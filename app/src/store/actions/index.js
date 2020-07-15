import axios from 'axios';

// ACTION TYPES
export const FETCH_BEERS_START = "FETCH_BEERS_START";
export const FETCH_BEERS_SUCCESS = "FETCH_BEERS_SUCCESS";
export const FETCH_BEERS_FAILURE = "FETCH_BEERS_FAILURE";

// ACTION CREATORS
export const fetchBeers = () => {
    return dispatch => {
        dispatch({ type: FETCH_BEERS_START });

        axios
            .get("https://api.punkapi.com/v2/beers/")
            .then(res => {
                // console.log(res.data)
                dispatch({ type: FETCH_BEERS_SUCCESS, payload: res.data})
            })
            .catch(err => {
                dispatch({ type: FETCH_BEERS_FAILURE, payload: err.message })
            })
   
    }
}