import { useDispatch, useSelector } from 'react-redux'
import Banner from '../../components/banner/Banner'
import MostSelling from '../../components/mostSelling/MostSelling'
import { useEffect } from 'react'
import { getAllProducts } from '../../reduxToolKit/slices/GetAllProducts'

const Home = () => {
  const { erros, isLoading, productData } = useSelector(state => state.products)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div>
      <Banner />
      <MostSelling productData={productData} />
    </div>
  )
}

export default Home
