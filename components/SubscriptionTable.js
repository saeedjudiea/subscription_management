// import React, { useState } from "react";

// const SubscriptionTable = ({ subscriptions, onUpdate, onDelete, onRenew }) => {
//   const [editingId, setEditingId] = useState(null);
//   const [editedSubscription, setEditedSubscription] = useState({});
//   const [expandedId, setExpandedId] = useState(null);
//   const [renewingId, setRenewingId] = useState(null);
//   const [renewData, setRenewData] = useState({});

//   const getStatusColor = (endDate) => {
//     const currentDate = new Date();
//     const end = new Date(endDate);
//     const diffTime = end - currentDate;
//     const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));

//     if (diffMonths <= 2) return "bg-red-100";
//     if (diffMonths <= 4) return "bg-yellow-100";
//     return "bg-green-100";
//   };

//   const handleEdit = (subscription) => {
//     setEditingId(subscription.id);
//     setEditedSubscription(subscription);
//   };

//   const handleSave = async () => {
//     await onUpdate(editedSubscription);
//     setEditingId(null);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditedSubscription({ ...editedSubscription, [name]: value });
//   };

//   const toggleExpand = (id) => {
//     setExpandedId(expandedId === id ? null : id);
//   };

//   const handleRenew = (subscription) => {
//     setRenewingId(subscription.id);
//     setRenewData({ service: subscription.service });
//   };

//   const handleRenewChange = (e) => {
//     const { name, value } = e.target;
//     setRenewData({ ...renewData, [name]: value });
//   };

//   const handleRenewSave = async () => {
//     await onRenew(renewingId, renewData);
//     setRenewingId(null);
//     setRenewData({});
//   };

