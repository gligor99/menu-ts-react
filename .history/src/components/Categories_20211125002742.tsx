type Props = {
  categories: string[];
  filterItems: (category: string) => void;
  active: () => void;
};

const Categories: React.FC<Props> = ({ categories, filterItems, active }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}
            onClick={active}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
