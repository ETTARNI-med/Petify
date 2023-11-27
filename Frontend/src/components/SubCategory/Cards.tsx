import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dot } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";

interface Props {
  ProductList: {
    sku: string;
    product_image: string;
    product_name: string;
    subcategory_id: string;
    short_description: string;
    long_description: string;
    price: number;
    discount_price: number;
    options: string[];
    active: boolean;
  }[];
  Filter: {
    colors: string | string[];
    ages: string | string[];
    price: number[];
  };
}

export default function Cards({ ProductList, Filter }: Props) {
  //filter ProductList to only what the user wants
  const filteredProductList = ProductList.filter((product) => {
    const colorOption = product.options.find((option) =>
      option.startsWith("Color: ")
    );
    const ageOption = product.options.find((option) =>
      option.startsWith("Age: ")
    );

    const colorsFilter = Filter.colors;
    const agesFilter = Filter.ages;
    const priceFilter = Filter.price;

    // Filter based on colors
    if (colorsFilter && colorsFilter !== "" && colorsFilter !== "all") {
      if (Array.isArray(colorsFilter)) {
        if (!colorsFilter.includes(colorOption?.split("Color: ")[1] ?? "")) {
          return false;
        }
      } else {
        if (colorOption?.split("Color: ")[1] !== colorsFilter) {
          return false;
        }
      }
    }

    // Filter based on ages
    if (agesFilter && agesFilter !== "" && agesFilter !== "all") {
      if (Array.isArray(agesFilter)) {
        if (!agesFilter.includes(ageOption?.split("Age: ")[1] ?? "")) {
          return false;
        }
      } else {
        if (ageOption?.split("Age: ")[1] !== agesFilter) {
          return false;
        }
      }
    }

    // Filter based on price
    if (priceFilter && priceFilter.length === 2) {
      const [minPrice, maxPrice] = priceFilter;
      if (
        product.discount_price <= minPrice ||
        product.discount_price >= maxPrice
      ) {
        return false;
      }
    }

    return true;
  });

  return (
    <>
      {filteredProductList.map((product) => {
        const colorOption = product.options.find((option) =>
          option.startsWith("Color: ")
        );
        const ageOption = product.options.find((option) =>
          option.startsWith("Age: ")
        );

        return (
          <Card
            className="w-5/6 m-2 bg-secondcolor grid place-content-center"
            key={product.sku}
          >
            <CardHeader className="w-full">
              <CardTitle className="text-sm md:text-base lg:text-lg xl:text-xl text-wrap-none">
                {product.product_name}
              </CardTitle>
              <CardDescription className="line-clamp-1">
                {product.short_description}
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-2">
              <span className="hidden text-gray-600">
                {" "}
                <span className="text-blue-600"></span>
                <span className="text-white-600"></span>
                <span className="text-beige-600"></span>
                <span className="text-pink-600"></span>
              </span>
              <img src={product.product_image} alt={product.product_name} />
              <span className="flex justify-between items-center">
                {colorOption && (
                  <>
                    <p>Color : </p>
                    <span className="hidden lg:block">
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <Dot
                            size={30}
                            className={`text-${colorOption
                              .split("Color: ")[1]
                              .toLocaleLowerCase()}-600`}
                          />
                        </HoverCardTrigger>
                        <HoverCardContent
                          className={cn(
                            "w-fit bg-transparent border-none shadow-none absolute -left-14 -top-[2.1rem]",
                            `text-${colorOption
                              .split("Color: ")[1]
                              .toLocaleLowerCase()}-600`
                          )}
                        >
                          {colorOption.split("Color: ")[1].toLocaleUpperCase()}
                        </HoverCardContent>
                      </HoverCard>
                    </span>
                    <span
                      className={`lg:hidden text-${colorOption
                        .split("Color: ")[1]
                        .toLocaleLowerCase()}-600`}
                    >
                      {colorOption.split("Color: ")[1].toLocaleUpperCase()}
                    </span>
                  </>
                )}
              </span>
              <span className="flex justify-between items-center">
                {ageOption && (
                  <>
                    <p>Age : </p>
                    <span>{ageOption.split("Age: ")[1]}</span>
                  </>
                )}
              </span>
              <span className="flex justify-between items-center">
                <span>Price :</span>
                {product.price !== product.discount_price ? (
                  <>
                    <s className="text-red-700">{product.price}</s>
                    <span className="text-green-700">
                      {product.discount_price}
                    </span>
                  </>
                ) : (
                  <span className="text-green-700">
                    {product.discount_price}
                  </span>
                )}
              </span>
            </CardContent>
            <CardFooter className="justify-self-end w-full">
              <Button className="w-full">Add To My Card</Button>
            </CardFooter>
          </Card>
        );
      })}
    </>
  );
}