//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full bg-white">
//         <thead>
//           <tr>
//             <th className="px-4 py-2">Service</th>
//             <th className="px-4 py-2">Start Date</th>
//             <th className="px-4 py-2">End Date</th>
//             <th className="px-4 py-2">Price</th>
//             <th className="px-4 py-2">URL</th>
//             <th className="px-4 py-2">User</th>
//             <th className="px-4 py-2">Pass</th>
//             <th className="px-4 py-2">New Password</th>
//             <th className="px-4 py-2">Expires On</th>
//             <th className="px-4 py-2">Hosting Name</th>
//             <th className="px-4 py-2">Kind</th>
//             <th className="px-4 py-2">Name of Development Tool</th>
//             <th className="px-4 py-2">Status</th>
//             <th className="px-4 py-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
          // {subscriptions.map((subscription) => (
          //   <React.Fragment key={subscription.id}>
          //     <tr className={`${getStatusColor(subscription.endDate)}`}>
          //       {editingId === subscription.id ? (
          //         <>
          //           <td className="border px-2 py-[0.5]">
          //             <input
          //               type="text"
          //               name="service"
          //               value={editedSubscription.service}
          //               onChange={handleChange}
          //               className="border px-2 py-1"
          //             />
          //           </td>
          //           <td className="border px-2 py-[0.5]">
          //             <input
          //               type="date"
          //               name="startDate"
          //               value={new Date(editedSubscription.startDate)
          //                 .toISOString()
          //                 .substring(0, 10)}
          //               onChange={handleChange}
          //               className="border px-2 py-1"
          //             />
          //           </td>
          //           <td className="border px-2 py-[0.5]">
          //             <input
          //               type="date"
          //               name="endDate"
          //               value={new Date(editedSubscription.endDate)
          //                 .toISOString()
          //                 .substring(0, 10)}
          //               onChange={handleChange}
          //               className="border px-2 py-1"
          //             />
          //           </td>
          //           <td className="border px-2 py-[0.5]">
          //             <input
          //               type="number"
          //               name="price"
          //               value={editedSubscription.price}
          //               onChange={handleChange}
          //               className="border px-2 py-1"
          //             />
          //           </td>
          //           <td className="border px-2 py-[0.5]">
          //             <input
          //               type="url"
          //               name="url"
          //               value={editedSubscription.url}
          //               onChange={handleChange}
          //               className="border px-2 py-1"
          //             />
          //           </td>
          //           <td className="border px-2 py-[0.5]">
          //             <input
          //               type="text"
          //               name="user"
          //               value={editedSubscription.user}
          //               onChange={handleChange}
          //               className="border px-2 py-1"
          //             />
          //           </td>
          //           <td className="border px-2 py-[0.5]">
          //             <input
          //               type="password"
          //               name="pass"
          //               value={editedSubscription.pass}
          //               onChange={handleChange}
          //               className="border px-2 py-1"
          //             />
          //           </td>
          //           <td className="border px-2 py-[0.5]">
          //             <input
          //               type="password"
          //               name="newPassword"
          //               value={editedSubscription.newPassword}
          //               onChange={handleChange}
          //               className="border px-2 py-1"
          //             />
          //           </td>
          //           <td className="border px-2 py-[0.5]">
          //             <input
          //               type="date"
          //               name="expiresOn"
          //               value={new Date(editedSubscription.expiresOn)
          //                 .toISOString()
          //                 .substring(0, 10)}
          //               onChange={handleChange}
          //               className="border px-2 py-1"
          //             />
          //           </td>
          //           <td className="border px-2 py-[0.5]">
          //             <input
          //               type="text"
          //               name="hostingName"
          //               value={editedSubscription.hostingName}
          //               onChange={handleChange}
          //               className="border px-2 py-1"
          //             />
          //           </td>
          //           <td className="border px-2 py-[0.5]">
          //             <input
          //               type="text"
          //               name="kind"
          //               value={editedSubscription.kind}
          //               onChange={handleChange}
          //               className="border px-2 py-1"
          //             />
          //           </td>
          //           <td className="border px-2 py-[0.5]">
          //             <input
          //               type="text"
          //               name="nameOfDevelopmentTool"
          //               value={editedSubscription.nameOfDevelopmentTool}
          //               onChange={handleChange}
          //               className="border px-2 py-1"
          //             />
          //           </td>
          //           <td className="border px-2 py-[0.5]">
          //             <span
          //               className="px-2 py-1 rounded-full text-white"
          //               style={{
          //                 backgroundColor: getStatusColor(
          //                   subscription.endDate
          //                 ).slice(3),
          //               }}
          //             >
          //               {new Date(subscription.endDate) > new Date()
          //                 ? "Active"
          //                 : "Expired"}
          //             </span>
          //           </td>
          //           <td className="border px-2 py-[0.5]">
          //             <button
          //               onClick={handleSave}
          //               className="bg-green-500 text-white px-4 py-2 rounded"
          //             >
          //               Save
          //             </button>
          //             <button
          //               onClick={() => setEditingId(null)}
          //               className="bg-gray-500 text-white px-4 py-2 rounded ml-2"
          //             >
          //               Cancel
          //             </button>
          //           </td>
          //         </>
          //       ) : (
          //         <>
          //           <td className="border px-2 py-[0.5]">
          //             {subscription.service}
          //           </td>
          //           <td className="border px-2 py-[0.5]">
          //             {new Date(subscription.startDate).toLocaleDateString()}
          //           </td>
          //           <td className="border px-2 py-[0.5]">
          //             {new Date(subscription.endDate).toLocaleDateString()}
          //           </td>
          //           <td className="border px-2 py-[0.5]">
          //             {subscription.price}
          //           </td>
          //           <td className="border px-2 py-[0.5]">{subscription.url}</td>
          //           <td className="border px-2 py-[0.5]">
          //             {subscription.user}
          //           </td>
          //           <td className="border px-2 py-[0.5]">
          //             {subscription.pass}
          //           </td>
          //           <td className="border px-2 py-[0.5]">
          //             {subscription.newPassword}
          //           </td>
          //           <td className="border px-2 py-[0.5]">
          //             {subscription.expiresOn
          //               ? new Date(subscription.expiresOn).toLocaleDateString()
          //               : ""}
          //           </td>
          //           <td className="border px-2 py-[0.5]">
          //             {subscription.hostingName}
          //           </td>
          //           <td className="border px-2 py-[0.5]">
          //             {subscription.kind}
          //           </td>
          //           <td className="border px-2 py-[0.5]">
          //             {subscription.nameOfDevelopmentTool}
          //           </td>
          //           <td className="border px-2 py-[0.5]">
          //             <span
          //               className="px-2 py-1 rounded-full text-gray-600"
          //               style={{
          //                 backgroundColor: getStatusColor(
          //                   subscription.endDate
          //                 ).slice(3),
          //               }}
          //             >
