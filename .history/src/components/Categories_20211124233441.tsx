type Props = {
  categories: string[];
};

const Categories: React.FC<Props> = ({ categories }) => {
  return (
    <div>
      {categories.map((item, index) => {
          return <h1 key={index}>{item}</h1>
      })}
    </div>
  );
};

export default Categories;
