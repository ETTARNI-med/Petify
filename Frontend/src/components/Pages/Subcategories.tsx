import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Subcategories = () => {
  const Card = ({ name, imageUrl, link }) => (
    <Link to={link} rel="noopener noreferrer">
      <div className="flex flex-col items-center">
        <div className="rounded-full overflow-hidden border-2 border-red-300 mb-2">
          <img src={imageUrl} alt={name} className="w-40 h-40 object-cover" />
        </div>
        <h3 className="text-xl font-bold">{name}</h3>
      </div>
    </Link>
  );

  const { categoryId } = useParams();
  const [subcategories, setSubcategories] = useState([
    {
      _id: "",
      subcategory_name: "",
      category_id: "",
      active: true,
      subcategory_image: "",
    },
  ]);
  const [categoryName, setCategoryName] = useState("");
  console.log(categoryId);
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:4000/v1/categories/${categoryId}`)
      .then((response) => {
        setCategoryName(response.data.category_name);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryId]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:4000/v1/subcategories/${categoryId}`)
      .then((response) => {
        setSubcategories(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryId]);

  return (
    <div className="grid  w-full">
      <div className="w-5/6 mx-auto  mt-8 mb-28 glass bg-gradient-to-tr center from-opacity-10 to-transparent backdrop-filter backdrop-blur-md border-1 border-white bg-white bg-opacity-10 rounded-lg shadow-md">
        <div className="text-3xl font-bold mb-6 pt-6 shadow- text-center">
          {categoryName}
        </div>
        <hr className="w-1/4 mx-auto  border-pink-200 mb-20" />
        <div className="flex justify-center space-x-24 mb-8 pb-8">
          {subcategories.map((subcategory, index) => (
            <Card
              key={index}
              name={subcategory.subcategory_name}
              imageUrl={subcategory.subcategory_image}
              link={`/subcategory/${categoryId}/${subcategory._id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subcategories;
