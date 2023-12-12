import ProductDetails from './components/ProductDetails'
import ProductSwiper from './components/ProductSwiper';

export default function ProductPage() {
  const productProps = {
    price: 19.99,
    name: 'Sample Product',
    colors: ['Red', 'Blue', 'Green'],
    shownColor: 'Red',
    sizes: ['S', 'M', 'L'],
    rating: 4.5,
    images:
      [ 'https://i.pinimg.com/564x/73/f3/d6/73f3d68396b95f9268074abaf0c59eed.jpg',
       'https://i.pinimg.com/564x/fa/97/2c/fa972ccc72e4229a1cef82d4e1da5195.jpg',
       'https://i.pinimg.com/564x/f8/28/51/f828515dc09ecd91c3fc2c45cd1a539d.jpg',
       'https://picsum.photos/200/300',
       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVLrIqHaprJ01ZD_4oKIbu3l2Qnw3PYfHoEA18e0fSmmmnv-kUEmKvwCogtOEWfkTknmY',
       'https://beautifulpets.com/images/slider/img1a-229x350.jpg',
       'https://beautifulpets.com/images/slider/img1a-229x350.jpg',
       'https://picsum.photos/200/300',
]
    
  };
  return (
<section className='flex flex-col w-full lg:flex-row items-center gap-5 xl:gap-10 lg:justify-evenly p-12'>
  <div className='xl:w-1/3 w-full rounded-sm  ' >
    <ProductSwiper images={productProps.images} defaultImg={productProps.images[0]} />
    
  </div>
  <div className="xl:w-1/3 w-full">
    <ProductDetails {...productProps} />
  </div>
</section>
    )
}