//                         {new Date(subscription.endDate) > new Date()
//                           ? "Active"
//                           : "Expired"}
//                       </span>
//                     </td>
//                     <td className="border px-4 py-[0.5] flex ">
//                       <svg
//                         onClick={() => handleEdit(subscription)}
//                         className="w-6 h-6 text-blue-500 dark:text-white"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         fill="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           fill-rule="evenodd"
//                           d="M11.32 6.176H5c-1.105 0-2 .949-2 2.118v10.588C3 20.052 3.895 21 5 21h11c1.105 0 2-.948 2-2.118v-7.75l-3.914 4.144A2.46 2.46 0 0 1 12.81 16l-2.681.568c-1.75.37-3.292-1.263-2.942-3.115l.536-2.839c.097-.512.335-.983.684-1.352l2.914-3.086Z"
//                           clip-rule="evenodd"
//                         />
//                         <path
//                           fill-rule="evenodd"
//                           d="M19.846 4.318a2.148 2.148 0 0 0-.437-.692 2.014 2.014 0 0 0-.654-.463 1.92 1.92 0 0 0-1.544 0 2.014 2.014 0 0 0-.654.463l-.546.578 2.852 3.02.546-.579a2.14 2.14 0 0 0 .437-.692 2.244 2.244 0 0 0 0-1.635ZM17.45 8.721 14.597 5.7 9.82 10.76a.54.54 0 0 0-.137.27l-.536 2.84c-.07.37.239.696.588.622l2.682-.567a.492.492 0 0 0 .255-.145l4.778-5.06Z"
//                           clip-rule="evenodd"
//                         />
//                       </svg>

//                       {/* <button onClick={() => handleEdit(subscription)} className="bg-blue-500 text-white px-4 py-2 rounded">Edit</button> */}
//                       {/* <button onClick={() => onDelete(subscription.id)} className="bg-red-500 text-white px-4 py-2 rounded ml-2">Delete</button> */}
//                       <svg
//                         onClick={() => onDelete(subscription.id)}
//                         className="w-6 h-6 text-red-500 dark:text-white"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           stroke="currentColor"
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                           stroke-width="2"
//                           d="M6 18 17.94 6M18 18 6.06 6"
//                         />
//                       </svg>

//                       {/* <button onClick={() => handleRenew(subscription)} className="bg-yellow-500 text-white px-4 py-2 rounded ml-2">Renew</button> */}
//                       <svg
//                         onClick={() => handleRenew(subscription)}
//                         className="w-6 h-6 text-yellow-500 dark:text-white"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           stroke="currentColor"
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                           stroke-width="2"
//                           d="m16 10 3-3m0 0-3-3m3 3H5v3m3 4-3 3m0 0 3 3m-3-3h14v-3"
//                         />
//                       </svg>

//                       {subscription.history.length > 0 && (
//                         <svg
//                           onClick={() => toggleExpand(subscription.id)}
//                           className="w-6 h-6 text-gray-500 dark:text-white"
//                           aria-hidden="true"
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="24"
//                           height="24"
//                           fill="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             fill-rule="evenodd"
//                             d="M18.425 10.271C19.499 8.967 18.57 7 16.88 7H7.12c-1.69 0-2.618 1.967-1.544 3.271l4.881 5.927a2 2 0 0 0 3.088 0l4.88-5.927Z"
//                             clip-rule="evenodd"
//                           />
//                         </svg>

