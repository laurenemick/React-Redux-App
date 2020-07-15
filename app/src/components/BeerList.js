import React, { useEffect } from 'react';
import { connect } from "react-redux";

import { fetchBeers } from "../store/actions";

const BeerList = props => {
    useEffect(() => {
        // call the action creator
        props.fetchBeers();
      }, []);

    return (
        <div className="beerList">
            {props.isLoading && <h4>Loading mission data...</h4>}
            {props.error && (
                <p className="error">Something went wrong, please try again later... {props.error}</p>
            )}
            {props.beers.length > 0 && (
                <div>
                    {props.beers.map(beer => (
                    <div key={beer.id}>{beer.name}</div>
                    ))}
                </div>
            )}   
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        beers: state.beers,
        error: state.error
    }
};

export default connect(
    mapStateToProps,
    { fetchBeers }
)(BeerList);