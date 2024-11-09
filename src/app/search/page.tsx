import React from 'react';


const SearchPage = async (
  {searchParams}: { searchParams: Promise<{ q: string }> }
) => {
  const {q} = await searchParams;

  return (
    <div>
      {q}
      검색 페이지
    </div>
  );
};

export default SearchPage;
