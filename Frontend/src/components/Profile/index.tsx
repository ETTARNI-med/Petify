import { Input } from "../ui/input";

const Profile = () => {
  const User = {
    first_name: "charaf",
    last_name: "charouit",
    email: "charaf@charouit",
    phone: "charaf@charouit",
    address: "charaf@charouit",
    city: "charaf@charouit",
    country: "charaf@charouit",
    postal_code: "charaf@charouit",
    image: "charaf@charouit",
    role: "charaf@charouit",
    id: "charaf@charouit",
    created_at: "charaf@charouit",
    last_updated_at: "charaf@charouit",
    status: "charaf@charouit",
    verified: "charaf@charouit",
    birthdate: "2002-12-08",
    description: "charaf@charouit",
    age: "charaf@charouit",
  }
  return <div className="px-2">
    <div >

    <label className="text-xl font-semibold">My Account</label>
    <p className="mt-1 text-sm leading-5 text-gray-600">Manage your account settings and access.</p>

    </div>
    <form action="" method="POST" className="grid grid-cols-3 gap-4 px-2 mt-8">
      <div>
        <label className="block text-sm font-medium leading-5 text-gray-700">
          First name
        </label>       
        <Input 
        type="text"
        id="text"
        placeholder="First Name"
        className="p-2  w-full  rounded-sm shadow-md "
        value={User.first_name}
        /> 
      </div>
      <div>
        <label className="block text-sm font-medium leading-5 text-gray-700">
          Last name
        </label>       
        <Input 
        type="text"
        id="text"
        placeholder="Last name"
        className="p-2  w-full  rounded-sm shadow-md "
        value={User.last_name}
        /> 
      </div>
    </form>
  </div>;
};

export default Profile;
