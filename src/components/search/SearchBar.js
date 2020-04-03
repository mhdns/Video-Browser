import React from 'react';

const SearchBar = () => {
  const text = 'SearchBar';
  return (
    <div className="search-bar ui segment">
      <form className="ui form">
        <label htmlFor="search" className="video search">
          <input name="search" type="text" value={text} />
        </label>
      </form>
    </div>
  );
};

export default SearchBar;
