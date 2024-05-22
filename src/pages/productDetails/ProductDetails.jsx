import { useEffect } from "react";
import BreadCrumbs from "../../components/breadCrumbs/BreadCrumbs";
import HeadLines from "../../components/headLines/HeadLines";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../reduxToolKit/slices/GetAllProducts";

const ProductDetails = () => {
  const { slug } = useParams();
  const { productDetails } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetails(slug));
  }, [slug]);

  return (
      <main className="productDetails">
        <BreadCrumbs />
        <HeadLines title={productDetails?.data?.attributes?.name} />
        <div className="productDetails--container">
          <div className="productDetails--image">
            <img src={"http://localhost:1338" + productDetails?.data?.attributes?.image?.data?.attributes?.url} alt={productDetails?.data?.attributes?.slug} />
          </div>
          <div className="productDetails--content">
            <h4>{productDetails?.data?.attributes?.name}</h4>
            <p>{productDetails?.data?.attributes?.description}</p>
            <span>
              {productDetails?.data?.attributes?.price} {productDetails?.data?.attributes?.price_formatting}
            </span>
            <div className="card--btn">
              <button>Add To Cart</button>
            </div>
          </div>
        </div>
      </main>
  )
}

export default ProductDetails
