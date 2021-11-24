import { ReactChild, ReactFragment, ReactPortal, Key } from "react";

const Categories = (categories: any) => {
  return (
    <div className="btn-container">
      {categories.map((category: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined, index: Key | null | undefined) => {
        return <h1 key={index}>{category}</h1>;
      })}
    </div>
  );
};

export default Categories;
