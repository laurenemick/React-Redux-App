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
            <p>Testing Beer List</p>
            
        </div>
    )
};

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        beers: state.beers,
        error: state.err
    }
};

export default connect(
    mapStateToProps,
    { fetchBeers }
)(BeerList);