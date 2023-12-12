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
    images:{
      image1: 'https://i.pinimg.com/564x/73/f3/d6/73f3d68396b95f9268074abaf0c59eed.jpg',
      image2: 'https://i.pinimg.com/564x/fa/97/2c/fa972ccc72e4229a1cef82d4e1da5195.jpg',
      image3: 'https://i.pinimg.com/564x/f8/28/51/f828515dc09ecd91c3fc2c45cd1a539d.jpg',
      image4: 'https://picsum.photos/200/300',
      image5: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVLrIqHaprJ01ZD_4oKIbu3l2Qnw3PYfHoEA18e0fSmmmnv-kUEmKvwCogtOEWfkTknmY',
      image6: 'https://beautifulpets.com/images/slider/img1a-229x350.jpg',
      image7: 'https://beautifulpets.com/images/slider/img1a-229x350.jpg',
      image8: 'https://picsum.photos/200/300',

    }
  };
  return (
<section className='flex flex-col w-full lg:flex-row items-center gap-5 xl:gap-10 lg:justify-evenly p-12'>
  <div className='xl:w-1/3 w-full rounded-sm  ' >
    <ProductSwiper {...productProps.images} />
    
  </div>
  <div className="xl:w-1/3 w-full">
    <ProductDetails {...productProps} />
  </div>
</section>
    )
}
