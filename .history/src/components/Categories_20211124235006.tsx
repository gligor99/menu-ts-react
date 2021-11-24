type Props = {
  categories: string[];
  filterItems: () => void;
};

const Categories: React.FC<Props> = ({ categories }) => {
  return (
    <div className="btn-container">
      {categories.map((item, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={filterItems(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
