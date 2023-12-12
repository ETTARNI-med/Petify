import React from "react";

interface Category {
  name: string;
  imageUrl: string;
}

interface GalleryProps {
  categories: Category[];
}

const CategoryData: Category[] = [
  {
    name: "big-deal",
    imageUrl: "../src/assets/deal-off.svg",
  },
  {
    name: "machine",
    imageUrl: "../src/assets/machine.svg",
  },
  {
    name: "fish",
    imageUrl: "../src/assets/hamster.svg",
  },
  {
    name: "Bird",
    imageUrl: "../src/assets/cat.svg",
  },
  {
    name: "Small pets",
    imageUrl: "../src/assets/fish.svg",
  },
];

const ProductsPreviewTest: React.FC<GalleryProps> = ({
  categories = CategoryData,
}) => {
  return (
    <section className=" h-full">
      <div className="text-left">
        <h2 className="font-bold text-6xl py-2 px-64 text-red-700 font-Poppins ">
          <span className="block text-black">Big</span> Deals
          <hr className="my-3 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
        </h2>
      </div>
      <div className="grid grid-rows-6 grid-cols-2 mx-auto pb-4 pt-0 gap-6 w-[80vw]">
        {categories.map((category, index) => (
          <div
            key={index}
            className={` ${getGridClass(
              index + 1
            )} relative overflow-hidden w-auto `}
          >
            <img
              className=" h-full object-cover"
              src={category.imageUrl}
              alt={category.name}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-secondcolor hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-full">
                Shop
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const getGridClass = (index: number): string => {
  switch (index) {
    case 1:
      return "row-span-4 col-span-1 bg-red-500"; // l3b f size kima bghiti o kheli size tswira kima hya la bghiti drtha 3la 7sab takhod dimesnion dyal div li hya fiha
    case 2:
      return "row-span-2 col-span-1 bg-blue-500 ";
    case 3:
      return "row-span-2 col-span-1 bg-yellow-500 ";
    case 4:
      return "row-span-2 col-span-1 bg-gray-500";
    case 5:
      return "row-span-2 col-span-1 bg-violet-500 ";
    default:
      return "";
  }
};

export default ProductsPreviewTest;
