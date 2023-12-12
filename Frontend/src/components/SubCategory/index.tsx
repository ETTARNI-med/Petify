import { useEffect, useState } from "react";
import FilterSlider from "./FilterSlider";
import Products from "./Products";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// List of products
const fullProductList = [
  {
    sku: "1920922",
    product_image:
      "https://res.cloudinary.com/defnf0hzt/image/upload/f_auto,q_auto/t3jcnaulo6pht2rs1v0x",
    product_name: "Feline Natural Lamb & King Salmon Grain, case of 12",
    subcategory_id: "657340e1b1e77ad636ea8593",
    short_description:
      "Grain-free, lamb and salmon flavored cat food pouches that are made in New Zealand.",
    long_description:
      "Indulge your kitty’s purr-fectly international palate! Feline Natural Grain-Free Pouches, Lamb & Salmon Feast are crafted in New Zealand with wholefood, locally-sourced ingredients and selected vitamins and minerals. Each mess-free, single serve pouch is filled with a delicious, nutritious pate made from grass-fed, free-range lamb and sustainably caught King Salmon blended with water for added hydration. The whisker-licking pouch is packed with protein and omega-3 fatty acids to support your pal’s natural anti-inflammatory response and his skin, coat, and joint health.",
    price: 665.99,
    discount_price: 650.99,
    options: ["color : #e75304", "size : medium", "age : adult"],
    active: true,
  },
  {
    sku: "1902839",
    product_image:
      "https://res.cloudinary.com/defnf0hzt/image/upload/f_auto,q_auto/ylxapg8ilkuyixampdye",

    product_name:
      "James Wellbeloved Grain Free Adult Cat Food Turkey in Gravy, case of 12",
    subcategory_id: "657342c3e8830b21992e7ae1",
    short_description:
      "At James Wellbeloved, a lot of love is put into the creation of recipes cats will love.",
    long_description:
      "Using all our knowledge and experience of cat food, we’ve created James Wellbeloved Turkey Adult Cat Wet Pouch; a cat food in gravy. We take a handful of ingredients from nature, one source of animal protein and combine them with all the vitamins and minerals your cat needs. And all the great taste it deserves. For added peace of mind, it’s naturally hypoallergenic so less likely to cause an adverse food reaction, made without cereals such as rice and barley for those more sensitive cats and you will never see any added artificial colours, flavours or preservatives. Not now, not ever.",
    price: 430.99,
    discount_price: 420.99,
    options: ["color : #e7daab", "size : medium", "age : adult"],
    active: true,
  },
  {
    sku: "1000929",
    product_image:
      "https://res.cloudinary.com/defnf0hzt/image/upload/f_auto,q_auto/bxz1y1q06sudjjqkaugy",

    product_name: "KONG - Wrangler Avocato",
    subcategory_id: "657342b4e8830b21992e7ac0",
    short_description:
      "Plush toy with a  funny  cat design in the shape of an avocado, with a ball of wool  as a core.",
    long_description:
      "KONG Wrangler AvoCATo satisfies cats’ hunger for wrestling with a curved shaped and a crinkly soft body that invites healthy wrestling. The lightweight, tethered yarn ball sparks batting fun with an erratic bounce and rattle sounds that reward natural instincts. A long tail invites catch and capture play while KONG Premium North American Catnip ensures a long, stimulating fiesta of fun.",
    price: 39.99,
    discount_price: 35.99,
    options: ["color : #612700", "size : tiny", "age : all"],
    active: true,
  },
  {
    sku: "1909928",
    product_image:
      "https://res.cloudinary.com/defnf0hzt/image/upload/f_auto,q_auto/d39fzgcay9qgde5lmx9k",

    product_name: "Advance Chicken With Rice Kitten",
    subcategory_id: "657342c3e8830b21992e7ae1",
    short_description:
      "Complete and Balanced nutrition with select ingredients, designed for kittens.",
    long_description:
      "Advance™ Kitten Growth Dry Cat Food is a super-premium food for kittens, made with select natural ingredients. Made specifically for your growing kitten, this formula supports brain function, development and gastro-intestinal health.",
    price: 520.99,
    discount_price: 509.99,
    options: ["color : #2217ba", "size : large", "age : junior"],
    active: true,
  },
  {
    sku: "1902900",
    product_image:
      "https://res.cloudinary.com/defnf0hzt/image/upload/f_auto,q_auto/gvvlpdvdnbo48fnfwtqb",

    product_name: "Royal Canin Kitten Chunks In Gravy Pouches",
    subcategory_id: "657340e1b1e77ad636ea8593",
    short_description:
      "Formulated to match the natural nutrition for kittens in their growth",
    long_description:
      "RoyalCanin Kitten Instinctive pouch is designed for 2nd age kittens, where growth continues but at a slower rate.: The kitten prefers a specific Macro Nutrient Profile. The kitten's bone structure is consolidating. Enery needs remain high, although slightly lower than 1st age kittens. Permanent teeth appear. The 2nd age kitten now has its' own immune system, however its' natural defences remain fragile. The size and texture of the chunks are perfectly adapted to the kittens jaws. Helps to build the kitten's natural defences thanks to manna-oligo-saccharides and an antioxidant complex (vitamins E and C, taurine and lutein).",
    price: 279.99,
    discount_price: 269.99,
    options: ["color : #ea71b7", "size : medium", "age : young"],
    active: true,
  },
  {
    sku: "1029889",
    product_image:
      "https://res.cloudinary.com/defnf0hzt/image/upload/f_auto,q_auto/brgrwm8zxd3wuy21hukd",

    product_name: "KONG Connects Window Teaser Feather Crinkle Catnip",
    subcategory_id: "657342b4e8830b21992e7ac0",
    short_description:
      "A Unique Fun Way to Keep Your Pet Entertained For Hours",
    long_description:
      "Unique, fun toy which is great for independent play, Designed for adaptability which allows you to connect the convenient suction cap to multiple surfaces, Provides your cat with a great challenge and allows you to customise play time",
    price: 35.99,
    discount_price: 34.99,
    options: ["color : #0650e5", "size : tiny", "age : all"],
    active: true,
  },
  {
    sku: "1900901",
    product_image:
      "https://res.cloudinary.com/defnf0hzt/image/upload/f_auto,q_auto/ya69xcolavkprbg9s6to",

    product_name:
      "KONG Active Non Abrasive Tennis Balls With Internal Bell Chase",
    subcategory_id: "657342b4e8830b21992e7ac0",
    short_description: "A Fun Way To Keep Your Feline Happy And Healthy",
    long_description:
      "KONG Active cat toys encourage healthy exercise and satisfy cats' instinctive desires to chase, hunt and capture. Because it's not just dogs who have fun... KONG cat tennis balls include non-abrasive felt and won't damage their teeth while they play. Your cat will not be able to resist the internal bell that will encourage exercise in closed spaces.",
    price: 59.99,
    discount_price: 50.5,
    options: ["color : #370354", "size : tiny", "age : all"],
    active: true,
  },
  {
    sku: "1009992",
    product_image:
      "https://res.cloudinary.com/defnf0hzt/image/upload/f_auto,q_auto/xb9lsuko25uexkek33tp",

    product_name: "Rogz Reflectocat Safeloc Break Away Safety",
    subcategory_id: "6574cee595a7eb392017837c",
    short_description:
      "Rogz Reflectocat Safeloc Break Away Safety Buckle Collar For Cats Is A Stylish Comfortable Way To Identify Your Pet",
    long_description:
      'Rogz Catz Alley Cat Extra Small 5/16" Reflective Kitten Collars are fully adjustable for a neck size from 6-9" and are fitted with the new Safeloc Breakaway Clip, which allows you to easily adjust the break-away load of the buckle for small cats and kittens. Safety is still the priority so the buckle will still break free if placed under too much strain. Back to the basics, Alley Cat kitten collars are made from snag-proof webbing with a specially developed weave to prevent running and an upgraded, screenprinted reflective nylon. There are no open ends or sharp edges and the color-coded bell can be removed if you and kitty would prefer a little peace and quiet. Suitable for most small cat and kitten breeds and sizes and matching harness and lead are also available.',
    price: 98.99,
    discount_price: 91.99,
    options: ["color : #fbe704", "size : tiny", "age : all"],
    active: true,
  },
  {
    sku: "1029029",
    product_image:
      "https://res.cloudinary.com/defnf0hzt/image/upload/f_auto,q_auto/yemvp6t3wk56swjdz8lh",

    product_name: "Natures Menu Especially For Cats",
    subcategory_id: "657340e1b1e77ad636ea8593",
    short_description:
      "Our 48 can multipack cat food means you can mix things up a bit. The pack includes chicken with turkey, beef and chicken and chicken with salmon and tuna.",
    long_description:
      "Does your cat love Natures Menu Especially for Cats? Well, they’ll love our meaty multipack canned cat food includes all three natural meal varieties from our complete and balanced range for adult cats. Cats need a high meat quality diet to help them thrive - and that's exactly what is in each of our recipes.  Our multipack includes chicken with turkey, beef and chicken and chicken with salmon and tuna. Each can gives your cat everything they need to thrive and each recipe is gently cooked to ensure all the Natures Menu goodness is locked in. Using simple, no fuss, natural ingredients give your cat everything they need, plus peace of mind that you’re doing the right thing for them.",
    price: 829.99,
    discount_price: 819.99,
    options: ["color : #046402", "size : large", "age : adult"],
    active: true,
  },
];
// filtring the product list of needed subcategory

