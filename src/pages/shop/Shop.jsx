import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs'
import Card from '../../components/card/Card'
import FilterCategoryItem from '../../components/filterCategoryItem/FilterCategoryItem'
import HeadLines from '../../components/headLines/HeadLines'

const Shop = () => {
  return (
    <main className='shop'>
      <BreadCrumbs />
      <HeadLines subTitle={"Shop by category"} title={"Shop by category"} />
      <div className='filter--category'>
      <FilterCategoryItem />
      </div>
      <div className="shop--items">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  )
}

export default Shop
