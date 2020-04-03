import React from 'react';
import SearchBar from './components/search/SearchBar';
import SearchState from './context/SearchState';

const App = () => (
  <SearchState>
    <div className="ui container">
      <SearchBar />
    </div>
  </SearchState>
);

export default App;
