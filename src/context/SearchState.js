import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import youtube from '../utils/youtube';
import SearchContext from './searchContext';
import searchReducer from './searchReducer';
import {
  SET_SEARCHTEXT,
  CLEAR_SEARCHTEXT,
  GET_VIDEOS,
  CLEAR_VIDEOS,
  SET_SELECTED_VIDEO
} from '../types';


const SearchState = ({ children }) => {
  const intialState = {
    searchText: '',
    videos: [],
    selectedVideo: null,
    loading: false
  };

  const [state, dispatch] = useReducer(searchReducer, intialState);

  // Set searchText
  const setSearchText = (text) => {
    dispatch({ type: SET_SEARCHTEXT, payload: text });
  };

  // Clear searchText
  const clearSearchText = () => {
    dispatch({ type: CLEAR_SEARCHTEXT });
  };

  // Get Videos
  const getVideos = async (text) => {
    const KEY = 'AIzaSyAG9aiEHnVLeRq6NeC1VYGs4iu_Z6fZ8Pw';
    const res = await youtube.get('/search', {
      params: {
        q: text,
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
      }
    });

    const videos = res.data.items;

    dispatch({ type: GET_VIDEOS, payload: videos });
  };

  // Set selectedVideo
  const setSelectedVideo = (video) => {
    dispatch({ type: SET_SELECTED_VIDEO, payload: video });
  };
  // Get one Video
  const getVideo = () => null;

  // Clear Videos
  const clearVideos = () => {
    dispatch({ type: CLEAR_VIDEOS });
  };

  return (
    <SearchContext.Provider
      value={{
        searchText: state.searchText,
        videos: state.videos,
        selectedVideo: state.selectedVideo,
        setSearchText,
        clearSearchText,
        getVideos,
        clearVideos,
        setSelectedVideo,
        getVideo
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
