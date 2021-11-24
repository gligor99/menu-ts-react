type Props = {
  categories: string[];
};

const Categories: React.FC<Props> = ({ categories }) => {
  return (
    <div className="btn-container">
      {categories.map((item, index) => {
          return <button type="button" className="filter-btn" key={index}>
              {item}
          </button>
      })}
    </div>
  );
};

export default Categories;
