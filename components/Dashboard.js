// import React from 'react';

// const Dashboard = ({ data }) => {
//   return (
//     <div className="p-4 bg-gray-100 rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//         {data?.map((item, index) => (
//           <div key={index} className="p-4 bg-white rounded-lg shadow">
//             <h3 className="text-lg font-semibold">{item.title}</h3>
//             <p className="mt-2 text-gray-600">{item.value}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



import React from 'react';

const Dashboard = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.map((item, index) => (
        <div key={index} className={`p-4 rounded-lg shadow-md ${index === 3 ? 'bg-green-300 text-white' : 'bg-white'}`}>
          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
          <p className="text-2xl text-blue-500">{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
