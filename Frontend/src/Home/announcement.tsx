import React from "react";

const announcement = () => {
  return (
    <div className="bg-secondcolor dark:bg-thirdcolor px-4 py-3 text-darkcolor dark:text-primarycolor">
      <p className="text-center text-sm font-medium ">
        Be the first to get our 50% deals
        <a href="#" className="inline-block underline p-2">
          Check out this new course!
        </a>
      </p>
    </div>
  );
};
export default announcement;
