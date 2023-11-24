
export default function ProductCard({imgLink,title,price,description}:{imgLink: string,title: string,price:number,description:string}) {
  return (
    <div className="relative flex flex-col text-gray-700 shadow-md w-80 rounded-xl bg-clip-border bg-white dark:bg-primarycolor">
      <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-80 rounded-xl bg-clip-border">
        <img
          src={imgLink}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <p className="block font-sans text-lg antialiased font-medium leading-relaxed text-blue-gray-900">
            {title}
          </p>
          <p className="block font-sans text-xl antialiased font-medium leading-relaxed text-blue-gray-900">
            ${price}
          </p>
        </div>
        <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
          {description}
        </p>
      </div>
      <div className="p-6 pt-0">
        <button
          className="block w-full select-none rounded-md bg-secondcolor dark:bg-background dark:text-white dark:hover:brightness-95 hover:brightness-105 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all  hover:scale-105 focus:scale-105 duration-200 ease-in-out focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
