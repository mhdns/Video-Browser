/* eslint-disable react/forbid-prop-types */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import SearchContext from '../../context/searchContext';

const VideoItem = ({ video }) => {
  const searchContext = useContext(SearchContext);
  const { setSelectedVideo } = searchContext;
  const onClick = () => {
    setSelectedVideo(video);
  };
  return (
    <div tabIndex={0} role="button" className="video-item item" onClick={onClick} onKeyDown={onClick}>
      <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
      <div className="content">
        <div className="header">
          {video.snippet.title}
        </div>
      </div>
    </div>
  );
};

VideoItem.propTypes = {
  video: PropTypes.object.isRequired
};

export default VideoItem;
