import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ProductDetailsProps {
  price: number;
  name: string;
  colors: string[];
  shownColor: string;
  sizes: string[];
  rating: number;
}

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const stars = Array.from({ length: 5 }, (_, index) => {
    if (index < fullStars) {
      return (
        <span className="text-xl xl:text-3xl" key={index}>
          &#9733;
        </span>
      );
    }
    if (index === fullStars && hasHalfStar) {
      return (
        <span className="text-xl xl:text-3xl" key={index}>
          &#9734;
        </span>
      );
    }
    return (
      <span className=" text-xl xl:text-3xl cursor-pointer  " key={index}>
        &#9734;
      </span>
    );
  });

  return <div className="text-xl">{stars}</div>;
};

const SizeSquare = ({
  size,
  selected,
  onSelectSize,
}: {
  size: string;
  selected: string;
  onSelectSize: any;
}) => {
  return (
    <div
      onClick={() => {
        onSelectSize(size);
      }}
      className={
        size === selected
          ? "flex text-background bg-foreground items-center justify-center border-[1px] p-3 md:p-3 xl:p-4 md:w-[16px] md:h-[16px] w-[14px] h-[14px] xl:w-[20px] xl:h-[20px] cursor-pointer"
          : "cursor-pointer flex items-center justify-center border-[1px] p-3 md:p-3 xl:p-4 sm:w-[16px] sm:h-[16px] md:w-[18px] md:h-[18px] xs:w-[14px] xs:h-[14px] xl:w-[20px] xl:h-[20px] hover:bg-slate-600/40 hover:text-gray-200/50 ease-linear duration-150"
      }
    >
      <span className="font-Poppins md:text-md xl:text-lg ">{size}</span>
    </div>
  );
};

const ColorCircle = ({
  color,
  onSelectColor,
  selected,
}: {
  color: string;
  onSelectColor: any;
  selected: string;
}) => {
  const handleColorClick = () => {
    onSelectColor(color);
  };

  return (
    <div
      style={{
        backgroundColor: color,
        borderRadius: "50%",
        margin: "5px",
        cursor: "pointer",
      }}
      className={
        selected === color
          ? "xl:w-8 xl:h-8 md:w-6 md:h-6 w-5 h-5  rounded-full m-2 cursor-pointer md:border-[3px] border-2 dark:border-slate-400 border-gray-900 "
          : "xl:w-8 xl:h-8 md:w-6 md:h-6 w-5 h-5 rounded-full m-2 cursor-pointer md:hover:border-[3px] hover:border-2 md:border:2 border-slate-600/70 ease-linear duration-150"
      }
      onClick={handleColorClick}
    />
  );
};

export default function ProductDetails(props: ProductDetailsProps) {
  const { price, name, colors, shownColor, sizes, rating } = props;

  const [defColor, setDefColor] = useState(shownColor);
  const [selectedSize, setSelectedSize] = useState("");
  const [prodQuantitiy, setProdQuantity] = useState(1);
  const IncrementQuantity = () => {
    setProdQuantity(prodQuantitiy + 1);
  };
  const DecrementQuantity = () => {
    if (prodQuantitiy > 0) {
      setProdQuantity(prodQuantitiy - 1);
    }
  };

  return (
    <section className="flex flex-col w-full xl:gap-4 ">
      <h1 className="font-Poppins text-lg md:text-lg xl:text-xl font-thin">
        {name}
      </h1>
      <h2 className="xl:text-2xl  text-xl font-Poppins">{price} MAD</h2>
      <StarRating rating={rating} />
      <div className="flex justify-around w-full ">
        <div className="flex flex-col gap-1">
          <label className="font-Poppins lg:text-lg text-md">
            Available Colors :{" "}
          </label>
          <div className="flex md:gap-1 xl:gap-1.5 ">
            {colors.map((color, index) => (
              <ColorCircle
                key={index}
                color={color}
                selected={defColor}
                onSelectColor={(selectedColor: string) =>
                  setDefColor(selectedColor)
                }
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <label className="font-Poppins text-lg">Sizes :</label>
          <div className="flex gap-2 ">
            {sizes.map((size, index) => {
              return (
                <SizeSquare
                  size={size}
                  key={index}
                  selected={selectedSize}
                  onSelectSize={(selectedSize: string) =>
                    setSelectedSize(selectedSize)
                  }
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 md:gap-4 xl:gap-5">

      <div className="flex items-center w-1/3 rounded-md font-Poppins text-xl self-center ">
        <Button
          onClick={DecrementQuantity}
          variant={"ghost"}
          disabled={prodQuantitiy === 0 ? true : false}
          className="w-full h-full text-sm lg:text-md flex items-center justify-center"
        >
          -
        </Button>
        <div className="w-full text-sm lg:text-md border-x-2 h-full flex items-center justify-center">
          {prodQuantitiy}
        </div>
        <Button
          onClick={IncrementQuantity}
          variant={"ghost"}
          className="w-full h-full flex text-sm lg:text-md items-center justify-center"
        >
          +
        </Button>
      </div>
      <div className="flex w-full items-center justify-center gap-4">
        <label className="font-Poppins xl:text-xl ">
          Total Price : {(prodQuantitiy * price).toFixed(2)}
        </label>
        <button className="flex bg-secondcolor w-1/2 text-xs md:text-md xl:text-lg text-center justify-center font-Poppins  py-3 rounded-xs px-4 hover:bg-primarycolor ease-linear duration-150 hover:text-secondcolor ">
          Shop Now
        </button>
      </div>
      </div>
    </section>
  );
}
