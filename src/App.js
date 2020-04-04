import './App.css';
import React from 'react';
import SearchBar from './components/search/SearchBar';
import SearchState from './context/SearchState';
import VideoList from './components/video/VideoList';

const App = () => (
  <SearchState>
    <div className="ui container">
      <SearchBar />
      <VideoList />
    </div>
  </SearchState>
);

export default App;
