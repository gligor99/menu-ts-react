type Props = {
  categories: string[];
  filterItems: (category: string) => void;
};

const Categories: React.FC<Props> = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(categorys)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
