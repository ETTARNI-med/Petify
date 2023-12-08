import React from "react";
import Breadcrump from "./Breadcrump";

interface DirectoryItem {
    path: string;
    logo: React.ReactNode; // Assuming logo is a string, you can replace it with the actual type
    title: string;
  }
  
  interface BreadcrumpsProps {
    Directory: DirectoryItem[];
  }
export default function Breadcrumps ({BreadcrumpsProps}:{} ) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-1 text-sm text-gray-600">{
        Directory.map((item,index)=>{
            <li key={index}><Breadcrump path={item.path} logo={item.logo} title={item.title}/></li>
        })
      }
      </ol>
    </nav>
  );
}
