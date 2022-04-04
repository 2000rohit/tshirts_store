import React from 'react'

const Pagination = ({ postPerPage, totalPages, paginate }) => {
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalPages / postPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <div>
      <ul
        className='pagination d-flex justify-content-center align-items-center'
        style={{ cursor: 'pointer' }}
      >
        {pageNumbers.map((number) => (
          <li key={number} className='page-item'>
            <div className='p-3 page-link' onClick={() => paginate(number)}>
              {number}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Pagination
