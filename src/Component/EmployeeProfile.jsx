import { useEffect, useState } from "react";
import attendanceBg from "../assets/attendanceBg.jpg";

const EmployeeProfile = () => {
  const [profile, setProfile] = useState(null);

  // const users = [
  //   { ID: 1, FName: "John", age: 32, Phone: 9087654321, Address: "123 Jamia Nagar, New Delhi" },
  //   { ID: 2, FName: "Sam", age: 54, Phone: 9087654321, Address: "321 Batla House, Okhla, New Delhi" },
  //   { ID: 3, FName: "Michael", age: 23, Phone: 9087654321, Address: "958 Secunderabad, Hyderabad" }
  // ];

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=3")
      .then((res) => res.json())
      .then((data) => setProfile(data))
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
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {profile.map((user, index) => {
          const photo = profile[index]; // ✅ API DATA

          return (
            <div
              key={photo.id}   // ✅ ID FROM API
              className="w-70 bg-blue-600/80 p-4 text-white rounded-xl shadow-lg"
            >
              {/* ✅ API IMAGE */}
              <img
                src={user.thumbnailUrl}
                alt={user.title}
                className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-white object-cover"
              />
              {/* ✅ MIXED DATA CORRECTLY */}
              <p><strong>API ID:</strong> {user.id}</p>
              <p><strong>Name:</strong> {user.title}</p>
              <p><strong>Age:</strong> {user.albumId}</p>
              <p><strong>Phone:</strong> {user.Phone}</p>
              <p><strong>Address:</strong> {user.Address}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EmployeeProfile;
