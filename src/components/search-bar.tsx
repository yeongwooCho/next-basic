"use client";

import React from 'react';
import {useRouter} from "next/navigation";

const SearchBar = () => {
  const [search, setSearch] = React.useState('');
  const router = useRouter();

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  const onSubmitSearch = () => {
    // 검색 로직
    router.push(`/search?q=${search}`);
  }

  return (
    <div>
      <input type="text" placeholder="검색어를 입력하세요" value={search} onChange={onChangeSearch}/>
      <button onClick={onSubmitSearch}>검색</button>
    </div>
  );
};

export default SearchBar;
