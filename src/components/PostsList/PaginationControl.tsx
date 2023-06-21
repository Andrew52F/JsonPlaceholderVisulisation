import React from 'react';
import { Pagination } from 'react-bootstrap';
import { PaginationControlProps } from '../../types/features';

const PaginationControl: React.FC<PaginationControlProps> = (
  { pagesCount, activePage, setPage },
) => (
  <Pagination className='d-flex justify-content-center align-items-center mb-0'>
    {activePage !== 1 && <Pagination.First onClick={() => setPage(1)} />}
    {Array.from({ length: pagesCount }, (_, i) => i + 1).map((pageNumber) => (
      <Pagination.Item
        key={pageNumber}
        onClick={() => setPage(pageNumber)}
        active={pageNumber === activePage}
      >
        {pageNumber}
      </Pagination.Item>
    ))}
    {activePage !== pagesCount && <Pagination.Last onClick={() => setPage(pagesCount)} />}
  </Pagination>
);

export default PaginationControl;
