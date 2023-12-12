import { Filter, Product } from ".";
import Cards from "./Cards";

interface Props {
  ProductList: Product[];
  Filter: Filter;
  Category: string;
  SubCategory: string;
}

export default function Products({
  ProductList,
  Filter,
  Category,
  SubCategory,
}: Props) {
  return (
    <div className="flex flex-col w-full">
      {/* BreadCrumb and title for sm and bigger scrs */}
      <div className="w-1/4 hidden sm:flex justify-between">
        <span>Home</span>&gt;<span>{Category}</span>&gt;
        <span>{SubCategory}</span>
      </div>
      <div className="w-full hidden sm:flex justify-center text-3xl uppercase">
        <span>{SubCategory}</span>
      </div>
      <div className="grid justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Cards ProductList={ProductList} Filter={Filter} />
      </div>
    </div>
  );
}
