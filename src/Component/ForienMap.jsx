import React from "react";

const ForienMap = ({ arrProp }) => {
  return (
    <>
      <h1>Hello Page</h1>
      {/* {
        <table border="1">
          <thead>
            <tr>
              <th className="border-4 px-3">ID</th>
              <th className="border-4 px-3">Name</th>
              <th className="border-4 px-3">Roll</th>
            </tr>
          </thead>
          <tbody>
            {arrProp.map((item) => (
              <tr>
                <td className="border-4 border-black px-3 text-blue-600">
                  {item.id}
                </td>
                <td className="border-4 border-black px-3 text-blue-600">
                  {item.name}
                </td>
                <td className="border-4 border-black px-3 text-blue-600">
                  {item.roll}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      } */}
    </>
  );
};

export default ForienMap;
