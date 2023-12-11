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

export default function Dashboard() {
  const [activeCustomers, setActiveCustomers] = useState<number>(0);
  const [newCustomers, setNewCustomers] = useState<number>(0);
  const [newCustomersPercent, setNewCustomersPercent] = useState<string>("0");
  const [previousMonthCustomers, setPreviousMonthCustomers] =
    useState<number>(0);
  const [customersData, setCustomersData] = useState<Customer[]>([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/v1/customers/search"
      );

      setCustomersData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    // counting customers that's active at this moment
    const activeCustomersCount = customersData.filter(
      (customer) => customer.active
    ).length;
    setActiveCustomers(activeCustomersCount);
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    // counting customers that's registred this month
    const newCustomersCount = customersData.filter((customer) => {
      const customerDate = new Date(customer.createdAt);
      const customerMonth = customerDate.getMonth();
      const customerYear = customerDate.getFullYear();
      return customerMonth === currentMonth && customerYear === currentYear;
    }).length;

    setNewCustomers(newCustomersCount);

    // counting customers that's registred the previous month
    const previousMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const previousYear = currentMonth === 0 ? currentYear - 1 : currentYear;

    const previousMonthCustomersCount = customersData.filter((customer) => {
      const customerDate = new Date(customer.createdAt);
      const customerMonth = customerDate.getMonth();
      const customerYear = customerDate.getFullYear();
      return customerMonth === previousMonth && customerYear === previousYear;
    }).length;
    const previousMonthCustomersCountNumber =
      previousMonthCustomersCount === 0 ? 1 : previousMonthCustomersCount;
    setPreviousMonthCustomers(previousMonthCustomersCountNumber);

    const newCustomersPercent = (
      (newCustomers * 100) /
      previousMonthCustomers
    ).toFixed(2);
    setNewCustomersPercent(newCustomersPercent);
  }, [customersData]);

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
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last month
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
                <div className="text-2xl font-bold">+12,234</div>
                <p className="text-xs text-muted-foreground">
                  +19% from last month
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
                  You made 265 sales this month.
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
