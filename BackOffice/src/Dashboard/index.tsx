import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Overview } from "./components/overview";
import { RecentSales } from "./components/recent-sales";
import { useEffect, useState } from "react";
import { Customer } from "@/Customers";
import axios from "axios";

export type Order = {
  _id: string;
  customer_id: string;
  order_items: string[];
  order_date: string;
  cart_total_price: number;
  status: "confirmed" | "completed" | "open" | "cancelled";
  createdAt: string;
  updatedAt: string;
};

export default function Dashboard() {
  const [activeCustomers, setActiveCustomers] = useState<number>(0);
  const [newCustomers, setNewCustomers] = useState<number>(0);
  const [newCustomersPercent, setNewCustomersPercent] = useState<string>("0");
  const [previousMonthCustomers, setPreviousMonthCustomers] =
    useState<number>(0);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [newOrdersCount, setNewOrdersCount] = useState<number>(0);
  const [previousMonthOrders, setPreviousMonthOrders] = useState<number>(0);
  const [newOrdersPercent, setNewOrdersPercent] = useState<string>("0");
  const [newOrdersTotalPrice, setNewOrdersTotalPrice] = useState<number>(0);
  const [previousMonthTotalPrice, setPreviousMonthTotalPrice] =
    useState<number>(0);
  const [ordersTotalPricePercent, setOrdersTotalPricePercent] =
    useState<string>("0");

  const getData = async () => {
    try {
      const customers = await axios.get(
        "http://localhost:4000/v1/customers/search"
      );
      setCustomers(customers.data);
      const oredrs = await axios.get("http://localhost:4000/v1/orders/");
      setOrders(oredrs.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    // counting customers that's active at this moment
    const activeCustomersCount = customers.filter(
      (customer) => customer.active
    ).length;
    setActiveCustomers(activeCustomersCount);
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    // counting customers that's registred this month
    const newCustomersCount = customers.filter((customer) => {
      const customerDate = new Date(customer.createdAt);
      const customerMonth = customerDate.getMonth();
      const customerYear = customerDate.getFullYear();
      return customerMonth === currentMonth && customerYear === currentYear;
    }).length;

    setNewCustomers(newCustomersCount);

    // counting customers that's registred the previous month
    const previousMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const previousYear = currentMonth === 0 ? currentYear - 1 : currentYear;

    const previousMonthCustomersCount = customers.filter((customer) => {
      const customerDate = new Date(customer.createdAt);
      const customerMonth = customerDate.getMonth();
      const customerYear = customerDate.getFullYear();
      return customerMonth === previousMonth && customerYear === previousYear;
    }).length;
    const previousMonthCustomersCountNumber =
      previousMonthCustomersCount === 0 ? 1 : previousMonthCustomersCount;
    setPreviousMonthCustomers(previousMonthCustomersCountNumber);
  }, [customers]);

  useEffect(() => {
    const newCustomersPercent = (
      (newCustomers * 100) /
      previousMonthCustomers
    ).toFixed(2);
    setNewCustomersPercent(newCustomersPercent);
  }, [previousMonthCustomers, newCustomers]);

  useEffect(() => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const newOrdersCount = orders.filter((order) => {
      const orderDate = new Date(order.createdAt);
      const orderMonth = orderDate.getMonth();
      const orderYear = orderDate.getFullYear();
      return (
        orderMonth === currentMonth &&
        orderYear === currentYear &&
        order.status === "completed"
      );
    }).length;

    setNewOrdersCount(newOrdersCount);

    const previousMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const previousYear = currentMonth === 0 ? currentYear - 1 : currentYear;

    const previousMonthOrdersCount = orders.filter((order) => {
      const orderDate = new Date(order.createdAt);
      const orderMonth = orderDate.getMonth();
      const orderYear = orderDate.getFullYear();
      return orderMonth === previousMonth && orderYear === previousYear;
    }).length;

    const previousMonthOrdersCountNumber =
      previousMonthOrdersCount === 0 ? 1 : previousMonthOrdersCount;
    setPreviousMonthOrders(previousMonthOrdersCountNumber);
  }, [orders]);

  useEffect(() => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const newOrdersTotalPrice = orders.reduce((total, order) => {
      const orderDate = new Date(order.createdAt);
      console.log(orderDate);
      const orderMonth = orderDate.getMonth();
      const orderYear = orderDate.getFullYear();

      if (
        orderMonth === currentMonth &&
        orderYear === currentYear &&
        order.status === "completed"
      ) {
        return total + order.cart_total_price;
      } else {
        return total;
      }
    }, 0);

    setNewOrdersTotalPrice(newOrdersTotalPrice);
    const previousMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const previousYear = currentMonth === 0 ? currentYear - 1 : currentYear;

    const previousMonthOrders = orders.filter((order) => {
      const orderDate = new Date(order.createdAt);
      const orderMonth = orderDate.getMonth();
      const orderYear = orderDate.getFullYear();
      return orderMonth === previousMonth && orderYear === previousYear;
    });

    const previousMonthTotalPrice = previousMonthOrders.reduce(
      (total, order) => {
        return total + order.cart_total_price;
      },
      0
    );

    setPreviousMonthTotalPrice(previousMonthTotalPrice);
  }, [orders]);

  useEffect(() => {
    const newOrdersPercent = (
      (newOrdersCount * 100) /
      previousMonthOrders
    ).toFixed(2);
    setNewOrdersPercent(newOrdersPercent);
  }, [previousMonthOrders, newOrdersCount]);

  useEffect(() => {
    const ordersTotalPrice = (
      (newOrdersTotalPrice * 100) /
      previousMonthTotalPrice
    ).toFixed(2);
    setOrdersTotalPricePercent(ordersTotalPrice);
  }, [previousMonthTotalPrice, newOrdersTotalPrice]);

  return (
    <>
      <div className="flex-col flex">
        <div className="border-b"></div>
        <div className="w-[95vw] md:ml-auto md:flex-1 -ml-2 xs:space-y-4 xs:p-8 pt-6">
          <div className="md:grid md:gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="my-4 md:my-auto">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Revenue
                </CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {newOrdersTotalPrice.toFixed(2)} MAD
                </div>
                <p className="text-xs text-muted-foreground">
                  {ordersTotalPricePercent}% from last month
                </p>
              </CardContent>
            </Card>
            <Card className="my-4 md:my-auto">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Subscriptions
                </CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{newCustomers}</div>
                <p className="text-xs text-muted-foreground">
                  {newCustomersPercent}% from last month
                </p>
              </CardContent>
            </Card>
            <Card className="my-4 md:my-auto">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Sales</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <path d="M2 10h20" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{newOrdersCount}</div>
                <p className="text-xs text-muted-foreground">
                  {newOrdersPercent}% from last month
                </p>
              </CardContent>
            </Card>
            <Card className="my-4 md:my-auto">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Now
                </CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{activeCustomers}</div>
              </CardContent>
            </Card>
          </div>
          <div className="flex-1 md:grid md:gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="md:col-span-4 my-4 md:my-auto">
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2 xs:h-[275px] sm:h-[375px]">
                <Overview />
              </CardContent>
            </Card>
            <Card className="md:col-span-4 lg:col-span-3 my-4 md:my-auto">
              <CardHeader>
                <CardTitle>Recent Sales</CardTitle>
                <CardDescription>
                  You made {newOrdersCount} sales this month.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RecentSales />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
