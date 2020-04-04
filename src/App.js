import './App.css';
import React from 'react';
import SearchBar from './components/search/SearchBar';
import SearchState from './context/SearchState';
import VideoList from './components/video/VideoList';
import VideoDetail from './components/video/VideoDetail';

const App = () => (
  <SearchState>
    <div className="ui container">
      <SearchBar />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail />
          </div>
          <div className="five wide column">
            <VideoList />
          </div>
        </div>
      </div>

    </div>
  </SearchState>
);

export default App;
