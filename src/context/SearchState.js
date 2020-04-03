import React, { useReducer } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import SearchContext from './searchContext';
import searchReducer from './searchReducer';
import {
  SET_SEARCHTEXT,
  CLEAR_SEARCHTEXT,
  GET_VIDEOS,
  CLEAR_VIDEOS
} from '../types';


const SearchState = ({ children }) => {
  const intialState = {
    searchText: '',
    videos: [],
    loading: false
  };

  const [state, dispatch] = useReducer(searchReducer, intialState);

  // Set searchText
  const setSearchText = (text) => {
    dispatch({ action: SET_SEARCHTEXT, payload: text });
  };

  // Clear searchText
  const clearSearchText = () => {
    dispatch({ action: CLEAR_SEARCHTEXT });
  };
  // Get Videos
  const getVideos = (text) => {
    dispatch({ action: GET_VIDEOS });
  };

  // Clear Videos
  const clearVideos = () => {
    dispatch({ action: CLEAR_VIDEOS });
  };

  return (
    <SearchContext.Provider
      value={{
        searchText: state.searchText,
        videos: state.videos,
        setSearchText,
        clearSearchText,
        getVideos,
        clearVideos
      }}
    >
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

export default SearchState;
