const Categories = (categories: any) => {
  return (
    <div className="btn-container">
      {categories.map((category: string, index: number) => {
        return <h1 key={index}>{category}</h1>;
      })}
    </div>
  );
};

export default Categories;
