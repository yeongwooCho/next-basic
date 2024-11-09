import React from 'react';

const BookDetailPage = async (
  {params}: { params: Promise<{ id: string }> }
) => {
  const {id} = await params;

  return (
    <div>
      book/[{id}] 페이지
    </div>
  );
};

export default BookDetailPage;
