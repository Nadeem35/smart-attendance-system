import { useEffect, useState } from "react";
import attendanceBg from "../assets/attendanceBg.jpg";

const EmployeeProfile2 = () => {
  const [profile, setProfile] = useState([]); // users array only

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setProfile(data.users)) // ✅ IMPORTANT
      .catch((err) => console.error(err));
  }, []);

  // ✅ Correct loading check
  if (!profile.length) {
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
          {profile.map((user) => (
            <div
              key={user.id}
              className="w-72 bg-black/80 text-gray-200 rounded-md shadow-lg"
            >
              <img
                src={user.image}
                alt={user.firstName}
                className="w-full h-56 object-cover rounded-t-md bg-white"
              />

              <div className="px-3 py-4">
                <p><strong>ID:</strong> {user.id}</p>
                <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
                <p><strong>Age:</strong> {user.age}</p>
                <p><strong>Birth Date:</strong> {user.birthDate}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile2;
