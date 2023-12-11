
import { Link } from "react-router-dom";


export default function Breadcrump({title,logo,path}:{title:string ,logo: Element, path:string}) {
  return (
    
          <Link to={path} className="flex items-center gap-2 font-semibold font-Poppins  transition hover:text-gray-700">
            {title}
            {logo}
          </Link>
  );
}
