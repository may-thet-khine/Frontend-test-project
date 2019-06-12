import React from 'react';
import SearchBar from  '@opuscapita/react-searchbar';

export default class Search extends React.Component {
  render() {
  	function handleSearch(e) {
	    console.log('The link was clicked.');
	  }
    return (
      <SearchBar
        onSearch={handleSearch}
      />
    );
  }
}