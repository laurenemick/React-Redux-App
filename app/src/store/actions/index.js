import axios from 'axios';

// ACTION TYPES
export const FETCH_BEERS_START = "FETCH_BEERS_START";

// ACTION CREATORS
export const fetchBeers = () => {
    return dispatch => {
        dispatch({ type: FETCH_BEERS_START });

        axios
            .get("https://api.punkapi.com/v2/beers/")
            .then(res => {
                console.log(res.data)
            });
            // .catch(err => {
            //     err
            // })
    }
}