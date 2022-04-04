import axios from 'axios'
export const getProduct = () => async (dispatch) => {
  dispatch({ type: 'CASE_GETPRODUCT_REQUEST' })
  try {
    const request = await axios.get('/api/product')
    dispatch({ type: 'CASE_GETPRODUCT_SUCCESS', payload: request.data })
  } catch (error) {
    dispatch({ type: 'CASE_GETPRODUCT_FAILED', payload: error })
  }
}
