import Petify from "@/assets/PetifyLogo.png";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CustomersPage from "@/Customers";
import Dashboard from "@/Dashboard";
import { Search } from "./components/search";
import { UserNav } from "./components/user-nav";
import OrdersPage from "@/Orders";
import ProductsPage from "@/Products";
import UsersPage from "@/Users";
import Profile from "@/profile";
import Notifications from "@/Notifications";
import CategoriesPage from "@/Categories";
import SubCategoriesPage from "@/SubCategories";

{
  /* Container that's provide stable navbar */
}
export default function Container() {
  return (
    <>
      <div className="block h-full">
        <div className="border-t">
          <div className="bg-background">
            <div className="grid lg:grid-cols-4">
              <div className="col-span-3 lg:col-span-4 ">
                <div className="h-full px-4 py-6 lg:px-8">
                  <Tabs defaultValue="dashboard" className="h-full space-y-6">
                    {/* Large Screens Nav */}
                    <div className="hidden lg:flex items-center w-full">
                      <TabsList>
                        <TabsTrigger
                          className="text-xs xl:text-sm"
                          value="dashboard"
                        >
                          Dashboard
                        </TabsTrigger>
                        <TabsTrigger
                          className="text-xs xl:text-sm"
                          value="users"
                        >
                          Users
                        </TabsTrigger>
                        <TabsTrigger
                          className="text-xs xl:text-sm"
                          value="customers"
                        >
                          Customers
                        </TabsTrigger>
                        <TabsTrigger
                          className="text-xs xl:text-sm"
                          value="product"
                        >
                          Product
                        </TabsTrigger>
                        <TabsTrigger
                          className="text-xs xl:text-sm"
                          value="orders"
                        >
                          Orders
                        </TabsTrigger>
                        <TabsTrigger
                          className="text-xs xl:text-sm"
                          value="categories"
                        >
                          Categories
                        </TabsTrigger>
                        <TabsTrigger
                          className="text-xs xl:text-sm"
                          value="subCategories"
                        >
                          Sub Categories
                        </TabsTrigger>
                      </TabsList>
                      <div className="mx-auto">
                        <img src={Petify} alt="Logo" className="w-10" />
                      </div>
                      <div className="flex items-center space-x-4 ml-auto">
                        <Search />
                        <UserNav />
                      </div>
                    </div>
                    {/* SM and MD Screens Nav */}
                    <div className="hidden lg:hidden sm:flex xs:flex-col items-center mx-auto w-[90vw]">
                      <div className=" lg:hidden flex justify-between items-center w-full  mb-2">
                        <img src={Petify} alt="Logo" className="w-10" />
                        <div className="flex items-center space-x-4">
                          <Search />
                          <UserNav />
                        </div>
                      </div>
                      <TabsList>
                        <TabsTrigger
                          className="text-xs sm:text-sm"
                          value="dashboard"
                        >
                          Dashboard
                        </TabsTrigger>
                        <TabsTrigger
                          className="text-xs sm:text-sm"
                          value="users"
                        >
                          Users
                        </TabsTrigger>
                        <TabsTrigger
                          className="text-xs sm:text-sm"
                          value="customers"
                        >
                          Customers
                        </TabsTrigger>
                        <TabsTrigger
                          className="text-xs sm:text-sm"
                          value="product"
                        >
                          Product
                        </TabsTrigger>
                        <TabsTrigger
                          className="text-xs sm:text-sm"
                          value="orders"
                        >
                          Orders
                        </TabsTrigger>
                        <TabsTrigger
                          className="text-xs sm:text-sm"
                          value="categories"
                        >
                          Categories
                        </TabsTrigger>
                        <TabsTrigger
                          className="text-xs sm:text-sm"
                          value="subCategories"
                        >
                          Sub Categories
                        </TabsTrigger>
                      </TabsList>
                    </div>
                    {/* Phones Screens Nav and XS scr */}
                    <div className="flex flex-col sm:hidden items-center -ml-2 mr-6 w-[90vw]">
                      <div className="flex justify-between items-center w-full mb-2">
                        <img src={Petify} alt="Logo" className="w-10" />
                        <div className="flex items-center space-x-4">
                          <Search />
                          <UserNav />
                        </div>
                      </div>
                      <div className="bg-muted w-[110vw] ml-4">
                        <TabsList className="grid grid-cols-2 xs:grid-cols-4 h-auto rounded-none w-10/12 mx-auto">
                          <TabsTrigger className="text-xs" value="dashboard">
                            Dashboard
                          </TabsTrigger>
                          <TabsTrigger className="text-xs" value="users">
                            Users
                          </TabsTrigger>
                          <TabsTrigger className="text-xs" value="customers">
                            Customers
                          </TabsTrigger>
                          <TabsTrigger className="text-xs" value="product">
                            Product
                          </TabsTrigger>
                          <TabsTrigger className="text-xs" value="orders">
                            Orders
                          </TabsTrigger>
                          <TabsTrigger className="text-xs" value="categories">
                            Categories
                          </TabsTrigger>
                          <TabsTrigger
                            className="text-xs"
                            value="subCategories"
                          >
                            Sub Categories
                          </TabsTrigger>
                        </TabsList>
                      </div>
                    </div>
                    {/* Dashbord Content */}
                    <TabsContent
                      value="dashboard"
                      className="border-none p-0 outline-none"
                    >
                      <Dashboard />
                    </TabsContent>
                    {/* Users Content */}
                    <TabsContent
                      value="users"
                      className="h-full flex-col border-none p-0 data-[state=active]:flex"
                    >
                      <Separator className="my-4" />
                      <UsersPage />
                    </TabsContent>
                    {/* Customers Content */}
                    <TabsContent
                      value="customers"
                      className="h-full flex-col border-none p-0 data-[state=active]:flex"
                    >
                      <Separator className="my-4" />
                      <CustomersPage />
                    </TabsContent>
                    {/* Products Content */}
                    <TabsContent
                      value="product"
                      className="h-full flex-col border-none p-0 data-[state=active]:flex"
                    >
                      <Separator className="my-4" />
                      <ProductsPage />
                    </TabsContent>
                    {/* Orders Content */}
                    <TabsContent
                      value="orders"
                      className="h-full flex-col border-none p-0 data-[state=active]:flex"
                    >
                      <Separator className="my-4" />
                      <OrdersPage />
                    </TabsContent>
                    {/* subCategories Content */}
                    <TabsContent
                      value="subCategories"
                      className="h-full flex-col border-none p-0 data-[state=active]:flex"
                    >
                      <Separator className="my-4" />
                      <SubCategoriesPage />
                    </TabsContent>
                    {/* categories Content */}
                    <TabsContent
                      value="categories"
                      className="h-full flex-col border-none p-0 data-[state=active]:flex"
                    >
                      <Separator className="my-4" />
                      <CategoriesPage />
                    </TabsContent>
                    {/* Profile Content */}
                    <TabsContent
                      value="profile"
                      className="h-full flex-col border-none p-0 data-[state=active]:flex"
                    >
                      <Separator className="my-4" />
                      <Profile />
                    </TabsContent>
                    {/* Settings Content */}
                    <TabsContent
                      value="notification"
                      className="h-full flex-col border-none p-0 data-[state=active]:flex"
                    >
                      <Separator className="my-4" />
                      <Notifications />
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
