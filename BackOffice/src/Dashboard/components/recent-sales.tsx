import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import axios from "axios";
import { useEffect, useState } from "react";
import { Order } from "..";
import { Customer } from "@/Customers";
import { Skeleton } from "@/components/ui/skeleton";

interface Chart {
  customer_id: string;
  cart_total_price: number;
  username: string;
  first_name: string;
  last_name: string;
  customer_image: string;
  email: string;
}

export function RecentSales() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [orders, setOrders] = useState<Order[]>([]);
  const [orderData, setOrderData] = useState<Chart[]>([]);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [recentOrders, setRecentOrders] = useState<Order[]>([]);

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
    const completedOrders = orders.filter(
      (order) => order.status === "completed"
    );
    const sortedOrders = completedOrders.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    const recentFiveOrders = sortedOrders.slice(0, 5);

    setRecentOrders(recentFiveOrders);
  }, [orders]);

  useEffect(() => {
    const data: Chart[] = [];
    recentOrders.forEach((order) => {
      customers.forEach((customer) => {
        if (order.customer_id === customer._id) {
          const { customer_id, cart_total_price } = order;
          const { username, first_name, last_name, customer_image, email } =
            customer;

          const newData = {
            customer_id,
            cart_total_price,
            username,
            first_name,
            last_name,
            customer_image,
            email,
          };

          data.push(newData);
        }
      });
    });
    setIsLoading(false);
    setOrderData(data);
  }, [recentOrders, customers]);

  return (
    <div className="space-y-[34px]">
      {isLoading ? (
        <>
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="flex justify-between">
              <div className="flex justify-between w-40">
                <Skeleton className="rounded-full w-10 h-10" />
                <div className="block h-10">
                  <Skeleton className="w-28 h-6" />
                  <Skeleton className="w-28 h-6" />
                </div>
              </div>
              <Skeleton className="rounded-sm w-20 h-10" />
            </div>
          ))}
        </>
      ) : (
        orderData.map((order) => (
          <div className="flex flex-col items-start xs:flex-row xs:items-center">
            <Avatar className="h-8 w-8">
              <AvatarImage src={order.customer_image} alt={order.username} />
              <AvatarFallback>
                {order.first_name.charAt(0).toUpperCase() +
                  order.last_name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">
                {order.first_name + " " + order.last_name}
              </p>
              <p className="text-sm text-muted-foreground">{order.email}</p>
            </div>
            <div className="ml-auto font-medium">
              {order.cart_total_price} MAD
            </div>
          </div>
        ))
      )}
    </div>
  );
}