//                         // <button onClick={() => toggleExpand(subscription.id)} className="bg-gray-500 text-white px-4 py-2 rounded ml-2">
//                         //   {expandedId === subscription.id ? 'Hide History' : 'Show History'}
//                         // </button>
//                       )}
//                     </td>
//                   </>
//                 )}
//               </tr>
//               {expandedId === subscription.id && (
//                 <tr>
//                   <td colSpan="14" className="border px-2 py-[0.5]">
//                     <div className="bg-gray-100 p-4 rounded-lg">
//                       <h3 className="text-xl font-semibold mb-2">
//                         Subscription History for{" "}
//                         <span className=" text-blue-500">
//                           {subscription.service}
//                         </span>
//                       </h3>
//                       {/* <ul className="list-disc list-inside"> */}
//                       <ol class="items-center sm:flex">
//                         {subscription.history.map((historyItem, index) => (
//                           <li key={index} class="relative mb-6 sm:mb-0">
//                             <div class="flex items-center">
//                               <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
//                                 <svg
//                                   class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
//                                   aria-hidden="true"
//                                   xmlns="http://www.w3.org/2000/svg"
//                                   fill="currentColor"
//                                   viewBox="0 0 20 20"
//                                 >
//                                   <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
//                                 </svg>
//                               </div>
//                               <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
//                             </div>
//                             <div class="mt-3 sm:pe-8">
//                               <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
//                                 Price: {historyItem.price}
//                               </h3>
//                               <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{`Start: ${new Date(
//                                 historyItem.startDate
//                               ).toLocaleDateString()} - End: ${new Date(
//                                 historyItem.endDate
//                               ).toLocaleDateString()}`}</time>
//                             </div>
//                           </li>
//                         ))}
//                       </ol>
//                     </div>
//                   </td>
//                 </tr>
//               )}
//               {renewingId === subscription.id && (
//                 <tr>
//                   <td colSpan="14" className="border px-2 py-[0.5]">
//                     <div className="bg-gray-100 p-4 rounded-lg">
//                       <h3 className="text-xl font-semibold mb-2">
//                         Renew Subscription
//                       </h3>
//                       <div className="mb-4">
//                         <label
//                           className="block text-gray-700 text-sm font-bold mb-2"
//                           htmlFor="renewStartDate"
//                         >
//                           Start Date
//                         </label>
//                         <input
//                           type="date"
//                           id="renewStartDate"
//                           name="startDate"
//                           value={renewData.startDate || ""}
//                           onChange={handleRenewChange}
//                           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                           required
//                         />
//                       </div>
//                       <div className="mb-4">
//                         <label
//                           className="block text-gray-700 text-sm font-bold mb-2"
//                           htmlFor="renewEndDate"
//                         >
//                           End Date
//                         </label>
//                         <input
//                           type="date"
//                           id="renewEndDate"
//                           name="endDate"
//                           value={renewData.endDate || ""}
//                           onChange={handleRenewChange}
//                           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                           required
//                         />
//                       </div>
//                       <div className="mb-4">
//                         <label
//                           className="block text-gray-700 text-sm font-bold mb-2"
//                           htmlFor="renewPrice"
//                         >
//                           Price
//                         </label>
//                         <input
//                           type="number"
//                           id="renewPrice"
//                           name="price"
//                           value={renewData.price || ""}
//                           onChange={handleRenewChange}
//                           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                           required
//                         />
//                       </div>
//                       <button
//                         onClick={handleRenewSave}
//                         className="bg-green-500 text-white px-4 py-2 rounded"
//                       >
//                         Save
//                       </button>
//                       <button
//                         onClick={() => setRenewingId(null)}
//                         className="bg-gray-500 text-white px-4 py-2 rounded ml-2"
//                       >
//                         Cancel
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               )}
//             </React.Fragment>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default SubscriptionTable;



import React, { useState } from 'react';
import { FaEdit, FaTrash, FaRedo, FaInfoCircle } from 'react-icons/fa';

