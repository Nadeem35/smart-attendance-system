import { useEffect, useState } from "react";
import attendanceBg from "../assets/attendanceBg.jpg";

const EmployeeProfile2 = () => {
  const [profile, setProfile] = useState(null);

  const users = [
    { ID: 1, FName: "John", age: 32, Phone: 9087654321, Address: "123 Jamia Nagar, New Delhi" },
    { ID: 2, FName: "Sam", age: 54, Phone: 9087654321, Address: "321 Batla House, Okhla, New Delhi" },
    { ID: 3, FName: "Michael", age: 23, Phone: 9087654321, Address: "958 Secunderabad, Hyderabad" },
    { ID: 3, FName: "John", age: 43, Phone: 9087237421, Address: "Jamia Nagar, New Delhi" }
  ];

  useEffect(() => {
    // fetch("https://fakestoreapi.com/products")
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((err) => console.error(err));

    //--------------------

    //   fetch("https://dummyjson.com/carts?_limit=5")
    //     .then((res) => res.json())
    //     .then((data) => setProfile(data.carts))
    //     .catch((err) => console.error(err));
  }, []);

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading profiles...
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${attendanceBg})` }}
    >
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-6 p-6">
          {profile.users.map((user) => {
            // const photo = profile[index]; // ✅ API DATA

            return (
              <div
                key={user.id}   // ✅ ID FROM API
                className="w-70 bg-black/80 text-gray-200 rounded-md border-4 border-black/10 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
              >
                {/* ✅ API IMAGE */}
                <img
                  src={user.image}
                  alt={user.id}
                  className="w-100% h-auto bg-cover rounded-fll mx-auto my-3 bg-white 
                borde-2 border-t-amber-500 border-b-amber-500 border-r-green-500 border-l-green-500 
                object-cover rounded-sm 
                "
                />
                <hr className="py-1 text-gray-400" />
                <div className="px-3 pb-4">
                  {/* ✅ MIXED DATA CORRECTLY */}

                  <p><strong>API ID:</strong> {user.id}</p>
                  <p><strong>Title:</strong> {user.firstName} {user.lastName}</p>

                  <div className="my-2 flex justify-between ">

                    <div className="w-1/2 text-center border-r border-gray-400">
                      <p><strong>Gender</strong> </p>
                      <hr className="border-b border-gray-400" />
                      <p> {user.gender}</p>
                    </div>

                    <div className="w-1/2 border-gray-400 block text-center">
                      <p><strong>Age</strong>  </p>
                      <hr className="border-b border-gray-400" />
                      <p>{user.age}</p>
                    </div>

                  </div>


                  <p><strong>Blood Group:</strong> {user.bloodGroup} </p>
                  <p><strong>Weight:</strong> {user.weight} </p>

                  <p>
                    <strong>DOB:</strong>{" "}
                    <span className="text-green-500/70">{user.birthDate}</span>{" "}
                  </p>
                  <p><strong>Email: </strong></p>
                  <span className="text-gray-400">{user.email}</span>
                  <p>
                    <strong>University: </strong>
                    <span className="text-gray-300">
                      {user.university}
                    </span>
                  </p>

                  <div className="bg-gray-600/30 px-3">
                    <p className="text-center font-bold">Hairs Style</p>
                    <p>Color: {user.hair.color}</p>
                    <p>Type: {user.hair.type}</p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile2;
