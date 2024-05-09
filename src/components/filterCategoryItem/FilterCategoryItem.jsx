import { useState } from "react";

const FilterCategoryItem = () => {
  const [activeFilter, setActiveFilter] = useState(false);
  return (
    <div className={`filterCategory--container  ${activeFilter ? "active" : ""}`} onClick={() => setActiveFilter(!activeFilter)}>
      <div className="filter--image">
        <img src='/src/assets/images/Hero-Banner.jpg' />
      </div>
      <span>lorem any thing</span>
    </div>
  );
};

export default FilterCategoryItem;
