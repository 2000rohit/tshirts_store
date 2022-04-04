import React, { useEffect, useState } from 'react'

import Tshirt from '../Component/Tshirt'

import { getProduct } from '../Redux/Action/action'
import { useSelector, useDispatch } from 'react-redux'
import Loading from '../Component/Loading'
import Error from '../Component/Error'

import Pagination from '../Component/Pagination'

const HomeScreen = () => {
  const mystate = useSelector((state) => state.getApiReducer)
  const { products, loading, error } = mystate

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProduct())
  }, [dispatch])

  // get current page
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage] = useState(6)
  const indexOfLastPage = currentPage * postPerPage
  const indexOfFirstPage = indexOfLastPage - postPerPage
  const product = products.slice(indexOfFirstPage, indexOfLastPage)

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <main
      style={{ padding: '4rem', display: 'flex', justifyContent: 'center' }}
    >
      {loading ? (
        <Loading />
      ) : error ? (
        <Error error='Something went wrong' />
      ) : (
        <div
          className='row d-flex justify-content-center align-items-center'
          style={{ minHeight: '100vh' }}
        >
          {product.map((item, index) => {
            return (
              <div key={index} className='col-lg-4 col-md-6 col-sm-12'>
                <div className='d-flex justify-content-center'>
                  <Tshirt item={item} />
                </div>
              </div>
            )
          })}
          <Pagination
            postPerPage={postPerPage}
            totalPages={products.length}
            paginate={paginate}
          />
        </div>
      )}
    </main>
  )
}

export default HomeScreen
