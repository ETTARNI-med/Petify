import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';

const SubcategoryCard = ({ subcategory }) => (
  <HoverCard>
    <HoverCardTrigger>
      <div className="px-2 py-1 hover:text-[#FFCC81] cursor-pointer">
        <span>{subcategory.subcategory_name}</span>
      </div>
    </HoverCardTrigger>
    <HoverCardContent>
      {/* Render any additional content for the subcategory card */}
    </HoverCardContent>
  </HoverCard>
);

const CategoryCards = ({ category, subcategories }) => (
  <HoverCard>
    <HoverCardTrigger>
      <Link to={`/subcategories/${category._id}`} unstable_viewTransition className="w-fit flex justify-between items-center sm:text-sm lg:text-base">
        {category.category_name} <ChevronDown />
      </Link>
    </HoverCardTrigger>
    <HoverCardContent>
      {subcategories.map(subcategory => (
        <SubcategoryCard key={subcategory._id} subcategory={subcategory} />
      ))}
    </HoverCardContent>
  </HoverCard>
);

const CardContainer = () => {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:4000/v1/categories')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
console.log(categories);
  useEffect(() => {
    axios.get('http://127.0.0.1:4000/v1/subcategories')
      .then(response => {
        setSubcategories(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
      {categories.map(category => {
        const categorySubcategories = subcategories.filter(subcategory => subcategory.category_id === category._id);
        return (
          <CategoryCards key={category._id} category={category} subcategories={categorySubcategories} />
        );
        
      })}
    </>
  );
};

export default CardContainer;