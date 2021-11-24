const Categories = (categories: any) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return <h1 key={index}>{category}</h1>;
      })}
    </div>
  );
};

export default Categories;
