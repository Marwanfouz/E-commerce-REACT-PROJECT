import { useEffect, useState } from 'react';
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs'
import Card from '../../components/card/Card'
import FilterCategoryItem from '../../components/filterCategoryItem/FilterCategoryItem'
import HeadLines from '../../components/headLines/HeadLines'
import { useDispatch, useSelector } from "react-redux";
import { filterCategory, getAllCategories } from '../../reduxToolKit/slices/GetAllProducts';
import { Swiper, SwiperSlide } from "swiper/react";


const Shop = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTitle, setActiveTitle] = useState("Burgers");
  const { allCategories, filterCategoryItems } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(filterCategory(activeTitle));
  }, [dispatch, activeTitle]);

  return (
    <main className='shop'>
      <BreadCrumbs />
      <HeadLines subTitle={"Shop by category"} title={"Shop by category"} />
        <div className="filter--category">
          <Swiper
            onClick={(e) => {
              setActiveIndex(e.clickedIndex);
              setActiveTitle(allCategories?.data[e.clickedIndex]?.attributes?.title);
            }}
            slidesPerView={"auto"}
            spaceBetween={40}
            enabled={true}
            centeredSlides={false}
            breakpoints={{
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
                centeredSlides: true,
              },
            }}>
            {allCategories?.data?.map((data, _id) => (
              <SwiperSlide key={_id}>
                <FilterCategoryItem categoryData={data?.attributes} activeIndex={activeIndex} _id={_id} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="shop--items">{filterCategoryItems?.data?.map((data, _id) => data?.attributes.products?.data?.map((data, _id) => <Card productData={data?.attributes} key={_id} />))}</div>
    </main>
  )
}

export default Shop
