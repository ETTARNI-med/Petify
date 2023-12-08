
import { Link } from "react-router-dom";


export default function Breadcrump({title,logo,path}:{title:string ,logo: React.ReactNode, path:string}) {
  return (
    
          <Link to={path} className="block transition hover:text-gray-700">
            <span className="sr-only">{title}</span>
            {logo}
          </Link>
  );
}
