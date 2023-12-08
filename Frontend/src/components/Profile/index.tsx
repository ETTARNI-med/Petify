import { ShoppingCart, User2Icon } from "lucide-react";
import TabsComponent from "./components/TabsComponent";
import UserInfo from "./components/UserInfo";
import OrdersInfo from "./components/OrdersInfo";

export default function Profile() {
  const items = [
    {
      label: "Profile",
      content: (
        <div className="mt-3 md:mt-5 xl:mt-6 w-full px-4 md:px-6 xl:px-9 2xl:px-14 ">
          <UserInfo />
        </div>
      ),
      icon: <User2Icon size={40} />,
    },
    { label: "Orders", content: <div className="w-screen mt-3 md:mt-5 xl:mt-6 px-4 md:px-6 xl:px-9 2xl:px-14 "><OrdersInfo/></div>, icon: <ShoppingCart size={40} /> },
  ];
  return (
    <section className="px-2 space-y-4 md:space-y-6 xl:space-y-9 mb-4 md:mb-5 xl:mb-7 ">
      <div className="md:px-2 xl:px-5 flex w-full mb-4 ">
        <label className="">
          <span className="text-xl sm:text-2xl md:text-2xl lg:text-3xl  2xl:text-4xl font-Poppins font-semibold">My Account </span>
          <p className="text-xs md:text-sm 2xl:text-base font-Raleway leading-5 text-gray-600">
            Manage your account settings and access.
          </p>
        </label>
      </div>
      <div className="w-full ">
        <TabsComponent items={items} />
      </div>
    </section>
  );
}