// Get the minimum and maximum price
console.log(fullProductList);
const prices = fullProductList.map((product) => product.discount_price);
const minPrice = Math.floor(Math.min(...prices));
const maxPrice = Math.ceil(Math.max(...prices));

//creating a filter type
type Filter = {
  price: number[];
};

const SubCategory = () => {
  //creating a filter variable
  const [filter, setFilter] = useState<Filter>({
    price: [minPrice, maxPrice],
  });

  //creating a variable that have price range
  const [values, setValues] = useState<[number, number]>([minPrice, maxPrice]);
  //creating a variable that count how much a color is repeated

  useEffect(() => {
    //counting how much a color is repeated
  }, []);

  //handling slider values change that happend by users
  const handleSliderChange = (price: [number, number]) => {
    setValues(price);
    setFilter((prevFilter) => ({
      ...prevFilter,
      price,
    }));
  };

  return (
    <>
      {/* BreadCrumb and title for less than sm scrs */}
      <div className="ml-4">
        <div className="w-3/4 sm:hidden flex justify-between">
          <span>Home</span>&gt;<span>Cat</span>&gt;<span>Dry Food</span>
        </div>
        <div className="w-full flex sm:hidden justify-center text-3xl my-4 uppercase">
          <span>Dry Food</span>
        </div>
      </div>
      <div className="ml-4 flex flex-col sm:flex-row gap-4">
        {/* Filter */}
        {/* Age */}
        <Accordion
          type="multiple"
          className="flex justify-evenly w-full sm:justify-start sm:flex-col sm:w-[10vw] gap-4 sm:sticky sm:top-4 sm:h-[80vh]"
        >
          <AccordionItem value="age" className="space-y-4 w-1/5 xs:w-full">
            <AccordionTrigger className="uppercase">Age</AccordionTrigger>
          </AccordionItem>
          {/* Color */}
          <AccordionItem value="color" className="space-y-4 w-1/5 xs:w-full">
            <AccordionTrigger className="uppercase">Color</AccordionTrigger>
            <AccordionContent></AccordionContent>
          </AccordionItem>
          {/* Price */}
          <div className="space-y-4 w-1/5 xs:w-full">
            <span className="uppercase text-wrap-none text-sm lg:text-base">
              Price <span className="muted">(MAD)</span>
            </span>
            <FilterSlider
              min={minPrice}
              step={Math.floor(maxPrice / 10)}
              max={maxPrice}
              initialValue={[minPrice, maxPrice]}
              onChange={handleSliderChange}
            />
            <span className="flex justify-between items-center">
              <span>{values[0]}</span> - <span>{values[1]}</span>
            </span>
          </div>
        </Accordion>
        {/* Products */}
        <Products ProductList={fullProductList} Filter={filter} />
      </div>
    </>
  );
};

export default SubCategory;
