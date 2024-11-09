import React from 'react';


const SearchPage = async (
  {searchParams}: { searchParams: Promise<{ q: string }> }
) => {
  const {q} = await searchParams;

  return <div>Search 페이지: {q}</div>;
};

export default SearchPage;
