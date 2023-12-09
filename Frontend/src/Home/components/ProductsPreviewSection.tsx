import React from "react";

export default function ProductsPreviewSection() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl dark:text-primarycolor">
            Keep Your Pet Warm During Winter
          </h2>

          <p className="mx-auto mt-4 max-w-md text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            praesentium cumque iure dicta incidunt est ipsam, officia dolor
            fugit natus?
          </p>
        </header>

        <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <li>
            <a href="#" className="group relative block hover:brightness-[.80] duration-150 transition-all">
              <img
                src="https://i.redd.it/uazw41fvzvbz.jpg"
                alt=""
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">
                  Browse Cats Products
                </h3>

                <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  Go Now
                </span>
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="group relative block hover:brightness-[.80] duration-150 transition-all">
              <img
                alt=""
                src="https://media.istockphoto.com/id/1436705361/photo/hungry-hamster-standing-near-bowl-of-dry-food.jpg?s=612x612&w=0&k=20&c=0Je2m5OilQpHVOp5dh-ZXnQbDUqgUlYi7K-5gAI-PHY="
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">
                  Other Pets Products
                </h3>

                <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  Go Now
                </span>
              </div>
            </a>
          </li>

          <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <a href="#" className="group relative block hover:brightness-[.80] duration-150 transition-all">
              <img
                src="https://time.com/shopping/static/38c709b8250575e9639a754d635689a6/57e17/dog-sleeping-in-bed.jpg"
                alt=""
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">
                  Browse Dogs Products
                </h3>

                <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  Go Now
                </span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
