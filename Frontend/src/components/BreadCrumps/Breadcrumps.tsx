import React from "react";
import Breadcrump from "./Breadcrump";

interface BreadcrumpsProps {
  Directory: Array<{
    path: string;
    logo: Element;
    title: string;
  }>;
}

const Breadcrumps: React.FC<BreadcrumpsProps> = ({ Directory }) => {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-1 text-gray-600">
        {Directory.map((item, index) => (
          <li key={index} className="flex items-center">
            <Breadcrump path={item.path} logo={item.logo} title={item.title} />
            {index !== Directory.length - 1 && ( // Check if it's not the last element
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumps;
