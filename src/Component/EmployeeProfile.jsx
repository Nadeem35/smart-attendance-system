import { useEffect, useState } from "react";
import attendanceBg from "../assets/attendanceBg.jpg";

const EmployeeProfile = () => {
  const [profile, setProfile] = useState(null);

  const users = [
    { ID: 1, FName: "John", age: 32, Phone: 9087654321, Address: "123 Jamia Nagar, New Delhi" },
    { ID: 2, FName: "Sam", age: 54, Phone: 9087654321, Address: "321 Batla House, Okhla, New Delhi" },
    { ID: 3, FName: "Michael", age: 23, Phone: 9087654321, Address: "958 Secunderabad, Hyderabad" },
    { ID: 3, FName: "John", age: 43, Phone: 9087237421, Address: "Jamia Nagar, New Delhi" }
  ];

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/photos?_limit=8")
    //   .then((res) => res.json())
    //   .then((data) => setProfile(data))
    //   .catch((err) => console.error(err));
    //--------------------
    fetch("https://dummyjson.com/carts?_limit=5")
      .then((res) => res.json())
      .then((data) => setProfile(data.carts))
      .catch((err) => console.error(err));
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
          {profile.map((user, index) => {
            const photo = profile[index]; // ✅ API DATA

            return (
              <div
                key={photo.id}   // ✅ ID FROM API
                className="w-70 bg-black/50 text-white rounded-xl border-4 border-black/10 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
              >
                {/* ✅ API IMAGE */}
                <img
                  src={user.products[0]?.thumbnail}
                  alt={user.id}
                  className="w-full h-fit rounded-fll mx-auto mb-4 bg-white/90 
                borde-5 border-t-amber-500 border-b-amber-500 border-r-green-500 border-l-green-500 
                object-cover rounded-tl-xl rounded-tr-xl
                "
                />
                <div className="p-4">
                  {/* ✅ MIXED DATA CORRECTLY */}
                  <p><strong>API ID:</strong> {user.id}</p>
                  <p><strong>Title:</strong> {user.products[0]?.title}</p>
                  <p><strong>Price:</strong> <span className="text-green-500">${user.products[0]?.price}</span></p>
                  <p><strong>Quantity:</strong> {user.products[0]?.quantity}</p>
                  <p><strong>Total Price:</strong> <span className="text-green-500">${user.products[0]?.total?.toFixed(3)}</span></p>
                  <p><strong>Discount Percentage:</strong> {user.products[0]?.discountPercentage}%</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;
