import React from "react";
import { DataTable } from "./DataTable";
import { columns } from "./columns";

export default function OrdersInfo() {
  const data = [
    {
      cart_total_price: 1049,
      order_items: ["Order 1"],
      status: "Pending",
      date: "2022-01-22",
      image:
        "https://scontent.fcmn1-4.fna.fbcdn.net/v/t39.30808-6/342022341_146041654893486_5917892229497217316_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGCHYPlSdufTFjVMRWA_-7wP8ESc2R-dn8_wRJzZH52f81TyTr2fo3p6bwjlqI2x-m0R6N4U9WDic4CaUkiWu4M&_nc_ohc=_2iVT8b0etoAX-RSf_j&_nc_zt=23&_nc_ht=scontent.fcmn1-4.fna&oh=00_AfB68__E6sVXY3yiWKx7kpLDSg2mQdyw6GYzbJK886i43w&oe=656FBFE3",
    },
    {
      cart_total_price: 43142,
      order_items: ["Order 2"],
      status: "Delivered",
      date: "2012-01-01",
      image:
        "https://scontent.fcmn1-4.fna.fbcdn.net/v/t39.30808-6/342022341_146041654893486_5917892229497217316_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGCHYPlSdufTFjVMRWA_-7wP8ESc2R-dn8_wRJzZH52f81TyTr2fo3p6bwjlqI2x-m0R6N4U9WDic4CaUkiWu4M&_nc_ohc=_2iVT8b0etoAX-RSf_j&_nc_zt=23&_nc_ht=scontent.fcmn1-4.fna&oh=00_AfB68__E6sVXY3yiWKx7kpLDSg2mQdyw6GYzbJK886i43w&oe=656FBFE3",
    },
    {
      cart_total_price: 102321,
      order_items: ["Order 3", "Bitch 2"],
      status: "Cancelled",
      date: "2024-01-01",
      image:
        "https://scontent.fcmn1-4.fna.fbcdn.net/v/t39.30808-6/342022341_146041654893486_5917892229497217316_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGCHYPlSdufTFjVMRWA_-7wP8ESc2R-dn8_wRJzZH52f81TyTr2fo3p6bwjlqI2x-m0R6N4U9WDic4CaUkiWu4M&_nc_ohc=_2iVT8b0etoAX-RSf_j&_nc_zt=23&_nc_ht=scontent.fcmn1-4.fna&oh=00_AfB68__E6sVXY3yiWKx7kpLDSg2mQdyw6GYzbJK886i43w&oe=656FBFE3",
    },
  ];
  function findLatestDate(dataArray) {
    if (!dataArray || dataArray.length === 0) {
      return null; // Handle empty array or invalid input
    }

    // Initialize with the first date
    let latestDate = dataArray[0].date;

    // Loop through the array to find the latest date
    for (let i = 1; i < dataArray.length; i++) {
      const currentDate = dataArray[i].date;

      if (currentDate > latestDate) {
        latestDate = currentDate;
      }
    }

    return latestDate;
  }

  return (
    <section className="w-full flex flex-col items-center justify-around gap-3 md:gap-6 xl:gap-8">
      <div className="self-start">
        <label className="md:px-5 md:text-2xl xl:text-3xl 2xl:text-4xl self-start xl:px-12 text-xl font-semibold font-poppins text-gray-950 dark:text-slate-600 ">
          Orders Info
        </label>
        <p className="text-xs md:text-sm 2xl:text-base self-start font-Raleway leading-5 dark:text-gray-400 text-gray-800">
          Browse your ordered items.
        </p>
      </div>
      <div className="flex flex-col items-end w-full">
        <label className="text-xs md:text-sm 2xl:text-base font-Poppins text-white">Number Of your Orders : {data.length}</label>
        <span className="text-xs md:text-sm 2xl:text-base font-Poppins leading-5 text-gray-600 text-center">Latest Order on {findLatestDate(data)}</span>
      </div>
      <div className="w-full">
        <DataTable columns={columns} data={data} />
      </div>
    </section>
  );
}
