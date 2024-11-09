"use client";

import React from 'react';

const SearchBar = () => {
  const [search, setSearch] = React.useState('');

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  return (
    <div>
      <input type="text" placeholder="검색어를 입력하세요" onChange={onChangeSearch}/>
      <button>검색</button>
    </div>
  );
};

export default SearchBar;
