import React, { useReducer } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import SearchContext from './searchContext';
import searchReducer from './searchReducer';
import {} from '../types';


const SearchState = ({ children }) => {
  const intialState = {};

  const [state, dispatch] = useReducer(searchReducer, intialState);
  return (
    <SearchContext.Provider>
      {children}
    </SearchContext.Provider>
  );
};

SearchState.defaultProps = {
  children: <div />
};

SearchState.propTypes = {
  children: PropTypes.node
};