const SubscriptionTable = ({ subscriptions, onUpdate, onDelete, onRenew }) => {
  const [editingId, setEditingId] = useState(null);
  const [editedSubscription, setEditedSubscription] = useState({});
  const [expandedId, setExpandedId] = useState(null);
  const [renewingId, setRenewingId] = useState(null);
  const [renewData, setRenewData] = useState({});

  const getStatusColor = (endDate) => {
    const currentDate = new Date();
    const end = new Date(endDate);
    const diffTime = end - currentDate;
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));

    if (diffMonths <= 2) return 'bg-red-100';
    if (diffMonths <= 4) return 'bg-yellow-100';
    return 'bg-green-100';
  };

  const handleEdit = (subscription) => {
    setEditingId(subscription.id);
    setEditedSubscription(subscription);
  };

  const handleSave = async () => {
    await onUpdate(editedSubscription);
    setEditingId(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedSubscription({ ...editedSubscription, [name]: value });
  };

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleRenew = (subscription) => {
    setRenewingId(subscription.id);
    setRenewData({ service: subscription.service });
  };

  const handleRenewChange = (e) => {
    const { name, value } = e.target;
    setRenewData({ ...renewData, [name]: value });
  };

  const handleRenewSave = async () => {
    await onRenew(renewingId, renewData);
    setRenewingId(null);
    setRenewData({});
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-md">
        <thead>
          <tr>
            <th className="px-4 py-2">Service</th>
            <th className="px-4 py-2">Start Date</th>
            <th className="px-4 py-2">End Date</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {subscriptions.map((subscription) => (
            <React.Fragment key={subscription.id}>
              <tr className={`${getStatusColor(subscription.endDate)}`}>
                <td className="border px-4 py-2">{subscription.service}</td>
                <td className="border px-4 py-2">{new Date(subscription.startDate).toLocaleDateString()}</td>
                <td className="border px-4 py-2">{new Date(subscription.endDate).toLocaleDateString()}</td>
                <td className="border px-4 py-2">{subscription.price}</td>
                <td className="border px-4 py-2">
                  <span className="px-2 py-1 rounded-full text-gray-600" style={{ backgroundColor: getStatusColor(subscription.endDate).slice(3) }}>
                    {new Date(subscription.endDate) > new Date() ? 'Active' : 'Expired'}
                  </span>
                </td>
                <td className="border px-4 py-2 flex items-center">
                  <FaEdit onClick={() => handleEdit(subscription)} className="text-blue-500 cursor-pointer mx-2" />
                  <FaTrash onClick={() => onDelete(subscription.id)} className="text-red-500 cursor-pointer mx-2" />
                  <FaRedo onClick={() => handleRenew(subscription)} className="text-yellow-500 cursor-pointer mx-2" />
                  <FaInfoCircle onClick={() => toggleExpand(subscription.id)} className="text-gray-500 cursor-pointer mx-2" />
                </td>
              </tr>
              {expandedId === subscription.id && (
                <tr>
                  <td colSpan="6" className="border px-4 py-2">
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2">Subscription Details <span className=" text-blue-500"> {subscription.service}</span></h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="mb-2"><strong>URL:</strong> {subscription.url}</div>
                        <div className="mb-2"><strong>User:</strong> {subscription.user}</div>
                        <div className="mb-2"><strong>Pass:</strong> {subscription.pass}</div>
                        <div className="mb-2"><strong>New Password:</strong> {subscription.newPassword}</div>
                        <div className="mb-2"><strong>Expires On:</strong> {subscription.expiresOn ? new Date(subscription.expiresOn).toLocaleDateString() : ''}</div>
                        <div className="mb-2"><strong>Hosting Name:</strong> {subscription.hostingName}</div>
                        <div className="mb-2"><strong>Kind:</strong> {subscription.kind}</div>
                        <div className="mb-2"><strong>Name of Development Tool:</strong> {subscription.nameOfDevelopmentTool}</div>
                      </div>
                      <div className="mt-4">
                        <h4 className="text-lg font-semibold mb-2">History </h4>
                        <ul className="list-disc list-inside">
                                               <ol class="items-center sm:flex">
                         {subscription.history.map((historyItem, index) => (
                           <li key={index} class="relative mb-6 sm:mb-0">
                             <div class="flex items-center">
                               <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white  shrink-0">
                                 <svg
                                   class="w-2.5 h-2.5 text-blue-800 "
                                   aria-hidden="true"
                                   xmlns="http:www.w3.org/2000/svg"
                                   fill="currentColor"
                                   viewBox="0 0 20 20"
                                 >
                                   <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                 </svg>
                               </div>
                               <div class="hidden sm:flex w-full bg-gray-200 h-0.5 "></div>
                             </div>
                             <div class="mt-3 sm:pe-8">
                               <h3 class="text-lg font-semibold text-gray-900 ">
                                 Price: {historyItem.price}
                               </h3>
                               <time class="block mb-2 text-sm font-normal leading-none text-gray-400 ">{`Start: ${new Date(
                                 historyItem.startDate
                               ).toLocaleDateString()} - End: ${new Date(
                                 historyItem.endDate
                               ).toLocaleDateString()}`}</time>
                             </div>
                           </li>
                         ))}
                       </ol>
                          {/* {subscription.history.map((historyItem, index) => (
                            <li key={index}>
                              {`Start: ${new Date(historyItem.startDate).toLocaleDateString()}, End: ${new Date(historyItem.endDate).toLocaleDateString()}, Price: ${historyItem.price}`}
                            </li>
                          ))} */}
                        </ul>
                      </div>
                    </div>
                  </td>
                </tr>
              )}
              {renewingId === subscription.id && (
                <tr>
                  <td colSpan="6" className="border px-4 py-2">
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2">Renew Subscription</h3>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="renewStartDate">
                          Start Date
                        </label>
                        <input
                          type="date"
                          id="renewStartDate"
                          name="startDate"
                          value={renewData.startDate || ''}
                          onChange={handleRenewChange}
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="renewEndDate">
                          End Date
                        </label>
                        <input
                          type="date"
                          id="renewEndDate"
                          name="endDate"
                          value={renewData.endDate || ''}
                          onChange={handleRenewChange}
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="renewPrice">
                          Price
                        </label>
                        <input
                          type="number"
                          id="renewPrice"
                          name="price"
                          value={renewData.price || ''}
                          onChange={handleRenewChange}
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          required
                        />
                      </div>
                      <button onClick={handleRenewSave} className="bg-green-500 text-white px-4 py-2 rounded">Save</button>
                      <button onClick={() => setRenewingId(null)} className="bg-gray-500 text-white px-4 py-2 rounded ml-2">Cancel</button>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubscriptionTable;
