import { Products } from './products';
import contents from './content';
interface Products {
    id: number;
    name: string;
    image: string;
    price: number;
    rating: number;
  }

export default function Caroussel() {
    return(
           <div className=' grid grid-cols-3 gap-4 justify-center  '>
               {contents.map(contents => (
                   <Products 
                   id={contents.id}
                       key={contents.id}
                       image={contents.image}
                       name={contents.name}
                       price={contents.price}
                       rating={contents.rating}
                   />
               ))}
           </div>
    )
}