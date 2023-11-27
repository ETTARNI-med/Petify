import Cards from "./Cards";

interface Props {
  ProductList: {
    sku: string;
    product_image: string;
    product_name: string;
    subcategory_id: string;
    short_description: string;
    long_description: string;
    price: number;
    discount_price: number;
    options: string[];
    active: boolean;
  }[];
  Filter: {
    colors: string | string[];
    ages: string | string[];
    price: number[];
  };
}

export default function Products({ ProductList, Filter }: Props) {
  console.log(Filter);
  return (
    <div className="flex flex-col w-full">
      {/* BreadCrumb and title for sm and bigger scrs */}
      <div className="w-1/4 hidden sm:flex justify-between">
        <span>breadcrumb</span>&gt;<span>goes</span>&gt;<span>here</span>&gt;
        <span>a</span>&gt;<span>ba</span>&gt;<span>mohammed</span>
      </div>
      <div className="w-full hidden sm:flex justify-center text-3xl uppercase">
        <span>chi title hna!</span>
      </div>
      <div className="grid justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Cards ProductList={ProductList} Filter={Filter} />
      </div>
    </div>
  );
}
