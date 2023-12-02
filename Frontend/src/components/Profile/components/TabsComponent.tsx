import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';

interface TabsComponentProps {
  items: { label: string; content: any , icon: any }[];
}

const TabsComponent: React.FC<TabsComponentProps> = ({ items }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleSelectChange = (index:number)=>{
    setActiveTab(index)    
    console.log(activeTab)
  }


  return (
    <div>
    <div className="sm:hidden flex flex-col items-center">
      <label htmlFor="Tab" className="sr-only">where to?</label>
      <Select onValueChange={(value:any)=>{setActiveTab(value)}} >
      <SelectTrigger className="w-72 text-center flex justify-center font-Poppins" >
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
{
  items.map((item , index) => (
    <SelectItem  className='flex justify-center w-full text-center font-Poppins'  key={index} value={index} ><span>{item.label}</span></SelectItem>
  ))
}
        </SelectGroup>
      </SelectContent>
    </Select>
    </div>
  
    <div className="hidden sm:flex  justify-center w-full px-4 md:px-6 xl:px-10 2xl:px-12">
      <div className="border-b-[0.5px] border-gray-200 w-full flex justify-center">
        <nav className=" px-4 w-full flex justify-around  gap-6  font-Poppins" >  
        {items.map(({ label, icon }, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={activeTab === index ? "text-secondcolor inline-flex active:border-b-2 shrink-0 w-1/4 justify-center items-center gap-2 border-b-2 border-transparent px-1 pb-4 text-xl xl:text-2xl border-b-secondcolor" : "text-xl xl:text-2xl inline-flex active:border-b-2 shrink-0 w-1/4 justify-center items-center gap-2 border-b-2 border-transparent px-1 pb-4 font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 ease-linear duration-100"}
          >
            {icon}
            {label}
          </button>
        ))}
        </nav>
      </div>
    </div>
      {
        items[activeTab].content
      }
  </div>
  );
};

export default TabsComponent;
