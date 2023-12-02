import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { PenBoxIcon , SaveIcon } from "lucide-react";

export default function UserInfo() {
  const User = {
    first_name: "charaf",
    last_name: "charouit",
    email: "charaf@charouit",
    phone: "charaf@charouit",
    city: "charaf@charouit",
    image: false,
    id: "charaf@charouit",
    created_at: "2023-22-10",
    last_updated_at: "2002-12-08",
    status: "active",
    verified: true,
    birthdate: "2002-12-08",
    description: "hi man",
  };
  const formsEditable = [
    { name: "First Name", value: User.first_name ,  editable: true },
    { name: "Last Name", value: User.last_name , editable: true},
    { name: "Email", value: User.email , editable: true },
    { name: "City", value: User.city , editable: true},
    { name: "Status", value: User.status , editable: false},
    { name: "Last Updated at", value: User.last_updated_at , editable: false},
  ];

  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className="w-full flex flex-col items-center">
      <label className="md:px-5 md:text-2xl xl:text-3xl 2xl:text-4xl self-start xl:px-12 text-xl font-semibold font-poppins dark:text-slate-300 ">
        Profile Info
      </label>
      <p className="text-xs md:text-sm 2xl:text-base self-start font-Raleway leading-5 text-gray-600">
        Edit your personal informations.
      </p>
      <div
        className={
          isEditing
            ? "w-40 md:w-64 xl:w-80  flex justify-between self-end px-2 xl:px-7 md:px-5 "
            : "w-full px-2 md:px-5 xl:px-7 flex justify-end"
        }
      >
        <Button
          onClick={() => {
            setIsEditing(!isEditing);
          }}
          variant={"outline"}
          className={
            isEditing
              ? "font-Poppins text-base md:text-lg xl:text-xl  w-14 md:w-20 lg:w-28 xl:w-32 2xl:w-36 dark:hover:text-primarycolor dark:text-secondcolor p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6"
              : "font-Poppins text-base md:text-lg xl:text-xl  w-36 md:w-44 lg:w-52 xl:w-56 2xl:w-60 dark:hover:text-primarycolor dark:text-secondcolor p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 "
          }
        >
          {isEditing ? <label className="flex w-full items-center justify-evenly"><SaveIcon size={24}/><span>Save</span></label> : <label className="flex w-full items-center justify-evenly"><PenBoxIcon size={24}/><span>Edit Profile</span></label>}
        </Button>
        {isEditing && (
          <Button
            onClick={() => {
              setIsEditing(!isEditing);
            }}
            variant={"destructive"}
            className="font-medium text-base md:text-lg xl:text-xl p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 font-Poppins"
          >
            {" "}
            Cancel{" "}
          </Button>
        )}
      </div>
      <div className="flex flex-col items-center w-full lg:flex-row lg:justify-around lg:py-10">
        <div className="flex flex-col items-center gap-5 ">
          <img
            className="rounded-full h-auto w-36 md:w-48 lg:w-60 xl:w-72 "
            src={
              User.image
                ? User.image
                : "https://i.pinimg.com/564x/20/05/e2/2005e27a39fa5f6d97b2e0a95233b2be.jpg"
            }
            alt=""
          />
          <label className="2xl:text-2xl lg:text-xl sm:text-lg text-lg font-Poppins ">
            {User.first_name} {User.last_name}
          </label>
        </div>
        <form
          action=""
          method="POST"
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3  gap-4 md:gap-8 xl:gap-10  mt-8"
        >
          {formsEditable.map((input, index) => {
            return(

              <div key={index}>
              <label className="block text-sm md:text-base xl:text-lg 2xl:text-xl font-Poppins font-medium leading-5 text-slate-400">
                {input.name}
              </label>
              <Input
                disabled={isEditing && input.editable ? false : true}
                type="text"
                id="text"
                placeholder="First Name"
                className="cursor-pointer p-2 w-48 md:w-56 xl:w-64 2xl:w-72 font-Poppins text-sm md:text-base xl:text-lg 2xl:text-xl md:p-3 xl:p-4 rounded-sm shadow-md "
                value={input.value}
              />
            </div>
          )
          })}
        </form>
      </div>
    </div>
  );
}
