
const FilterCategoryItem = ({ categoryData, activeIndex, _id }) => {
  return (
    <div className={`filterCategory--container  ${activeIndex == _id ? "active" : ""}`}>
      <div className="filter--image">
        <img src={"http://localhost:1338" + categoryData?.image?.data?.attributes?.url} alt={categoryData?.title} />
      </div>
      <span>{categoryData?.title}.</span>
    </div>
  );
};

export default FilterCategoryItem;
