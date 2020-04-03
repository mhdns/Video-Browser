import React, { useContext, useState } from 'react';
import SearchContext from '../../context/searchContext';

const SearchBar = () => {
  const searchContext = useContext(SearchContext);
  const { searchText } = searchContext;
  const [text, setText] = useState('');

  const onChange = (event) => { setText(event.target.value); };

  const onSubmit = (event) => {
    if (text !== '') {
      event.preventDefault();
      console.log(text);
    }
  };
  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label htmlFor="search" className="video search">
            Video Search
            <input name="search" type="text" value={text} onChange={onChange} />
          </label>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
