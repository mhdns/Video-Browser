import React, { useContext } from 'react';
import SearchContext from '../../context/searchContext';

const VideoDetail = () => {
  const searchContext = useContext(SearchContext);
  const { selectedVideo } = searchContext;
  const renderDetails = () => {
    if (selectedVideo) {
      return (
        <>
          <div className="ui embed">
            <iframe title="video player" src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`} frameBorder="0" />
          </div>
          <div className="ui segment">
            <h4 className="ui header">{selectedVideo.snippet.title}</h4>
            <p>{selectedVideo.snippet.description}</p>
          </div>
        </>
      );
    }
    return <div />;
  };

  return (
    <div>
      {renderDetails()}
    </div>
  );
};

export default VideoDetail;
