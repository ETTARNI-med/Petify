import axios from "axios";
import { useEffect, useState } from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Order } from "..";

export function Overview() {
  const [data, setData] = useState<{ name: string; total: number }[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [newOrdersTotalPrice, setNewOrdersTotalPrice] = useState<number>(0);
  const [previousMonthTotalPrice, setPreviousMonthTotalPrice] =
    useState<number>(0);
  const [twoMonthBeforeTotalPrice, setTwoMonthBeforeTotalPrice] =
    useState<number>(0);
  const [threeMonthBeforeTotalPrice, setThreeMonthBeforeTotalPrice] =
    useState<number>(0);
  const [fourMonthBeforeTotalPrice, setFourMonthBeforeTotalPrice] =
    useState<number>(0);
  const [fiveMonthBeforeTotalPrice, setFiveMonthBeforeTotalPrice] =
    useState<number>(0);

  const getData = async () => {
    try {
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
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const newOrdersTotalPrice = orders.reduce((total, order) => {
      const orderDate = new Date(order.createdAt);
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

    const twoMonthBefor = currentMonth === 0 ? 10 : currentMonth - 2;
    const twoMonthBeforYear =
      currentMonth === 0 ? currentYear - 1 : currentYear;
    const twoMonthBeforOrders = orders.filter((order) => {
      const orderDate = new Date(order.createdAt);
      const orderMonth = orderDate.getMonth();
      const orderYear = orderDate.getFullYear();
      return (
        orderMonth === twoMonthBefor &&
        orderYear === twoMonthBeforYear &&
        order.status === "completed"
      );
    });

    const twoMonthBeforOrdersTotalPrice = twoMonthBeforOrders.reduce(
      (total, order) => {
        return total + order.cart_total_price;
      },
      0
    );

    setTwoMonthBeforeTotalPrice(twoMonthBeforOrdersTotalPrice);

    const threeMonthBefor = currentMonth === 0 ? 9 : currentMonth - 3;
    const threeMonthBeforYear =
      currentMonth === 0 ? currentYear - 1 : currentYear;
    const threeMonthBeforOrders = orders.filter((order) => {
      const orderDate = new Date(order.createdAt);
      const orderMonth = orderDate.getMonth();
      const orderYear = orderDate.getFullYear();
      return (
        orderMonth === threeMonthBefor &&
        orderYear === threeMonthBeforYear &&
        order.status === "completed"
      );
    });

    const threeMonthBeforOrdersTotalPrice = threeMonthBeforOrders.reduce(
      (total, order) => {
        return total + order.cart_total_price;
      },
      0
    );

    setThreeMonthBeforeTotalPrice(threeMonthBeforOrdersTotalPrice);

    const fourMonthBefor = currentMonth === 0 ? 8 : currentMonth - 4;
    const fourMonthBeforYear =
      currentMonth === 0 ? currentYear - 1 : currentYear;
    const fourMonthBeforOrders = orders.filter((order) => {
      const orderDate = new Date(order.createdAt);
      const orderMonth = orderDate.getMonth();
      const orderYear = orderDate.getFullYear();
      return (
        orderMonth === fourMonthBefor &&
        orderYear === fourMonthBeforYear &&
        order.status === "completed"
      );
    });

    const fourMonthBeforOrdersTotalPrice = fourMonthBeforOrders.reduce(
      (total, order) => {
        return total + order.cart_total_price;
      },
      0
    );

    setFourMonthBeforeTotalPrice(fourMonthBeforOrdersTotalPrice);

    const fiveMonthBefor = currentMonth === 0 ? 7 : currentMonth - 5;
    const fiveMonthBeforYear =
      currentMonth === 0 ? currentYear - 1 : currentYear;
    const fiveMonthBeforOrders = orders.filter((order) => {
      const orderDate = new Date(order.createdAt);
      const orderMonth = orderDate.getMonth();
      const orderYear = orderDate.getFullYear();
      return (
        orderMonth === fiveMonthBefor &&
        orderYear === fiveMonthBeforYear &&
        order.status === "completed"
      );
    });

    const fiveMonthBeforOrdersTotalPrice = fiveMonthBeforOrders.reduce(
      (total, order) => {
        return total + order.cart_total_price;
      },
      0
    );

    setFiveMonthBeforeTotalPrice(fiveMonthBeforOrdersTotalPrice);
  }, [orders]);

  useEffect(() => {
    const currentMonth = new Date().getMonth();
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const previousFourMonthShortNames = [];
    for (let i = 0; i < 6; i++) {
      const targetMonth = currentMonth - i;
      const targetMonthShortName =
        monthNames[targetMonth >= 0 ? targetMonth : 12 + targetMonth];
      previousFourMonthShortNames.push(targetMonthShortName);
    }

    const [
      currentMonthShortName,
      firstMonthBefore,
      secondMonthBefore,
      thirdMonthBefore,
      fourthMonthBefore,
      fivethMonthBefore,
    ] = previousFourMonthShortNames;
    const data = [
      {
        name: fivethMonthBefore,
        total: fiveMonthBeforeTotalPrice,
      },
      {
        name: fourthMonthBefore,
        total: fourMonthBeforeTotalPrice,
      },
      {
        name: thirdMonthBefore,
        total: threeMonthBeforeTotalPrice,
      },
      {
        name: secondMonthBefore,
        total: twoMonthBeforeTotalPrice,
      },
      {
        name: firstMonthBefore,
        total: previousMonthTotalPrice,
      },
      {
        name: currentMonthShortName,
        total: newOrdersTotalPrice,
      },
    ];
    setData(data);
  }, [
    newOrdersTotalPrice,
    previousMonthTotalPrice,
    twoMonthBeforeTotalPrice,
    threeMonthBeforeTotalPrice,
    fourMonthBeforeTotalPrice,
    fiveMonthBeforeTotalPrice,
  ]);

  return (
    <ResponsiveContainer width="100%" className="xs:h-[275px] sm:h-[350px]">
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={true}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
