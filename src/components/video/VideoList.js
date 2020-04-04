import React, { useContext } from 'react';
import SearchContext from '../../context/searchContext';
import VideoItem from './VideoItem';

const VideoList = () => {
  const searchContext = useContext(SearchContext);
  const { videos } = searchContext;
  const renderList = (vids) => {
    if (vids.length) {
      return vids.map((vid) => <VideoItem video={vid} key={vid.id.videoId} />);
    }
    return 'No Videos to display';
  };

  return (
    <div className="ui relaxed divided list">
      {renderList(videos)}
    </div>
  );
};

export default VideoList;
