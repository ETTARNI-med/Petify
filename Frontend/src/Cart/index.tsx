import Quantity from "./quantity";
import { Trash2 } from "lucide-react";
import Product from "../assets/133937_MAIN._AC_SL1200_V1691676744_.avif";

const Cart = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Your Cart
            </h1>
          </header>

          <div className="mt-8">
            <ul className="space-y-4">
              <li className="flex items-center gap-4 m-5">
                <div className="card card-side bg-base-100 ">
                  <figure>
                    <img src={Product} alt="Movie" className="w-36"/>
                  </figure>
                  <div className="mt-3">
                      <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                        American Journey Minced Poultry in Gravy Variety Pack
                        Grain-Free Canned Cat Food
                      </h3>

                      <p className="mt-1 text-sm text-gray-700">$150</p>
                    </div>
                </div>

                <div className="flex flex-1 items-center justify-end gap-2">
                  <Quantity />

                  <button className="text-gray-600 transition hover:text-red-600">
                    <Trash2 />
                  </button>
                </div>
              </li>

              <li className="flex items-center gap-4">
              <div className="card card-side bg-base-100 ">
                  <figure>
                    <img src={Product} alt="Movie" className="w-36"/>
                  </figure>
                  <div className="mt-3">
                      <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                        American Journey Minced Poultry in Gravy Variety Pack
                        Grain-Free Canned Cat Food
                      </h3>

                      <p className="mt-1 text-sm text-gray-700">$150</p>
                    </div>
                </div>

                <div className="flex flex-1 items-center justify-end gap-2">
                  <Quantity />

                  <button className="text-gray-600 transition hover:text-red-600">
                    <Trash2 />
                  </button>
                </div>
              </li>

              <li className="flex items-center gap-4">
              <div className="card card-side bg-base-100 ">
                  <figure>
                    <img src={Product} alt="Movie" className="w-36"/>
                  </figure>
                  <div className="mt-3">
                      <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                        American Journey Minced Poultry in Gravy Variety Pack
                        Grain-Free Canned Cat Food
                      </h3>

                      <p className="mt-1 text-sm text-gray-700">$150</p>
                    </div>
                </div>

                <div className="flex flex-1 items-center justify-end gap-2">
                  <Quantity />

                  <button className="text-gray-600 transition hover:text-red-600">
                    <Trash2 />
                  </button>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div className="w-screen max-w-lg space-y-4">
                <dl className="space-y-0.5 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <dt>Subtotal</dt>
                    <dd>£250</dd>
                  </div>

                  <div className="flex justify-between">
                    <dt>VAT</dt>
                    <dd>£25</dd>
                  </div>

                  <div className="flex justify-between">
                    <dt>Discount</dt>
                    <dd>-£20</dd>
                  </div>

                  <div className="flex justify-between !text-base font-medium">
                    <dt>Total</dt>
                    <dd>£200</dd>
                  </div>
                </dl>

                <div className="flex justify-end">
                  <a
                    href="#"
                    className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                  >
                    Checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
