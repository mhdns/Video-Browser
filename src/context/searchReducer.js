import {
  SET_SEARCHTEXT,
  CLEAR_SEARCHTEXT,
  GET_VIDEOS,
  CLEAR_VIDEOS,
  SET_SELECTED_VIDEO
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case CLEAR_VIDEOS:
      return {
        ...state,
        videos: []
      };
    case CLEAR_SEARCHTEXT:
      return {
        ...state,
        searchText: ''
      };
    case GET_VIDEOS:
      return {
        ...state,
        videos: action.payload,
        selectedVideo: action.payload[0]
      };
    case SET_SEARCHTEXT:
      return {
        ...state,
        searchText: action.payload
      };
    case SET_SELECTED_VIDEO:
      return {
        ...state,
        selectedVideo: action.payload
      };
    default:
      return { ...state };
  }
};
