
import Snowfall from "react-snowfall";
const announcement = () => {
  return (
    <>
    <Snowfall snowflakeCount= {200} />
    <div className="bg-red-700 dark:red-800 px-4 py-3 text-darkcolor dark:text-primarycolor">
      <p className="text-center text-sm font-medium text-slate-200 ">
        Be the first to get our 50% deals
        <a href="#" className="inline-block underline p-2">
          Check out our Christmas Deals 
        </a>
      </p>
    </div>
    </>
  );
};
export default announcement;
